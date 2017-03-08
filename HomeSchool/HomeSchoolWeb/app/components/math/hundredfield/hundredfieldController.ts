/// <reference path="../../../_app.ts" />
'use strict';
module Home.HomeSchoolWeb.Controllers.Games {
    import C = Home.Common;

    export class HundredFieldGameController {
        static $inject: string[] = [C.Resources.ResourceProvider.id];
        static id: string = "hundredFieldGameController";

        $resourceHelper: C.Resources.IResourceHelper;

        constructor(private resourceSvc: C.Resources.IResourceService) {
            this.activate();
        }

        activate(): void {
            const self = this;
        }
    }

    app.controller(Home.HomeSchoolWeb.Controllers.Games.HundredFieldGameController.id, Home.HomeSchoolWeb.Controllers.Games.HundredFieldGameController);
}