var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BDO;
(function (BDO) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Resources;
        (function (Resources) {
            var C = BDO.Common;
            var HomeResources = (function (_super) {
                __extends(HomeResources, _super);
                function HomeResources() {
                    _super.call(this, 'Home');
                }
                HomeResources.prototype.setLanguageDictionary = function () {
                    var self = this;
                    var Translations_en = [
                        { key: 'title', value: 'Home school' },
                        { key: 'hello', value: 'Welcome to the homeschool website, there are lots of games and special tools for you here!' }
                    ];
                    var Translations_nl = [
                        { key: 'title', value: 'Thuis school' },
                        { key: 'hello', value: 'Welkom op de thuis school web site. Je vindt hier tal van spelletjes en speciale hulp programma\'s!' }
                    ];
                    self.languageDictionary = new C.Dictionary([
                        { key: 'en', value: new C.Dictionary(Translations_en) },
                        { key: 'nl', value: new C.Dictionary(Translations_nl) }
                    ]);
                };
                ;
                return HomeResources;
            }(C.Resources.ResourceBase));
            Resources.HomeResources = HomeResources;
        })(Resources = HomeSchoolWeb.Resources || (HomeSchoolWeb.Resources = {}));
    })(HomeSchoolWeb = BDO.HomeSchoolWeb || (BDO.HomeSchoolWeb = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=homeResources.js.map