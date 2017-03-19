'use strict';
var Home;
(function (Home) {
    var Controllers;
    (function (Controllers) {
        var C = Home.Common;
        var SettingsModalController = (function () {
            function SettingsModalController($state, $uibModal, $uibModalInstance, $timeout, resourceSvc, localStorageSvc) {
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
                this.$timeout = $timeout;
                this.resourceSvc = resourceSvc;
                this.localStorageSvc = localStorageSvc;
                this.storageValidDate = new Date();
            }
            SettingsModalController.prototype.$onInit = function () {
                var self = this;
            };
            SettingsModalController.prototype.onCancel = function () {
                var self = this;
                self.$uibModalInstance.dismiss('close');
            };
            return SettingsModalController;
        }());
        SettingsModalController.id = 'settingsModalController';
        SettingsModalController.$inject = [
            '$state',
            '$uibModal',
            '$uibModalInstance',
            '$timeout',
            C.Resources.ResourceProvider.id,
            C.Services.LocalStorageService.id,
        ];
        Controllers.SettingsModalController = SettingsModalController;
        Home.app.controller(Home.Controllers.SettingsModalController.id, Home.Controllers.SettingsModalController);
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
})(Home || (Home = {}));
//# sourceMappingURL=settingsModalController.js.map