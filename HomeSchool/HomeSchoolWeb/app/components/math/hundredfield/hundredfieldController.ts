/// <reference path="../../../_app.ts" />
'use strict';
module Home.Controllers.Games {
    import C = Home.Common;
    import M = Home.Models;

    export class HundredFieldGameController {
        static $inject: string[] = ['$timeout',C.Resources.ResourceProvider.id];
        static id: string = "hundredFieldGameController";

        getTablesLabel: string;
        counter: number = 0;
        maxTime: number = 5;
        started: boolean = false;
        blind: boolean = false;
        numberToShow: number = 0;

        constructor(private $timeout: ng.ITimeoutService, private resourceSvc: C.Resources.IResourceService) {
            this.activate();
        }

        activate(): void {
            const self = this;
            self.setStartLabel();
            
        }

        startStop(): void
        {
            const self = this;
            if (self.started==true)
            {
                self.started = false; 
            }
            else {
                self.started = true;
                self.numberToShow = self.getRandomInt(1, 100);
                self.doCount();
            }
        }

        private doCount(): void {
            const self = this;
            
            self.$timeout(() => {
                self.counter = self.counter+1;
                self.getTablesLabel = self.counter.toString();
                if (self.counter >= self.maxTime) {
                    //change the search field
                    self.counter = 0;
                    self.numberToShow = self.getRandomInt(1, 100);
                }
                if (self.started == true) {
                    self.doCount();
                }
                else
                {
                    self.setStartLabel();
                }
            }, 1000, true);
        }

        private setStartLabel(): void
        {
            const self = this;
            self.getTablesLabel = self.resourceSvc.getLocalResource("Games.start");
        }

        private getRandomInt(min, max): number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    app.controller(Home.Controllers.Games.HundredFieldGameController.id, Home.Controllers.Games.HundredFieldGameController);
}