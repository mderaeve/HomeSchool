'use strict';
module Home.Models {
    export interface ILanguage {
        Id: number;
        Code: string;
        DisplayText: string;
    }

    export class Language implements ILanguage {
        Id: number;
        Code: string;
        DisplayText: string;

        constructor(lang?: ILanguage) {
            if (lang != null) {
                this.Id = lang.Id;
                this.Code = lang.Code;
                this.DisplayText = lang.DisplayText;
            }
        }
    }
}