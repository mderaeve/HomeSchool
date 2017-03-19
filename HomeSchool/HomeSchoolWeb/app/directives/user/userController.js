/// <reference path="../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Controllers;
    (function (Controllers) {
        var C = Home.Common;
        var UserController = (function () {
            function UserController($uibModal, resourceSvc, localStorageSvc) {
                this.$uibModal = $uibModal;
                this.resourceSvc = resourceSvc;
                this.localStorageSvc = localStorageSvc;
                this.userPicked = false;
                var self = this;
            }
            UserController.prototype.$onInit = function () {
                var self = this;
                self.activate();
            };
            UserController.prototype.activate = function () {
                var self = this;
                self.loggedInUser = self.resourceSvc.getLocalResource('User.chooseUser');
                //if (self.authenticationSvc.isAuthenticated()) {
                //    var activeUser = self.authenticationSvc.getIdentity();
                //    self.loggedInUser = `${activeUser.LastName}, ${activeUser.FirstName}`;
                //}
            };
            UserController.prototype.getLoggedInUser = function () {
                var self = this;
                if (self.userPicked == true) {
                    //Set the user to the picked user.
                    return 'Anna-Lisa';
                }
                else {
                    return self.resourceSvc.getLocalResource('User.chooseUser');
                }
            };
            UserController.prototype.pickUser = function () {
                var self = this;
                self.settingsModal = self.$uibModal.open({
                    animation: true,
                    templateUrl: 'app/modals/user/pickuser/pickUserModalView.html',
                    controller: Home.Controllers.PickUserModalController.id,
                    controllerAs: 'vm',
                    bindToController: true,
                    size: 'md'
                });
            };
            UserController.prototype.openSettings = function () {
                var self = this;
                self.settingsModal = self.$uibModal.open({
                    animation: true,
                    templateUrl: 'app/modals/user/settings/settingsModalView.html',
                    controller: Home.Controllers.SettingsModalController.id,
                    controllerAs: 'vm',
                    bindToController: true,
                    size: 'md'
                });
            };
            return UserController;
        }());
        UserController.$inject = ['$uibModal', C.Resources.ResourceProvider.id, C.Services.LocalStorageService.id];
        UserController.id = 'userController';
        Controllers.UserController = UserController;
        Home.app.controller(Home.Controllers.UserController.id, Home.Controllers.UserController);
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
})(Home || (Home = {}));
//# sourceMappingURL=userController.js.map