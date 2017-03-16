/// <reference path="../../../_app.ts" />
'use strict';
module Home.HomeSchoolWeb.Controllers.Games {
    import C = Home.Common;

    export class TableGameController {
        static $inject: string[] = [C.Resources.ResourceProvider.id];
        static id: string = "tableGameController";

		$resourceHelper: C.Resources.IResourceHelper;


        constructor(private resourceSvc: C.Resources.IResourceService) {
            this.activate();
        }

        activate(): void {
            const self = this;
        }
    }

    app.controller(Home.HomeSchoolWeb.Controllers.Games.TableGameController.id, Home.HomeSchoolWeb.Controllers.Games.TableGameController);
}