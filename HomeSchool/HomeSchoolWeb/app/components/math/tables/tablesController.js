/// <reference path="../../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Controllers;
        (function (Controllers) {
            var Games;
            (function (Games) {
                var C = Home.Common;
                var TableGameController = (function () {
                    function TableGameController(resourceSvc) {
                        this.resourceSvc = resourceSvc;
                        this.activate();
                    }
                    TableGameController.prototype.activate = function () {
                        var self = this;
                    };
                    TableGameController.$inject = [C.Resources.ResourceProvider.id];
                    TableGameController.id = "tableGameController";
                    return TableGameController;
                }());
                Games.TableGameController = TableGameController;
                HomeSchoolWeb.app.controller(Home.HomeSchoolWeb.Controllers.Games.TableGameController.id, Home.HomeSchoolWeb.Controllers.Games.TableGameController);
            })(Games = Controllers.Games || (Controllers.Games = {}));
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
