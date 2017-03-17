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
                t.A = self.getRandomInt(self.borderBottom, self.borderTop);
                t.B = self.getRandomInt(self.borderBottom, self.borderTop);
                t.Css = 'glyphicon glyphicon-pencil';
                self.exercises.push(t);
            }
        }

        check(ex: M.TableExercise): void {
            if (ex.A * ex.B == ex.Answered)
            {
                ex.Css = 'glyphicon glyphicon-ok';
            }
            else
            {
                ex.Css = 'glyphicon glyphicon-remove';
            }

        }


        /**
        * Returns a random integer between min (inclusive) and max (inclusive)
         * Using Math.round() will give you a non-uniform distribution!
         */
        private getRandomInt(min, max): number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    app.controller(Home.Controllers.Games.TableGameController.id, Home.Controllers.Games.TableGameController);
}