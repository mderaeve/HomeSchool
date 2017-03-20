/// <reference path="../_app.ts" />
'use strict';
module Home.Services {
    import C = Home.Common;
    import M = Home.Models;

    export interface IUserService {
        getUser: () => M.IUserModel;
        setUser: (user: M.IUserModel)=> void;
    }

    export class UserService implements IUserService {
        static $inject: string[] = ['$http', '$filter', 'logService', C.Services.LocalStorageService.id];
        static id: string = "userService";
        private loggedInUser: M.IUserModel;

        constructor(
            private $http: ng.IHttpService,
            private $filter: ng.IFilterService,
            private logService: ILogService,
            private localStorageSvc: C.Services.ILocalStorageService)
        {

            this.activate();
        }

        private activate(): void {
            const self = this;


        }

        setUser(user: M.IUserModel): void
        {
            const self = this;
            self.logService.log('Setting user');
            self.loggedInUser = user;
            self.localStorageSvc.setItemAny(new C.KeyValuePair<string, any>('loggedInUser', user));
        }

        getUser(): M.IUserModel {
            const self = this;
            self.logService.log('Getting user');
                       
            if (self.loggedInUser == null) {
                var user = self.localStorageSvc.getItemAny('loggedInUser');
                if (user != null) {
                    self.loggedInUser = user;
                    return self.loggedInUser;
                }
            }
            return self.loggedInUser;
        }
    }

    app.service(Home.Services.UserService.id, Home.Services.UserService);
}