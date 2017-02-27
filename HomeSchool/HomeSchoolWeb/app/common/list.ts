'use strict';
module Home.Common {
    export class List<T extends any>{
        private _values: Array<T> = [];

        constructor(values?: Array<T>) {
            if (values != null)
                this._values = values;
        }

        public add(value: T): void {
            if (this.contains(value))
                throw new Error('This value already exists in the List.');

            this._values.push(value);
        }

        public addRange(values: Array<T>) {
            this._values.concat(values);
        }

        public clear(): void {
            this._values = [];
        }

        public contains(value: T): boolean {
            if (this.getOrdinal(value) === -1)
                return false;
            else
                return true;
        }

        public count(): number {
            return this._values.length;
        }

        public find(filterSvc: ng.IFilterService, expression: any): Array<T> {
            const self = this;
            return filterSvc('filter')(self._values, expression);
        }

        public getOrdinal(value: T): number {
            return this._values.indexOf(value);
        }

        public remove(value: T): boolean {
            if (!this.contains(value))
                return false;

            this._values.splice(this.getOrdinal(value), 1);
            return true;
        }

        public values(): T[] {
            return this._values;
        }
    }
}