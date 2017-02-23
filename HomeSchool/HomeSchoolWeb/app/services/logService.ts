﻿/// <reference path="../_app.ts" />
'use strict';
module BDO.HomeSchoolWeb.Services {
    export interface ILogService {
        log: (msg: string) => void;
    }

    export class LogService implements ILogService {
        static $inject: string[] = [];
        static id: string = "logService";

        constructor() {
        }

        log(msg: string): void {
            console.log(msg);
        }
    }

    app.service(BDO.HomeSchoolWeb.Services.LogService.id, BDO.HomeSchoolWeb.Services.LogService);
}