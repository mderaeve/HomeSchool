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
        var NavigationResources = (function (_super) {
            __extends(NavigationResources, _super);
            function NavigationResources() {
                _super.call(this, 'Nav');
            }
            NavigationResources.prototype.setLanguageDictionary = function () {
                var self = this;
                var Translations_en = [
                    { key: 'title', value: 'Home School Web' },
                    { key: 'navItemHome', value: 'Home' },
                    { key: 'navItemMore', value: 'More' },
                    { key: 'navItemSpelling', value: 'Spelling' },
                    { key: 'navItemMath', value: 'Math' },
                    { key: 'navItemHelp', value: 'Help' },
                    { key: 'navSubItemBlog', value: 'Blog' },
                ];
                var Translations_nl = [
                    { key: 'title', value: 'Thuis School Web' },
                    { key: 'navItemHome', value: 'Thuis' },
                    { key: 'navItemMore', value: 'Meer' },
                    { key: 'navItemSpelling', value: 'Spelling' },
                    { key: 'navItemMath', value: 'Wiskunde' },
                    { key: 'navItemHelp', value: 'Help' },
                    { key: 'navSubItemBlog', value: 'Blog' },
                ];
                self.languageDictionary = new C.Dictionary([
                    { key: 'en', value: new C.Dictionary(Translations_en) },
                    { key: 'nl', value: new C.Dictionary(Translations_nl) }
                ]);
            };
            ;
            return NavigationResources;
        }(C.Resources.ResourceBase));
        Resources.NavigationResources = NavigationResources;
    })(Resources = Home.Resources || (Home.Resources = {}));
})(Home || (Home = {}));
//# sourceMappingURL=navigationResources.js.map