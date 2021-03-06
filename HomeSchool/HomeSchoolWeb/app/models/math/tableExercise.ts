﻿module Home.Models {

    export interface ITableExercise {

         Id: number;
         A: number;
         B: number;
         Answered: number;
         Correct: number;
         Css: string;
    }

    export class TableExercise implements ITableExercise {

        public Id: number = 0;
        public A: number = 0;
        public B: number = 0;
        public Answered: number = 0;
        public Correct: number = 0;
        public Css: string = 'glyphicon glyphicon-pencil';

        constructor(obj?: TableExercise) {
            if (obj != null) {
                this.Id = obj.Id;
                this.A = obj.A;
                this.B = obj.B;
                this.Answered = obj.Answered;
                this.Correct = obj.Correct;
                this.Css = obj.Css;
            }
        }
    }
}