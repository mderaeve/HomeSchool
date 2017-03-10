/// <reference path="../../_app.ts" />
'use strict';
var Home;
(function (Home) {
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
})(Home || (Home = {}));
//# sourceMappingURL=helpController.js.map