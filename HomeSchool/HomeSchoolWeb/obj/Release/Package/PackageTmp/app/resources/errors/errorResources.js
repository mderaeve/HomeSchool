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
            var ErrorResources = (function (_super) {
                __extends(ErrorResources, _super);
                function ErrorResources() {
                    return _super.call(this, 'Error') || this;
                }
                ErrorResources.prototype.setLanguageDictionary = function () {
                    var self = this;
                    var Translations_en = [
                        { key: 'unExpectedError', value: 'An unexpected error occurred. Contact IT support if the error persists.' },
                    ];
                    var Translations_nl = [
                        { key: 'unExpectedError', value: 'Er heeft zich een onverwachte fout voorgedaan. Contacteer IT support als het probleem zich blijft voordoen.' },
                    ];
                    self.languageDictionary = new C.Dictionary([
                        { key: 'en', value: new C.Dictionary(Translations_en) },
                        { key: 'nl', value: new C.Dictionary(Translations_nl) }
                    ]);
                };
                ;
                return ErrorResources;
            }(C.Resources.ResourceBase));
            Resources.ErrorResources = ErrorResources;
        })(Resources = HomeSchoolWeb.Resources || (HomeSchoolWeb.Resources = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
//# sourceMappingURL=errorResources.js.map