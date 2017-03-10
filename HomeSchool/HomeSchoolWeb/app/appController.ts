/// <reference path="_app.ts" />
'use strict';
module Home.Controllers {
    import C = Home.Common;
    import F = Home.Factories;

    export class AppController {
        static $inject: Array<string> = ['$stateParams', C.Resources.ResourceProvider.id, C.Services.LocalStorageService.id, F.ApplicationLifeTimeService.id];
        static id: string = 'appController';

        navigationVisible: boolean = true;

        constructor(
            private $stateParams: angular.ui.IStateParamsService,
            private resourceSvc: C.Resources.IResourceService,
            private localStorageSvc: C.Services.LocalStorageService,
            private appLTSvc: F.IApplicationLifeTimeService
        )
        {
            this.activate();
        }

        private getApplicationLanguageFromStorage(): number {
            const self = this;
            let applicationLanguage: number = -1;
            let tmpStorageValue: string = self.localStorageSvc.getItem(C.Configuration.LocalStorageKeys.applicationLanguage);

            if (tmpStorageValue != null && tmpStorageValue !== '')
                applicationLanguage = parseInt(tmpStorageValue);

            return applicationLanguage;
        }

        public activate(): void {
            const self = this;

            let storageAppLang: number = self.getApplicationLanguageFromStorage();
            if (storageAppLang != -1)
                self.appLTSvc.setApplicationLanguage(storageAppLang);
            else
                self.appLTSvc.setApplicationLanguage(4); //4 = english   
            self.resourceSvc.setLanguage(self.appLTSvc.getApplicationLanguage().Code);

            if ((<any>self.$stateParams).nav != '') {
                let navParam: string = (<any>self.$stateParams).nav;
                if (navParam === '0')
                    self.navigationVisible = false;
            }
        }
    }

    app.controller(Home.Controllers.AppController.id, Home.Controllers.AppController);
}