/// <reference path="../../_app.ts" />
'use strict';
module Home.Controllers {
    import C = Home.Common;
    import F = Home.Factories;
    import M = Home.Models;
    import S = Home.Services;

    export interface IBuildController {

    }

    export class BuildController implements IBuildController {
        static $inject: string[] = ['$state', '$timeout', 'ngToast', C.Resources.ResourceProvider.id, F.ApplicationLifeTimeService.id, S.LogService.id];
        static id: string = 'homeController';


        constructor(
            private $state: angular.ui.IStateService,
            private $timeout: ng.ITimeoutService,
            private ngToast: ngToast.IToastProvider,
            private resourceSvc: C.Resources.IResourceService,
            private appLTSvc: F.IApplicationLifeTimeService,
            private logSvc: S.ILogService,
            private dummySvc: S.DummyService) {

            this.activate();
        }


        private activate(): void {
            const self = this;

           
        }

    }

    app.controller(Home.Controllers.BuildController.id, Home.Controllers.BuildController);
}
