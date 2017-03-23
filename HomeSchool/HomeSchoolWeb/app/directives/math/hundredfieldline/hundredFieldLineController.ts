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

        lineStart: number;
        lineStop: number;

        totalNumbers: number;
        exercises: Array<M.TableExercise>;

        constructor(
            private resourceSvc: C.Resources.IResourceService,
            private localStorageSvc: C.Services.ILocalStorageService,
        ) {
            this.activate();
        }

        private activate(): void {
            const self = this;
            self.totalNumbers = self.lineStop - self.lineStart;
            self.exercises = new Array<M.TableExercise>();
            for (let i = 0; i < self.totalNumbers; i++) {
                var t = new M.TableExercise();
                t.Id = i;
                t.A = 1;
                t.B = 2;
                t.Css = 'glyphicon glyphicon-pencil';
                self.exercises.push(t);
            }
        }

        getTotalNumbers(): number
        {
            const self = this;
            return self.lineStop - self.lineStart +1;
        }
    }

    app.controller(Home.Controllers.HundredFieldLineController.id, Home.Controllers.HundredFieldLineController);
}