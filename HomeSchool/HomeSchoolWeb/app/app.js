/// <reference path="_app.ts" />
var Home;
(function (Home) {
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
        return Config;
    }());
    Config.$inject = ["$stateProvider", "$urlRouterProvider"];
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
        resourceConfig.addResource(new Home.Resources.UserResources());
        resourceConfig.addResource(new Home.Resources.CommonResources());
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
})(Home || (Home = {}));
//# sourceMappingURL=app.js.map