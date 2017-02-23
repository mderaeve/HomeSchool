﻿/// <reference path="../../_app.ts" />
'use strict';
module BDO.HomeSchoolWeb.Controllers {
    import C = BDO.Common;

    export class HelpController {
        static $inject: string[] = [C.Resources.ResourceProvider.id];
        static id: string = "helpController";

        $resourceHelper: C.Resources.IResourceHelper;

        constructor(private resourceSvc: C.Resources.IResourceService) {
            this.activate();
        }

        activate(): void {
            const self = this;
        }
    }

    app.controller(BDO.HomeSchoolWeb.Controllers.HelpController.id, BDO.HomeSchoolWeb.Controllers.HelpController);
}