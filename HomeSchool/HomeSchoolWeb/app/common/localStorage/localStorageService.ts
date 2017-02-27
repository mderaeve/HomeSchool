'use strict';
module Home.Common.Services {
    export interface ILocalStorageService {
        getItem: (key: string) => string;
        setItem: (pair: KeyValuePair<string, string>) => void;
    }

    export class LocalStorageService implements ILocalStorageService {
        static $inject: string[] = ['$window'];
        static id: string = "localStorageService";

        constructor(private $window: ng.IWindowService) {

        }

        getItem(key: string): string {
            const self = this;
            let value: string = '';
            if (self.$window)
                value = self.$window.localStorage.getItem(key);
            return value;
        }

        setItem(pair: KeyValuePair<string, string>): void {
            const self = this;
            if (self.$window)
                self.$window.localStorage.setItem(pair.key, pair.value);
        }
    }

    angular.module('home.localstorage', [])
        .service(Home.Common.Services.LocalStorageService.id, Home.Common.Services.LocalStorageService);
}