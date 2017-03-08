var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Home;
(function (Home) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Resources;
        (function (Resources) {
            var C = Home.Common;
            var HomeResources = (function (_super) {
                __extends(HomeResources, _super);
                function HomeResources() {
                    _super.call(this, 'Home');
                }
                HomeResources.prototype.setLanguageDictionary = function () {
                    var self = this;
                    var Translations_en = [
                        { key: 'title', value: 'Home school' },
                        { key: 'hello', value: 'Welcome to the homeschool website, there are lots of games and special tools for you here!' },
                        { key: 'buildTitle', value: 'In progress' },
                        { key: 'buildMessage', value: 'This application is still under construction.' }
                    ];
                    var Translations_nl = [
                        { key: 'title', value: 'Thuis school' },
                        { key: 'hello', value: 'Welkom op de thuis school web site. Je vindt hier tal van spelletjes en speciale hulp programma\'s!' },
                        { key: 'buildTitle', value: 'Nog te doen' },
                        { key: 'buildMessage', value: 'Deze applicatie is niet niet klaar.' }
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
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
//# sourceMappingURL=homeResources.js.map