'use strict';
module Home.Controllers {
    import C = Home.Common;

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

        storageValidDate: Date = new Date();

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
        }

        createUser(): void { }

        onCancel(): void {
            const self = this;
            self.$uibModalInstance.dismiss('close');
        }

    }

    app.controller(Home.Controllers.PickUserModalController.id, Home.Controllers.PickUserModalController);
}