module Home.HomeSchoolWeb.Resources {
    import C = Home.Common;

    export class GamesResources extends C.Resources.ResourceBase {
        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'tablesTitle', value: 'Practice tables' }
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'tablesTitle', value: 'Tafels oefenen' }
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };

        constructor() {
            super('Games');
        }
    }
}