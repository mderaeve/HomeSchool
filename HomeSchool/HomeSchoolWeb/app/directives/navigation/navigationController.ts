/// <reference path="../../_app.ts" />
'use strict';

module Home.HomeSchoolWeb.Controllers {
    import C = Home.Common;
    import F = Home.HomeSchoolWeb.Factories;
    import M = Home.HomeSchoolWeb.Models;
    import S = Home.HomeSchoolWeb.Services;

    export class NavigationController {
        static $inject: string[] = [C.Resources.ResourceProvider.id, C.Services.LocalStorageService.id, F.ApplicationLifeTimeService.id];
        static id: string = 'navigationController';

        language: number;
        languageList: C.List<M.ILanguage>;
        navigationVisible: boolean;

        constructor(
            private resourceSvc: C.Resources.IResourceService,
            private localStorageSvc: C.Services.ILocalStorageService,
            private appLTSvc: F.IApplicationLifeTimeService
        ) {
            
            this.activate();
        }

        private activate(): void {
            const self = this;
            self.language = self.appLTSvc.getApplicationLanguage().Id;
            self.languageList = self.appLTSvc.getLanguages();
        }

        private setApplicationLanguageInStorage(appLanguage: number): void {
            const self = this;
            self.localStorageSvc.setItem(new C.KeyValuePair<string, string>(C.Configuration.LocalStorageKeys.applicationLanguage, appLanguage.toString()));
        }

        setLanguage(): void {
            const self = this;
            //Set the language for the application
            self.appLTSvc.setApplicationLanguage(self.language);
            //Make the resource service translate clientside
            self.resourceSvc.setLanguage(self.appLTSvc.getApplicationLanguage().Code);
            //Save the language in localstorage
            self.setApplicationLanguageInStorage(self.language);
        }
    }

    app.controller(Home.HomeSchoolWeb.Controllers.NavigationController.id, Home.HomeSchoolWeb.Controllers.NavigationController);
}