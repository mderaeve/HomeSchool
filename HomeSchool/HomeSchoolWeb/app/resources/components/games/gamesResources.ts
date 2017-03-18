module Home.Resources {
    import C = Home.Common;

    export class GamesResources extends C.Resources.ResourceBase {
        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'tablesTitle', value: 'Practice tables' },
                { key: 'hundredFieldTitle', value: 'Practice the 100 field' },
                { key: 'tablesAnswer', value: 'Answer' },
                { key: 'tablesSolution', value: 'Solution' },
                { key: 'tablesMin', value: 'Min table' },
                { key: 'tablesMax', value: 'Max table' },
                { key: 'tablesNrOfExercises', value: 'Number of exercises' },
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'tablesTitle', value: 'Tafels oefenen' },
                { key: 'hundredFieldTitle', value: 'Oefen het 100 veld' },
                { key: 'tablesAnswer', value: 'Antwoord' },
                { key: 'tablesSolution', value: 'Oplossing' },
                { key: 'tablesMin', value: 'Min tafel' },
                { key: 'tablesMax', value: 'Max tafel' },
                { key: 'tablesNrOfExercises', value: 'Aantal oefeningen' },
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