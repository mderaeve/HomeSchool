'use strict';
module Home.Controllers {
    import C = Home.Common;
    import M = Home.Models;

    export class PickUserModalController {
        static id: string = 'pickUserModalController';
        static $inject: Array<string> = [
            '$state',
            '$uibModal',
            '$uibModalInstance',
            '$timeout',
            C.Resources.ResourceProvider.id,
            C.Services.LocalStorageService.id,
        ];

        users: Array<M.IUserModel> = null;
        userName: string;

        constructor(
            private $state: angular.ui.IStateService,
            private $uibModal: ng.ui.bootstrap.IModalService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private $timeout: ng.ITimeoutService,
            private resourceSvc: C.Resources.IResourceService,
            private localStorageSvc: C.Services.ILocalStorageService,
        ) {
        }

        $onInit() {
            const self = this;
            self.activate();
        }

        activate(): void {
            const self = this;
            self.users = self.localStorageSvc.getItemAny('users');
            if (self.users == null)
            {
                self.users = new Array<M.IUserModel>();
            }
        }

        createUser(): void
        {
            const self = this;
            var user = new M.UserModel();
            let result = self.users.filter(user => user.Name == self.userName);
            if (result.length == 0) {
                let result = self.users.length == 0 ? 0 : Math.max.apply(Math, self.users.map(function (o) { return o.Id; }));
                user.Id = result+1;
                user.Name = self.userName;
                user.Rank = 0;
                self.users.push(user);
                self.localStorageSvc.setItemAny(new C.KeyValuePair<string, any>('users', self.users));
                self.userName = '';
            }
            else
            {
                //show error
            }
        }

        removeUser(u: M.UserModel): void {
            const self = this;
            var index = self.users.indexOf(u, 0);
            if (index > -1) {
                self.users.splice(index, 1);
            }
            self.localStorageSvc.setItemAny(new C.KeyValuePair<string, any>('users', self.users));
        }

        onCancel(): void {
            const self = this;
            self.$uibModalInstance.dismiss('close');
        }

    }

    app.controller(Home.Controllers.PickUserModalController.id, Home.Controllers.PickUserModalController);
}