module Home.Resources {
    import C = Home.Common;

    export class UserResources extends C.Resources.ResourceBase {
        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'chooseUser', value: 'Choose User' },
                { key: 'settings', value: 'Settings' },
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'chooseUser', value: 'Kies Gebruiker' },
                { key: 'settings', value: 'Instellingen' },
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };

        constructor() {
            super('User');
        }
    }
}