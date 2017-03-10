/// <reference path="../../_app.ts" />
'use strict';
module Home.Controllers {
    import C = Home.Common;

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

    app.controller(Home.Controllers.HelpController.id, Home.Controllers.HelpController);
}