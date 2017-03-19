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
        var UserResources = (function (_super) {
            __extends(UserResources, _super);
            function UserResources() {
                return _super.call(this, 'User') || this;
            }
            UserResources.prototype.setLanguageDictionary = function () {
                var self = this;
                var Translations_en = [
                    { key: 'chooseUser', value: 'Choose User' },
                    { key: 'settings', value: 'Settings' },
                ];
                var Translations_nl = [
                    { key: 'chooseUser', value: 'Kies Gebruiker' },
                    { key: 'settings', value: 'Instellingen' },
                ];
                self.languageDictionary = new C.Dictionary([
                    { key: 'en', value: new C.Dictionary(Translations_en) },
                    { key: 'nl', value: new C.Dictionary(Translations_nl) }
                ]);
            };
            ;
            return UserResources;
        }(C.Resources.ResourceBase));
        Resources.UserResources = UserResources;
    })(Resources = Home.Resources || (Home.Resources = {}));
})(Home || (Home = {}));
//# sourceMappingURL=userResources.js.map