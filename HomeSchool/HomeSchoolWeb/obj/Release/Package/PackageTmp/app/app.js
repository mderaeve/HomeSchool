/// <reference path="_app.ts" />
var BDO;
(function (BDO) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        HomeSchoolWeb.app = angular.module("HomeSchoolWebApp", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast', 'bdo.resources', 'bdo.localstorage']);
        var Config = (function () {
            function Config($stateProvider, $urlRouterProvider) {
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
            Config.$inject = ["$stateProvider", "$urlRouterProvider"];
            return Config;
        }());
        HomeSchoolWeb.Config = Config;
        HomeSchoolWeb.app.config(Config);
        HomeSchoolWeb.app.config(function (resourceServiceProvider) {
            var resourceConfig = new BDO.Common.Resources.ResourceConfiguration();
            resourceConfig.preferredLanguage = 'en'; //is the default setting (could be omitted here)
            resourceConfig.addResource(new BDO.HomeSchoolWeb.Resources.HelpResources());
            resourceConfig.addResource(new BDO.HomeSchoolWeb.Resources.HomeResources());
            resourceConfig.addResource(new BDO.HomeSchoolWeb.Resources.NavigationResources());
            resourceConfig.addResource(new BDO.HomeSchoolWeb.Resources.ErrorResources());
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
    })(HomeSchoolWeb = BDO.HomeSchoolWeb || (BDO.HomeSchoolWeb = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=app.js.map