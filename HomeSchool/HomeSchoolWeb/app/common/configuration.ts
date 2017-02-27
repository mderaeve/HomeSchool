/// <reference path="../_app.ts" />
'use strict';
module Home.Common.Configuration {
    export class AppConfig {
        static serviceBaseUrl: string = 'http://localhost/';
    }

    export class DefaultGridPagerConfig {
        static pageSize: number = 20;
        static pagesToShow: number = 5;
    }

    export class LocalStorageKeys {
        static applicationLanguage: string = 'HomeSchoolWeb.applicationLanguage';
    }
}