module BDO.HomeSchoolWeb.Resources {
    import C = BDO.Common;

    export class HomeResources extends C.Resources.ResourceBase {
        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'Home school' },
                { key: 'hello', value: 'Welcome to the homeschool website, there are lots of games and special tools for you here!' }
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'Thuis school' },
                { key: 'hello', value: 'Welkom op de thuis school web site. Je vindt hier tal van spelletjes en speciale hulp programma\'s!' }
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };

        constructor() {
            super('Home');
        }
    }
}