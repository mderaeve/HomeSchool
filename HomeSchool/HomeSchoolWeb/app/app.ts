/// <reference path="_app.ts" />

module BDO.HomeSchoolWeb {
    export var app = angular.module("HomeSchoolWebApp", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast', 'bdo.resources', 'bdo.localstorage']);

    export class Config {
        static $inject: string[] = ["$stateProvider", "$urlRouterProvider"];
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {

            $urlRouterProvider.otherwise('/app/1/home/');

            $stateProvider

                .state('app', {
                    abstract: true,
                    url: '/app/:nav',
                    templateUrl: '/app/app.html',
                    controller: BDO.HomeSchoolWeb.Controllers.AppController.id,
                    controllerAs: 'vm'
                })

                .state('app.home', {
                    url: '/home/:applicationId',
                    templateUrl: '/app/components/home/homeView.html',
                    controller: BDO.HomeSchoolWeb.Controllers.HomeController.id,
                    controllerAs: 'vm'
                })

                .state('app.help', {
                    url: '/help',
                    templateUrl: '/app/components/help/helpView.html',
                    controller: BDO.HomeSchoolWeb.Controllers.HelpController.id,
                    controllerAs: 'vm'
                });
        }
    }
    app.config(Config);


    app.config((resourceServiceProvider: BDO.Common.Resources.ResourceProvider) => {
        let resourceConfig: BDO.Common.Resources.IResourceConfiguration = new BDO.Common.Resources.ResourceConfiguration();
        resourceConfig.preferredLanguage = 'en'; //is the default setting (could be omitted here)
        resourceConfig.addResource(new BDO.HomeSchoolWeb.Resources.HelpResources());
        resourceConfig.addResource(new BDO.HomeSchoolWeb.Resources.HomeResources());
        resourceConfig.addResource(new BDO.HomeSchoolWeb.Resources.NavigationResources());
        resourceConfig.addResource(new BDO.HomeSchoolWeb.Resources.ErrorResources());
        resourceServiceProvider.config(resourceConfig);
    });
    app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = false;
    }]);

    app.config([
        'ngToastProvider', ngToast => {
            ngToast.configure({
                verticalPosition: "top",
                horizontalPosition: "center",
                timeout: 5000
            });
        }
    ]);
}