/// <reference path="../../_app.ts" />
'use strict';
module Home.HomeSchoolWeb.Controllers {
    import C = Home.Common;
    import F = Home.HomeSchoolWeb.Factories;
    import M = Home.HomeSchoolWeb.Models;
    import S = Home.HomeSchoolWeb.Services;

    export interface IHomeController {

    }

    export class HomeController implements IHomeController {
        static $inject: string[] = ['$state', '$timeout', 'ngToast', C.Resources.ResourceProvider.id, F.ApplicationLifeTimeService.id, S.LogService.id, S.DummyService.id];
        static id: string = 'homeController';

        pageSize: number = C.Configuration.DefaultGridPagerConfig.pageSize;
        pagesToShow: number = C.Configuration.DefaultGridPagerConfig.pagesToShow;

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

            ////Test Toast
            //self.ngToast.create({
            //    className: "success",
            //    content: `<span>${self.resourceSvc.getLocalResource('Home.helloWorld')}</span>`
            //});
        }

    }

    app.controller(Home.HomeSchoolWeb.Controllers.HomeController.id, Home.HomeSchoolWeb.Controllers.HomeController);
}
