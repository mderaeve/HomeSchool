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
                    this.tablesString = '';
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
                        t.A = 1;
                        t.B = 2;
                        self.exercises.push(t);
                    }
<<<<<<< HEAD
                };
                TableGameController.$inject = [C.Resources.ResourceProvider.id];
                TableGameController.id = "tableGameController";
                return TableGameController;
            }());
            Games.TableGameController = TableGameController;
            Home.app.controller(Home.Controllers.Games.TableGameController.id, Home.Controllers.Games.TableGameController);
        })(Games = Controllers.Games || (Controllers.Games = {}));
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
=======
                    TableGameController.prototype.activate = function () {
                        var self = this;
                    };
                    return TableGameController;
                }());
                TableGameController.$inject = [C.Resources.ResourceProvider.id];
                TableGameController.id = "tableGameController";
                Games.TableGameController = TableGameController;
                HomeSchoolWeb.app.controller(Home.HomeSchoolWeb.Controllers.Games.TableGameController.id, Home.HomeSchoolWeb.Controllers.Games.TableGameController);
            })(Games = Controllers.Games || (Controllers.Games = {}));
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
>>>>>>> 3b3b4f57bc58df1b5a9384175ce2050a2db557f6
})(Home || (Home = {}));
//# sourceMappingURL=tablesController.js.map