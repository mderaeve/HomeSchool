'use strict';
var Home;
(function (Home) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
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
        })(Models = HomeSchoolWeb.Models || (HomeSchoolWeb.Models = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
