/// <reference path="../../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Controllers;
    (function (Controllers) {
        var C = Home.Common;
        var M = Home.Models;
        var HundredFieldLineController = (function () {
            function HundredFieldLineController(resourceSvc, localStorageSvc) {
                this.resourceSvc = resourceSvc;
                this.localStorageSvc = localStorageSvc;
                this.activate();
            }
            HundredFieldLineController.prototype.activate = function () {
                var self = this;
                self.totalNumbers = self.lineStop - self.lineStart;
                self.exercises = new Array();
                for (var i = 0; i < self.totalNumbers; i++) {
                    var t = new M.TableExercise();
                    t.Id = i;
                    t.A = 1;
                    t.B = 2;
                    t.Css = 'glyphicon glyphicon-pencil';
                    self.exercises.push(t);
                }
            };
            HundredFieldLineController.prototype.getTotalNumbers = function () {
                var self = this;
                return self.lineStop - self.lineStart + 1;
            };
            return HundredFieldLineController;
        }());
        HundredFieldLineController.$inject = [C.Resources.ResourceProvider.id, C.Services.LocalStorageService.id];
        HundredFieldLineController.id = 'hundredFieldLineController';
        Controllers.HundredFieldLineController = HundredFieldLineController;
        Home.app.controller(Home.Controllers.HundredFieldLineController.id, Home.Controllers.HundredFieldLineController);
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
})(Home || (Home = {}));
//# sourceMappingURL=hundredFieldLineController.js.map