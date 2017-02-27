'use strict';
module Home.Common.Resources {
    export interface IResourceConfiguration {
        preferredLanguage: string;
        addResource: (resource: ResourceBase) => void;
        getResources: () => Array<ResourceBase>;
    }

    export interface IResourceService {
        getLocalResource: (resourceKey: string, resourceFile?: string) => string;
        setLanguage: (language: string) => void;
    }

    export class ResourceConfiguration implements IResourceConfiguration {
        private $resources: Array<ResourceBase>;
        preferredLanguage: string = 'en';

        constructor() {
            this.$resources = [];
        }

        addResource(resource: ResourceBase): void {
            const self = this;
            self.$resources.push(resource);
        }

        getResources(): Array<ResourceBase> {
            const self = this;
            return self.$resources;
        }
    }

    class ResourceService implements IResourceService {
        private $language: string = '';

        private $resourceDictionary: Dictionary<string, Dictionary<string, string>> = null;
        private $resource: ResourceBase;
        private $dictionary: Dictionary<string, string> = null;

        constructor() {
            //resource: ResourceBase, preferredLanguage ?: string
            //this.$resource = resource;
            //this.setLanguage(preferredLanguage != null ? preferredLanguage : 'en');
            this.$resourceDictionary = new Dictionary<string, Dictionary<string, string>>();
        }

        configure(resourceConfig: IResourceConfiguration): void {
            const self = this;
            if (resourceConfig != null) {
                if (resourceConfig.getResources().length === 0)
                    throw new Error('At least one resource must be configured!');
                if (resourceConfig.preferredLanguage === '')
                    throw new Error('A preferred language must be set');
            }
            else {
                throw new Error('Resource configuration can not be NULL!');
            }

            resourceConfig.getResources().forEach(rb => {
                //self.$resourceDictionary.add(rb.getResourceName(), rb);
                if (rb.getLanguages() != null && rb.getLanguages().count() > 0) {
                    let languageDictionary = rb.getLanguages();
                    languageDictionary.keys().forEach(k => {
                        let tmpDictionary: Dictionary<string, string> = null;
                        if (self.$resourceDictionary.containsKey(k)) {
                            tmpDictionary = self.$resourceDictionary.getValue(k);
                        }
                        else {
                            tmpDictionary = new Dictionary<string, string>();
                            self.$resourceDictionary.add(k, tmpDictionary);
                        }

                        let translationDictionary = languageDictionary.getValue(k);
                        if (translationDictionary != null && translationDictionary.count() > 0) {
                            translationDictionary.keys().forEach(tr => {
                                tmpDictionary.add(`${rb.getResourceName()}.${tr}`, translationDictionary.getValue(tr));
                            });
                        }
                    });
                }
            });

            self.setLanguage(resourceConfig.preferredLanguage);
        }

        getLocalResource(resourceKey: string): string {
            const self = this;

            if (self.$dictionary.containsKey(resourceKey))
                return self.$dictionary.getValue(resourceKey);
            else
                return 'Unknown resourceKey';
        }

        setLanguage(language: string): void {
            const self = this;
            self.$language = language;
            if (self.$resourceDictionary.containsKey(language))
                self.$dictionary = self.$resourceDictionary.getValue(language);
            else
                throw new Error(`Language ${language} has not been configured!`);
        }
    }

    export class ResourceProvider implements ng.IServiceProvider {
        static id: string = 'resourceService';
        private $resourceService: ResourceService;

        constructor() {
            this.$resourceService = new ResourceService();
        }

        public config(resourceConfig: IResourceConfiguration): void {
            this.$resourceService.configure(resourceConfig);
        }

        public $get(): IResourceService {
            return this.$resourceService;
        }
    }

    angular.module('home.resources', [])
        .provider(ResourceProvider.id, ResourceProvider);
}