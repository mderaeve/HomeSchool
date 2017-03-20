/// <reference path="../../_app.ts" />
'use strict';

module Home.Controllers {
    import C = Home.Common;
    import S = Home.Services;


    export class UserController {
        static $inject: string[] = ['$uibModal',C.Resources.ResourceProvider.id, C.Services.LocalStorageService.id, S.UserService.id];
        static id: string = 'userController';

        private pickUserModal: ng.ui.bootstrap.IModalServiceInstance;
        private settingsModal: ng.ui.bootstrap.IModalServiceInstance;

        constructor(
            private $uibModal: ng.ui.bootstrap.IModalService,
            private resourceSvc: C.Resources.IResourceService,
            private localStorageSvc: C.Services.ILocalStorageService,
            private userSvc: S.IUserService,
        ) {
            const self = this;

        }

        $onInit() {
            const self = this;
            self.activate();
        }

        activate(): void {
            const self = this;

        }

        getLoggedInUser(): string {
            const self = this;
            
                //Set the user to the picked user.
            if (self.userSvc.getUser() != null) {
                return self.userSvc.getUser().Name;
            }
            else {
                return self.resourceSvc.getLocalResource('User.chooseUser');
            }
        }

        pickUser(): void {
            const self = this;

            self.settingsModal = self.$uibModal.open({
                animation: true,
                templateUrl: 'app/modals/user/pickuser/pickUserModalView.html',
                controller: Home.Controllers.PickUserModalController.id,
                controllerAs: 'vm',
                bindToController: true,
                size: 'md'
            });
        }

        openSettings(): void {
            const self = this;

            self.settingsModal = self.$uibModal.open({
                animation: true,
                templateUrl: 'app/modals/user/settings/settingsModalView.html',
                controller: Home.Controllers.SettingsModalController.id,
                controllerAs: 'vm',
                bindToController: true,
                size: 'md'
            });
        }
    }

    app.controller(Home.Controllers.UserController.id, Home.Controllers.UserController);
}