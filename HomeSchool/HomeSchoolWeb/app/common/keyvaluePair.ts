'use strict';

module BDO.Common {
    export class KeyValuePair<T extends number | string, U extends any>{
        key: T;
        value: U;

        constructor(key: T, value: U) {
            this.key = key;
            this.value = value;
        }
    }
}