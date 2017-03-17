var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Home;
(function (Home) {
<<<<<<< HEAD
    var Resources;
    (function (Resources) {
        var C = Home.Common;
        var GamesResources = (function (_super) {
            __extends(GamesResources, _super);
            function GamesResources() {
                _super.call(this, 'Games');
            }
            GamesResources.prototype.setLanguageDictionary = function () {
                var self = this;
                var Translations_en = [
                    { key: 'tablesTitle', value: 'Practice tables' },
                    { key: 'hundredFieldTitle', value: 'Practice the 100 field' }
                ];
                var Translations_nl = [
                    { key: 'tablesTitle', value: 'Tafels oefenen' },
                    { key: 'hundredFieldTitle', value: 'Oefen het 100 veld' }
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
=======
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
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
                        { key: 'hundredFieldTitle', value: 'Practice the 100 field' }
                    ];
                    var Translations_nl = [
                        { key: 'tablesTitle', value: 'Tafels oefenen' },
                        { key: 'hundredFieldTitle', value: 'Oefen het 100 veld' }
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
        })(Resources = HomeSchoolWeb.Resources || (HomeSchoolWeb.Resources = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
>>>>>>> 3b3b4f57bc58df1b5a9384175ce2050a2db557f6
})(Home || (Home = {}));
//# sourceMappingURL=gamesResources.js.map