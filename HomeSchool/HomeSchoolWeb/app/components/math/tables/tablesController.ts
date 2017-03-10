/// <reference path="../../../_app.ts" />
'use strict';
module Home.Controllers.Games {
    import C = Home.Common;
    import M = Home.Models;

    export class TableGameController {
        static $inject: string[] = [C.Resources.ResourceProvider.id];
        static id: string = "tableGameController";

        $resourceHelper: C.Resources.IResourceHelper;

        constructor(private resourceSvc: C.Resources.IResourceService) {
            this.activate();
        }

        tablesString: string = '';
        numberOfExercises: number = 10;
        borderBottom: number = 1;
        borderTop: number = 10;
        exercises: Array<M.ITableExercise>;

        activate(): void {
            const self = this;
        }

        start(): void {
            const self = this;
            self.exercises = new Array<M.ITableExercise>();
            for (let i = 0; i < this.numberOfExercises;i++)
            {
                var t = new M.TableExercise();
                t.Id = i;
                t.A = 1;
                t.B = 2;
                self.exercises.push(t);
            }
        }
    }

    app.controller(Home.Controllers.Games.TableGameController.id, Home.Controllers.Games.TableGameController);
}