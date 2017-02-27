var Home;
(function (Home) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Models;
        (function (Models) {
            var RejectMessage = (function () {
                function RejectMessage(obj) {
                    this.Message = null;
                    if (obj != null) {
                        this.Message = obj.Message;
                    }
                }
                return RejectMessage;
            }());
            Models.RejectMessage = RejectMessage;
        })(Models = HomeSchoolWeb.Models || (HomeSchoolWeb.Models = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
