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
        var HelpResources = (function (_super) {
            __extends(HelpResources, _super);
            function HelpResources() {
                return _super.call(this, 'Help') || this;
            }
            HelpResources.prototype.setLanguageDictionary = function () {
                var self = this;
                var Translations_en = [
                    { key: 'title', value: 'Help' },
                    { key: 'helpText', value: 'Contact mail@dailycode.info if you have any questions or remarks.' }
                ];
                var Translations_nl = [
                    { key: 'title', value: 'Help' },
                    { key: 'helpText', value: 'Contacteer mail@dailycode.info voor eventuele vragen of opmerkingen.' }
                ];
                self.languageDictionary = new C.Dictionary([
                    { key: 'en', value: new C.Dictionary(Translations_en) },
                    { key: 'nl', value: new C.Dictionary(Translations_nl) }
                ]);
            };
            ;
            return HelpResources;
        }(C.Resources.ResourceBase));
        Resources.HelpResources = HelpResources;
    })(Resources = Home.Resources || (Home.Resources = {}));
})(Home || (Home = {}));
//# sourceMappingURL=helpResources.js.map