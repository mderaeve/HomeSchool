/// <reference path="../../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Controllers;
    (function (Controllers) {
        var Games;
        (function (Games) {
            var C = Home.Common;
            var M = Home.Models;
            var TableGameController = (function () {
                function TableGameController(resourceSvc) {
                    this.resourceSvc = resourceSvc;
                    this.numberOfExercises = 10;
                    this.borderBottom = 1;
                    this.borderTop = 10;
                    this.activate();
                }
                TableGameController.prototype.activate = function () {
                    var self = this;
                };
                TableGameController.prototype.start = function () {
                    var self = this;
                    self.exercises = new Array();
                    for (var i = 0; i < this.numberOfExercises; i++) {
                        var t = new M.TableExercise();
                        t.Id = i;
                        t.A = self.getRandomInt(self.borderBottom, self.borderTop);
                        t.B = self.getRandomInt(self.borderBottom, self.borderTop);
                        t.Css = 'glyphicon glyphicon-pencil';
                        self.exercises.push(t);
                    }
                };
                TableGameController.prototype.check = function (ex) {
                    if (ex.A * ex.B == ex.Answered) {
                        ex.Css = 'glyphicon glyphicon-ok';
                    }
                    else {
                        ex.Css = 'glyphicon glyphicon-remove';
                    }
                };
                /**
                * Returns a random integer between min (inclusive) and max (inclusive)
                 * Using Math.round() will give you a non-uniform distribution!
                 */
                TableGameController.prototype.getRandomInt = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                return TableGameController;
            }());
            TableGameController.$inject = [C.Resources.ResourceProvider.id];
            TableGameController.id = "tableGameController";
            Games.TableGameController = TableGameController;
            Home.app.controller(Home.Controllers.Games.TableGameController.id, Home.Controllers.Games.TableGameController);
        })(Games = Controllers.Games || (Controllers.Games = {}));
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
})(Home || (Home = {}));
//# sourceMappingURL=tablesController.js.map