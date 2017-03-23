/// <reference path="../../../_app.ts" />
'use strict';

module Home.Controllers {
    import C = Home.Common;
    import F = Home.Factories;
    import M = Home.Models;
    import S = Home.Services;

    export class HundredFieldLineController {
        static $inject: string[] = [C.Resources.ResourceProvider.id, C.Services.LocalStorageService.id];
        static id: string = 'hundredFieldLineController';

        lineStart: string;
        lineLen: string;

        fields: Array<M.IHundredField>;

        constructor(
            private resourceSvc: C.Resources.IResourceService,
            private localStorageSvc: C.Services.ILocalStorageService,
        ) {
            this.activate();
        }

        private activate(): void {
            const self = this;
            let lineLength: number = parseInt(self.lineStart) + parseInt(self.lineLen);
            self.fields = new Array<M.IHundredField>();
            for (let i = parseInt(self.lineStart); i < lineLength; i++) {
                var t = new M.HundredField();
                t.Id = i;
                t.Number = i ;
                t.Visible = true;
                self.fields.push(t);
            }
        }

        clicked(l: M.IHundredField): void
        {
            l.Css = 'btn btn-success btn-block';
        }
    }

    app.controller(Home.Controllers.HundredFieldLineController.id, Home.Controllers.HundredFieldLineController);
}