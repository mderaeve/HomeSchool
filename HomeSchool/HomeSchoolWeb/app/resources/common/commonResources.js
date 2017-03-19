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
        var CommonResources = (function (_super) {
            __extends(CommonResources, _super);
            function CommonResources() {
                return _super.call(this, 'Common') || this;
            }
            CommonResources.prototype.setLanguageDictionary = function () {
                var self = this;
                var Translations_en = [
                    { key: 'close', value: 'Close' },
                    { key: 'new', value: 'New' },
                ];
                var Translations_nl = [
                    { key: 'close', value: 'Sluit' },
                    { key: 'new', value: 'Nieuwe' },
                ];
                self.languageDictionary = new C.Dictionary([
                    { key: 'en', value: new C.Dictionary(Translations_en) },
                    { key: 'nl', value: new C.Dictionary(Translations_nl) }
                ]);
            };
            ;
            return CommonResources;
        }(C.Resources.ResourceBase));
        Resources.CommonResources = CommonResources;
    })(Resources = Home.Resources || (Home.Resources = {}));
})(Home || (Home = {}));
//# sourceMappingURL=commonResources.js.map