'use strict';
//Structure of the resource files is as follows:
//module Home.BudgetTool.Resources {
//    import C = Home.Common;
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
var Home;
(function (Home) {
    var Common;
    (function (Common) {
        var Resources;
        (function (Resources) {
            var ResourceBase = (function () {
                function ResourceBase(name) {
                    this.languageDictionary = null;
                    this.resourceName = name;
                    this.setLanguageDictionary();
                }
                ResourceBase.prototype.setLanguageDictionary = function () {
                    throw new Error('setLanguageDictionary not implemented in child class!');
                };
                ;
                ResourceBase.prototype.getLanguages = function () {
                    var self = this;
                    return self.languageDictionary;
                };
                ResourceBase.prototype.getResourceName = function () {
                    var self = this;
                    return self.resourceName;
                };
                ResourceBase.prototype.getTranslations = function (language) {
                    var self = this;
                    if (self.languageDictionary == null)
                        self.setLanguageDictionary();
                    if (self.languageDictionary.containsKey(language))
                        return self.languageDictionary.getValue(language);
                    else
                        throw new Error("Language '" + language + "' does not exist.");
                };
                return ResourceBase;
            }());
            Resources.ResourceBase = ResourceBase;
        })(Resources = Common.Resources || (Common.Resources = {}));
    })(Common = Home.Common || (Home.Common = {}));
})(Home || (Home = {}));
