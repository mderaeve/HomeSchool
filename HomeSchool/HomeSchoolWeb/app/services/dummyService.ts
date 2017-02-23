/// <reference path="../_app.ts" />
'use strict';
module BDO.HomeSchoolWeb.Services {
    import C = BDO.Common;
    import M = BDO.HomeSchoolWeb.Models;

    export interface IDummyService {
        apiGetSample: () => ng.IPromise<Array<any>>;
    }

    export class DummyService implements IDummyService {
        static $inject: string[] = ['$http', '$filter', 'logService'];
        static id: string = "dummyService";

        private logSvc: ILogService;
        

        constructor(private $http: ng.IHttpService, private $filter: ng.IFilterService, logService: ILogService) {
            this.logSvc = logService;

            this.activate();
        }

        private activate(): void {
            const self = this;


        }


        apiGetSample(): ng.IPromise<Array<any>> {
            const self = this;
            self.logSvc.log('Calling apiGet');

            let defer = Q.defer();
            let serviceUrl: string = `${C.Configuration.AppConfig.serviceBaseUrl}apigetsample`;

            self.$http.get(serviceUrl)
                .success((data, status, headers, config) => {
                    defer.resolve(data as Array<any>);
                })
                .error((data, status, headers, config) => {
                    self.logSvc.log(data);
                    defer.reject(new M.RejectMessage({ Message: data }));
                });
            
            return defer.promise;
        }
    }

    app.service(BDO.HomeSchoolWeb.Services.DummyService.id, BDO.HomeSchoolWeb.Services.DummyService);
}