/// <reference path="../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Controllers;
        (function (Controllers) {
            var C = Home.Common;
            var HelpController = (function () {
                function HelpController(resourceSvc) {
                    this.resourceSvc = resourceSvc;
                    this.activate();
                }
                HelpController.prototype.activate = function () {
                    var self = this;
                };
                HelpController.$inject = [C.Resources.ResourceProvider.id];
                HelpController.id = "helpController";
                return HelpController;
            }());
            Controllers.HelpController = HelpController;
            HomeSchoolWeb.app.controller(Home.HomeSchoolWeb.Controllers.HelpController.id, Home.HomeSchoolWeb.Controllers.HelpController);
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
//# sourceMappingURL=helpController.js.map