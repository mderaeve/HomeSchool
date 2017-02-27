'use strict';
var Home;
(function (Home) {
    var Common;
    (function (Common) {
        var Resources;
        (function (Resources) {
            var ResourceConfiguration = (function () {
                function ResourceConfiguration() {
                    this.preferredLanguage = 'en';
                    this.$resources = [];
                }
                ResourceConfiguration.prototype.addResource = function (resource) {
                    var self = this;
                    self.$resources.push(resource);
                };
                ResourceConfiguration.prototype.getResources = function () {
                    var self = this;
                    return self.$resources;
                };
                return ResourceConfiguration;
            }());
            Resources.ResourceConfiguration = ResourceConfiguration;
            var ResourceService = (function () {
                function ResourceService() {
                    this.$language = '';
                    this.$resourceDictionary = null;
                    this.$dictionary = null;
                    //resource: ResourceBase, preferredLanguage ?: string
                    //this.$resource = resource;
                    //this.setLanguage(preferredLanguage != null ? preferredLanguage : 'en');
                    this.$resourceDictionary = new Common.Dictionary();
                }
                ResourceService.prototype.configure = function (resourceConfig) {
                    var self = this;
                    if (resourceConfig != null) {
                        if (resourceConfig.getResources().length === 0)
                            throw new Error('At least one resource must be configured!');
                        if (resourceConfig.preferredLanguage === '')
                            throw new Error('A preferred language must be set');
                    }
                    else {
                        throw new Error('Resource configuration can not be NULL!');
                    }
                    resourceConfig.getResources().forEach(function (rb) {
                        //self.$resourceDictionary.add(rb.getResourceName(), rb);
                        if (rb.getLanguages() != null && rb.getLanguages().count() > 0) {
                            var languageDictionary_1 = rb.getLanguages();
                            languageDictionary_1.keys().forEach(function (k) {
                                var tmpDictionary = null;
                                if (self.$resourceDictionary.containsKey(k)) {
                                    tmpDictionary = self.$resourceDictionary.getValue(k);
                                }
                                else {
                                    tmpDictionary = new Common.Dictionary();
                                    self.$resourceDictionary.add(k, tmpDictionary);
                                }
                                var translationDictionary = languageDictionary_1.getValue(k);
                                if (translationDictionary != null && translationDictionary.count() > 0) {
                                    translationDictionary.keys().forEach(function (tr) {
                                        tmpDictionary.add(rb.getResourceName() + "." + tr, translationDictionary.getValue(tr));
                                    });
                                }
                            });
                        }
                    });
                    self.setLanguage(resourceConfig.preferredLanguage);
                };
                ResourceService.prototype.getLocalResource = function (resourceKey) {
                    var self = this;
                    if (self.$dictionary.containsKey(resourceKey))
                        return self.$dictionary.getValue(resourceKey);
                    else
                        return 'Unknown resourceKey';
                };
                ResourceService.prototype.setLanguage = function (language) {
                    var self = this;
                    self.$language = language;
                    if (self.$resourceDictionary.containsKey(language))
                        self.$dictionary = self.$resourceDictionary.getValue(language);
                    else
                        throw new Error("Language " + language + " has not been configured!");
                };
                return ResourceService;
            }());
            var ResourceProvider = (function () {
                function ResourceProvider() {
                    this.$resourceService = new ResourceService();
                }
                ResourceProvider.prototype.config = function (resourceConfig) {
                    this.$resourceService.configure(resourceConfig);
                };
                ResourceProvider.prototype.$get = function () {
                    return this.$resourceService;
                };
                ResourceProvider.id = 'resourceService';
                return ResourceProvider;
            }());
            Resources.ResourceProvider = ResourceProvider;
            angular.module('home.resources', [])
                .provider(ResourceProvider.id, ResourceProvider);
        })(Resources = Common.Resources || (Common.Resources = {}));
    })(Common = Home.Common || (Home.Common = {}));
})(Home || (Home = {}));
