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
                var lineLength = parseInt(self.lineStart) + parseInt(self.lineLen);
                self.fields = new Array();
                for (var i = parseInt(self.lineStart); i < lineLength; i++) {
                    var t = new M.HundredField();
                    t.Id = i;
                    t.Number = i;
                    t.Visible = true;
                    self.fields.push(t);
                }
            };
            HundredFieldLineController.prototype.clicked = function (l) {
                l.Css = 'btn btn-success btn-block';
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