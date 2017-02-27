module Home.HomeSchoolWeb.Resources {
    import C = Home.Common;

    export class HelpResources extends C.Resources.ResourceBase {
        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'Help' },
                { key: 'helpText', value: 'Contact mail@dailycode.info if you have any questions or remarks.' }
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'Help' },
                { key: 'helpText', value: 'Contacteer mail@dailycode.info voor eventuele vragen of opmerkingen.' }
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };

        constructor() {
            super('Help');
        }
    }
}