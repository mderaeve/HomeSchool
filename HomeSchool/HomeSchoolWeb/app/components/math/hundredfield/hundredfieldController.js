/// <reference path="../../../_app.ts" />
'use strict';
var Home;
(function (Home) {
<<<<<<< HEAD
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
                HundredFieldGameController.$inject = [C.Resources.ResourceProvider.id];
                HundredFieldGameController.id = "hundredFieldGameController";
                return HundredFieldGameController;
            }());
            Games.HundredFieldGameController = HundredFieldGameController;
            Home.app.controller(Home.Controllers.Games.HundredFieldGameController.id, Home.Controllers.Games.HundredFieldGameController);
        })(Games = Controllers.Games || (Controllers.Games = {}));
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
=======
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
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
                HomeSchoolWeb.app.controller(Home.HomeSchoolWeb.Controllers.Games.HundredFieldGameController.id, Home.HomeSchoolWeb.Controllers.Games.HundredFieldGameController);
            })(Games = Controllers.Games || (Controllers.Games = {}));
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
>>>>>>> 3b3b4f57bc58df1b5a9384175ce2050a2db557f6
})(Home || (Home = {}));
//# sourceMappingURL=hundredfieldController.js.map