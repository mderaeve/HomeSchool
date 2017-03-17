/// <reference path="_app.ts" />
var Home;
(function (Home) {
<<<<<<< HEAD
    Home.app = angular.module("HomeSchoolWebApp", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast', 'home.resources', 'home.localstorage']);
    var Config = (function () {
        function Config($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/app/1/home/');
            $stateProvider
                .state('app', {
                abstract: true,
                url: '/app/:nav',
                templateUrl: '/app/app.html',
                controller: Home.Controllers.AppController.id,
                controllerAs: 'vm'
            })
                .state('app.home', {
                url: '/home/:applicationId',
                templateUrl: '/app/components/home/homeView.html',
                controller: Home.Controllers.HomeController.id,
                controllerAs: 'vm'
            })
                .state('app.tablesgame', {
                url: '/games/tablesgame',
                templateUrl: '/app/components/math/tables/tablesView.html',
                controller: Home.Controllers.Games.TableGameController.id,
                controllerAs: 'vm'
            })
                .state('app.hundredfieldgame', {
                url: '/games/hundredfieldgame',
                templateUrl: '/app/components/math/hundredfield/hundredfieldView.html',
                controller: Home.Controllers.Games.HundredFieldGameController.id,
                controllerAs: 'vm'
            })
                .state('app.help', {
                url: '/help',
                templateUrl: '/app/components/help/helpView.html',
                controller: Home.Controllers.HelpController.id,
                controllerAs: 'vm'
            });
        }
        Config.$inject = ["$stateProvider", "$urlRouterProvider"];
        return Config;
    }());
    Home.Config = Config;
    Home.app.config(Config);
    Home.app.config(function (resourceServiceProvider) {
        var resourceConfig = new Home.Common.Resources.ResourceConfiguration();
        resourceConfig.preferredLanguage = 'en'; //is the default setting (could be omitted here)
        resourceConfig.addResource(new Home.Resources.HelpResources());
        resourceConfig.addResource(new Home.Resources.HomeResources());
        resourceConfig.addResource(new Home.Resources.NavigationResources());
        resourceConfig.addResource(new Home.Resources.ErrorResources());
        resourceConfig.addResource(new Home.Resources.GamesResources());
        resourceServiceProvider.config(resourceConfig);
    });
    Home.app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeBar = false;
        }]);
    Home.app.config([
        'ngToastProvider', function (ngToast) {
            ngToast.configure({
                verticalPosition: "top",
                horizontalPosition: "center",
                timeout: 5000
            });
        }
    ]);
=======
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        HomeSchoolWeb.app = angular.module("HomeSchoolWebApp", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast', 'home.resources', 'home.localstorage']);
        var Config = (function () {
            function Config($stateProvider, $urlRouterProvider) {
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
            return Config;
        }());
        Config.$inject = ["$stateProvider", "$urlRouterProvider"];
        HomeSchoolWeb.Config = Config;
        HomeSchoolWeb.app.config(Config);
        HomeSchoolWeb.app.config(function (resourceServiceProvider) {
            var resourceConfig = new Home.Common.Resources.ResourceConfiguration();
            resourceConfig.preferredLanguage = 'en'; //is the default setting (could be omitted here)
            resourceConfig.addResource(new Home.HomeSchoolWeb.Resources.HelpResources());
            resourceConfig.addResource(new Home.HomeSchoolWeb.Resources.HomeResources());
            resourceConfig.addResource(new Home.HomeSchoolWeb.Resources.NavigationResources());
            resourceConfig.addResource(new Home.HomeSchoolWeb.Resources.ErrorResources());
            resourceConfig.addResource(new Home.HomeSchoolWeb.Resources.GamesResources());
            resourceServiceProvider.config(resourceConfig);
        });
        HomeSchoolWeb.app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
                cfpLoadingBarProvider.includeBar = false;
            }]);
        HomeSchoolWeb.app.config([
            'ngToastProvider', function (ngToast) {
                ngToast.configure({
                    verticalPosition: "top",
                    horizontalPosition: "center",
                    timeout: 5000
                });
            }
        ]);
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
>>>>>>> 3b3b4f57bc58df1b5a9384175ce2050a2db557f6
})(Home || (Home = {}));
//# sourceMappingURL=app.js.map