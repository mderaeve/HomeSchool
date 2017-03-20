var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Home;
(function (Home) {
    var Resources;
    (function (Resources) {
        var C = Home.Common;
        var GamesResources = (function (_super) {
            __extends(GamesResources, _super);
            function GamesResources() {
                return _super.call(this, 'Games') || this;
            }
            GamesResources.prototype.setLanguageDictionary = function () {
                var self = this;
                var Translations_en = [
                    { key: 'tablesTitle', value: 'Practice tables' },
                    { key: 'hundredFieldTitle', value: 'Practice the 100 field' },
                    { key: 'tablesAnswer', value: 'Answer' },
                    { key: 'tablesSolution', value: 'Solution' },
                    { key: 'tablesMin', value: 'Min table' },
                    { key: 'tablesMax', value: 'Max table' },
                    { key: 'tablesNrOfExercises', value: 'Number of exercises' },
                    { key: 'points', value: 'Points' },
                    { key: 'rank', value: 'Rank' },
                ];
                var Translations_nl = [
                    { key: 'tablesTitle', value: 'Tafels oefenen' },
                    { key: 'hundredFieldTitle', value: 'Oefen het 100 veld' },
                    { key: 'tablesAnswer', value: 'Antwoord' },
                    { key: 'tablesSolution', value: 'Oplossing' },
                    { key: 'tablesMin', value: 'Min tafel' },
                    { key: 'tablesMax', value: 'Max tafel' },
                    { key: 'tablesNrOfExercises', value: 'Aantal oefeningen' },
                    { key: 'points', value: 'Punten' },
                    { key: 'rank', value: 'Rang' },
                ];
                self.languageDictionary = new C.Dictionary([
                    { key: 'en', value: new C.Dictionary(Translations_en) },
                    { key: 'nl', value: new C.Dictionary(Translations_nl) }
                ]);
            };
            ;
            return GamesResources;
        }(C.Resources.ResourceBase));
        Resources.GamesResources = GamesResources;
    })(Resources = Home.Resources || (Home.Resources = {}));
})(Home || (Home = {}));
//# sourceMappingURL=gamesResources.js.map