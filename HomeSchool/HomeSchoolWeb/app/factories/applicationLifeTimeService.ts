/// <reference path="../_app.ts" />
'use strict';
module Home.Factories {
    import C = Home.Common;
    import M = Home.Models;
    import S = Home.Services;

    export interface IApplicationLifeTimeService {
        getApplicationLanguage: () => M.ILanguage;
        getLanguages: () => C.List<M.ILanguage>;
        setApplicationLanguage: (languageId: number) => void;
    }

    export class ApplicationLifeTimeService implements IApplicationLifeTimeService {
        static $inject: Array<string> = ['$filter', S.LogService.id];
        static id: string = 'applicationLifeTimeService';

        private applicationLanguage: M.ILanguage;
        private languageList: C.List<M.ILanguage> = new C.List<M.ILanguage>([
            { Id: 1, Code: 'nl', DisplayText: 'Nederlands' },
            { Id: 4, Code: 'en', DisplayText: 'English' }
        ]);

        constructor(private $filter: ng.IFilterService, private logSvc: S.ILogService) {
            this.init();
        }

        private init(): void {
            const self = this;
        }

        public getApplicationLanguage(): M.ILanguage {
            const self = this;
            return self.applicationLanguage;
        }

        public getLanguages(): C.List<M.ILanguage> {
            const self = this;
            return self.languageList;
        }

        public setApplicationLanguage(languageId: number): void {
            const self = this;
            let expression: any = { Id: languageId };
            let filterRslt: Array<M.ILanguage> = self.languageList.find(self.$filter, expression);
            if (filterRslt != null && filterRslt.length > 0)
                self.applicationLanguage = filterRslt[0];
            else
                self.applicationLanguage = self.languageList[0];
        }

        public static ApplicationLifeTimeFactory($filter: ng.IFilterService, logService: S.ILogService): ApplicationLifeTimeService {
            return new ApplicationLifeTimeService($filter, logService);
        }
    }

    app.factory(Home.Factories.ApplicationLifeTimeService.id,
        ['$filter', S.LogService.id, Home.Factories.ApplicationLifeTimeService.ApplicationLifeTimeFactory]);
}