/// <reference path="../../../_app.ts" />
'use strict';
module Home.Controllers.Games {
    import C = Home.Common;
    import M = Home.Models;

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

    app.controller(Home.Controllers.Games.HundredFieldGameController.id, Home.Controllers.Games.HundredFieldGameController);
}