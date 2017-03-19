'use strict';
var Home;
(function (Home) {
    var Controllers;
    (function (Controllers) {
        var C = Home.Common;
        var PickUserModalController = (function () {
            function PickUserModalController($state, $uibModal, $uibModalInstance, $timeout, resourceSvc, localStorageSvc) {
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
                this.$timeout = $timeout;
                this.resourceSvc = resourceSvc;
                this.localStorageSvc = localStorageSvc;
                this.storageValidDate = new Date();
            }
            PickUserModalController.prototype.$onInit = function () {
                var self = this;
            };
            PickUserModalController.prototype.createUser = function () { };
            PickUserModalController.prototype.onCancel = function () {
                var self = this;
                self.$uibModalInstance.dismiss('close');
            };
            return PickUserModalController;
        }());
        PickUserModalController.id = 'pickUserModalController';
        PickUserModalController.$inject = [
            '$state',
            '$uibModal',
            '$uibModalInstance',
            '$timeout',
            C.Resources.ResourceProvider.id,
            C.Services.LocalStorageService.id,
        ];
        Controllers.PickUserModalController = PickUserModalController;
        Home.app.controller(Home.Controllers.PickUserModalController.id, Home.Controllers.PickUserModalController);
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
})(Home || (Home = {}));
//# sourceMappingURL=pickUserModalController.js.map