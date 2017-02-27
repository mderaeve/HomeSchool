module Home.HomeSchoolWeb.Resources {
    import C = Home.Common;

    export class ErrorResources extends C.Resources.ResourceBase {
        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'unExpectedError', value: 'An unexpected error occurred. Contact IT support if the error persists.' },
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'unExpectedError', value: 'Er heeft zich een onverwachte fout voorgedaan. Contacteer IT support als het probleem zich blijft voordoen.' },
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };

        constructor() {
            super('Error');
        }
    }
}