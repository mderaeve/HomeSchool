/// <reference path="../../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Controllers;
    (function (Controllers) {
        var Games;
        (function (Games) {
            var C = Home.Common;
            var HundredFieldGameController = (function () {
                function HundredFieldGameController(resourceSvc) {
                    this.resourceSvc = resourceSvc;
                    this.activate();
                }
                HundredFieldGameController.prototype.activate = function () {
                    var self = this;
                };
                return HundredFieldGameController;
            }());
            HundredFieldGameController.$inject = [C.Resources.ResourceProvider.id];
            HundredFieldGameController.id = "hundredFieldGameController";
            Games.HundredFieldGameController = HundredFieldGameController;
            Home.app.controller(Home.Controllers.Games.HundredFieldGameController.id, Home.Controllers.Games.HundredFieldGameController);
        })(Games = Controllers.Games || (Controllers.Games = {}));
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
})(Home || (Home = {}));
//# sourceMappingURL=hundredfieldController.js.map