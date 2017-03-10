'use strict';
var Home;
(function (Home) {
    var Models;
    (function (Models) {
        var Language = (function () {
            function Language(lang) {
                if (lang != null) {
                    this.Id = lang.Id;
                    this.Code = lang.Code;
                    this.DisplayText = lang.DisplayText;
                }
            }
            return Language;
        }());
        Models.Language = Language;
    })(Models = Home.Models || (Home.Models = {}));
})(Home || (Home = {}));
//# sourceMappingURL=Language.js.map