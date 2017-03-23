module Home.Models {

    export interface IHundredField {

        Id: number;
        Number: number;
        Visible: boolean;
        Css: string;
    }

    export class HundredField implements IHundredField {

        public Id: number = 0;
        public Number: number = 0;
        public Visible: boolean = true;
        public Css: string = 'btn btn-primary btn-block';

        constructor(obj?: HundredField) {
            if (obj != null) {
                this.Id = obj.Id;
                this.Number = obj.Number;
                this.Visible = obj.Visible;
                this.Css = obj.Css;
            }
        }
    }
}