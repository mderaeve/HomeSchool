/// <reference path="_app.ts" />

module Home.HomeSchoolWeb {
    export var app = angular.module("HomeSchoolWebApp", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast', 'home.resources', 'home.localstorage']);

    export class Config {
        static $inject: string[] = ["$stateProvider", "$urlRouterProvider"];
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {

            $urlRouterProvider.otherwise('/app/1/home/');

            $stateProvider

                .state('app', {
                    abstract: true,
                    url: '/app/:nav',
                    templateUrl: '/app/app.html',
                    controller: Home.HomeSchoolWeb.Controllers.AppController.id,
                    controllerAs: 'vm'
                })

                .state('app.home', {
                    url: '/home/:applicationId',
                    templateUrl: '/app/components/home/homeView.html',
                    controller: Home.HomeSchoolWeb.Controllers.HomeController.id,
                    controllerAs: 'vm'
                })

                .state('app.tablesgame', {
                    url: '/games/tablesgame',
                    templateUrl: '/app/components/math/tables/tablesView.html',
                    controller: Home.HomeSchoolWeb.Controllers.Games.TableGameController.id,
                    controllerAs: 'vm'
                })

                .state('app.hundredfieldgame', {
                    url: '/games/hundredfieldgame',
                    templateUrl: '/app/components/math/hundredfield/hundredfieldView.html',
                    controller: Home.HomeSchoolWeb.Controllers.Games.HundredFieldGameController.id,
                    controllerAs: 'vm'
                })

                .state('app.help', {
                    url: '/help',
                    templateUrl: '/app/components/help/helpView.html',
                    controller: Home.HomeSchoolWeb.Controllers.HelpController.id,
                    controllerAs: 'vm'
                });
        }
    }
    app.config(Config);


    app.config((resourceServiceProvider: Home.Common.Resources.ResourceProvider) => {
        let resourceConfig: Home.Common.Resources.IResourceConfiguration = new Home.Common.Resources.ResourceConfiguration();
        resourceConfig.preferredLanguage = 'en'; //is the default setting (could be omitted here)
        resourceConfig.addResource(new Home.HomeSchoolWeb.Resources.HelpResources());
        resourceConfig.addResource(new Home.HomeSchoolWeb.Resources.HomeResources());
        resourceConfig.addResource(new Home.HomeSchoolWeb.Resources.NavigationResources());
        resourceConfig.addResource(new Home.HomeSchoolWeb.Resources.ErrorResources());
        resourceConfig.addResource(new Home.HomeSchoolWeb.Resources.GamesResources());
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