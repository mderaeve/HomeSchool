﻿module Home.Resources {
    import C = Home.Common;

    export class NavigationResources extends C.Resources.ResourceBase {
        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'Home School Web' },
                { key: 'navItemHome', value: 'Home' },
                { key: 'navItemMore', value: 'More' },
                { key: 'navItemSpelling', value: 'Spelling' },
                { key: 'navItemMath', value: 'Math' },
                { key: 'navItemHelp', value: 'Help' },
                { key: 'navSubItemBlog', value: 'Blog' },
                { key: 'chooseUser', value: 'Choose User' },
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'Thuis School Web' },
                { key: 'navItemHome', value: 'Thuis' },
                { key: 'navItemMore', value: 'Meer' },
                { key: 'navItemSpelling', value: 'Spelling' },
                { key: 'navItemMath', value: 'Wiskunde' },
                { key: 'navItemHelp', value: 'Help' },
                { key: 'navSubItemBlog', value: 'Blog' },
                { key: 'chooseUser', value: 'Choose User' },
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };

        constructor() {
            super('Nav');
        }
    }
}