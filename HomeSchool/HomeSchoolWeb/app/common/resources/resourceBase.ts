'use strict';
//Structure of the resource files is as follows:
//module BDO.BudgetTool.Resources {
//    import C = BDO.Common;

//    export class ComponentResources extends C.Resources.ResourceBase {
//        protected setLanguageDictionary(): void {
//            const self = this;
//            let Translations_en: Array<C.KeyValuePair<string, string>> = [
//                { key: 'title', value: 'Title' }
//            ];

//            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
//                { key: 'title', value: 'Titel' }
//            ];

//            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
//                { key: 'en', value: new C.Dictionary(Translations_en) },
//                { key: 'nl', value: new C.Dictionary(Translations_nl) }
//            ]);
//        };

//        constructor() {
//            super('Component');
//        }
//    }
//}
module BDO.Common.Resources {
    export abstract class ResourceBase {
        protected resourceName: string;
        protected languageDictionary: Dictionary<string, Dictionary<string, string>> = null;

        constructor(name: string) {
            this.resourceName = name;
            this.setLanguageDictionary();
        }

        protected setLanguageDictionary(): void {
            throw new Error('setLanguageDictionary not implemented in child class!');
        };

        getLanguages(): Dictionary<string, Dictionary<string, string>> {
            const self = this;
            return self.languageDictionary;
        }

        getResourceName(): string {
            const self = this;
            return self.resourceName;
        }

        getTranslations(language: string): Dictionary<string, string> {
            const self = this;
            if (self.languageDictionary == null)
                self.setLanguageDictionary();
            if (self.languageDictionary.containsKey(language))
                return self.languageDictionary.getValue(language);
            else
                throw new Error(`Language '${language}' does not exist.`);
        }
    }
}