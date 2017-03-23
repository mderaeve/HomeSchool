module Home.Models {

    export interface IHundredFieldLine {

        Id: number;
        From: number;
        To: number;
        Total: number;
        Visible: boolean;
    }

    export class HundredFieldLine implements IHundredFieldLine {

        public Id: number = 0;
        public From: number = 0;
        public To: number = 0;
        public Total: number = 0;
        public Visible: boolean = true;

        constructor(obj?: HundredFieldLine) {
            if (obj != null) {
                this.Id = obj.Id;
                this.From = obj.From;
                this.To = obj.To;
                this.Total = obj.Total;
                this.Visible = obj.Visible;
            }
        }
    }
}