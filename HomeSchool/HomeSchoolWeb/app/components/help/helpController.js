/// <reference path="../../_app.ts" />
'use strict';
var Home;
(function (Home) {
<<<<<<< HEAD
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
        Home.app.controller(Home.Controllers.HelpController.id, Home.Controllers.HelpController);
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
=======
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
                return HelpController;
            }());
            HelpController.$inject = [C.Resources.ResourceProvider.id];
            HelpController.id = "helpController";
            Controllers.HelpController = HelpController;
            HomeSchoolWeb.app.controller(Home.HomeSchoolWeb.Controllers.HelpController.id, Home.HomeSchoolWeb.Controllers.HelpController);
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
>>>>>>> 3b3b4f57bc58df1b5a9384175ce2050a2db557f6
})(Home || (Home = {}));
//# sourceMappingURL=helpController.js.map