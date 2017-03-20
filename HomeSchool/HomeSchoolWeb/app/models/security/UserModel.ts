module Home.Models {

    export interface IUserModel {

        Id: number;
        Name: string;
        Rank: number;
        Avater: number;
    }

    export class UserModel implements IUserModel {

        public Id: number = null;
        public Name: string = null;
        public Rank: number = 0;
        public Avater: number = 0;

        constructor(obj?: IUserModel) {
            if (obj != null) {
                this.Id = obj.Id;
                this.Name = obj.Name;
                this.Rank = obj.Rank;
                this.Avater = obj.Avater;
            }
        }
    }
}