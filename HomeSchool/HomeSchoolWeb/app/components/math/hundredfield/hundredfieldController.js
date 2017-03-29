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
                function HundredFieldGameController($timeout, resourceSvc) {
                    this.$timeout = $timeout;
                    this.resourceSvc = resourceSvc;
                    this.counter = 0;
                    this.maxTime = 5;
                    this.started = false;
                    this.blind = false;
                    this.numberToShow = 0;
                    this.activate();
                }
                HundredFieldGameController.prototype.activate = function () {
                    var self = this;
                    self.setStartLabel();
                };
                HundredFieldGameController.prototype.startStop = function () {
                    var self = this;
                    if (self.started == true) {
                        self.started = false;
                    }
                    else {
                        self.started = true;
                        self.numberToShow = self.getRandomInt(1, 100);
                        self.doCount();
                    }
                };
                HundredFieldGameController.prototype.doCount = function () {
                    var self = this;
                    self.$timeout(function () {
                        self.counter = self.counter + 1;
                        self.getTablesLabel = self.counter.toString();
                        if (self.counter >= self.maxTime) {
                            //change the search field
                            self.counter = 0;
                            self.numberToShow = self.getRandomInt(1, 100);
                        }
                        if (self.started == true) {
                            self.doCount();
                        }
                        else {
                            self.setStartLabel();
                        }
                    }, 1000, true);
                };
                HundredFieldGameController.prototype.setStartLabel = function () {
                    var self = this;
                    self.getTablesLabel = self.resourceSvc.getLocalResource("Games.start");
                };
                HundredFieldGameController.prototype.getRandomInt = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                return HundredFieldGameController;
            }());
            HundredFieldGameController.$inject = ['$timeout', C.Resources.ResourceProvider.id];
            HundredFieldGameController.id = "hundredFieldGameController";
            Games.HundredFieldGameController = HundredFieldGameController;
            Home.app.controller(Home.Controllers.Games.HundredFieldGameController.id, Home.Controllers.Games.HundredFieldGameController);
        })(Games = Controllers.Games || (Controllers.Games = {}));
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
})(Home || (Home = {}));
//# sourceMappingURL=hundredfieldController.js.map