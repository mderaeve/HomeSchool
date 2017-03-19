module Home.Resources {
    import C = Home.Common;

    export class CommonResources extends C.Resources.ResourceBase {
        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'close', value: 'Close' },
                { key: 'new', value: 'New' },
               
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'close', value: 'Sluit' },
                { key: 'new', value: 'Nieuwe' },
                
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };

        constructor() {
            super('Common');
        }
    }
}