/// <reference path="../../_app.ts" />
'use strict';
var BDO;
(function (BDO) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Controllers;
        (function (Controllers) {
            var C = BDO.Common;
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
            HomeSchoolWeb.app.controller(BDO.HomeSchoolWeb.Controllers.HelpController.id, BDO.HomeSchoolWeb.Controllers.HelpController);
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = BDO.HomeSchoolWeb || (BDO.HomeSchoolWeb = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=helpController.js.map