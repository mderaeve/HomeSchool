module Home.Common.Resources {
    export interface IResourceHelper {
        getLocalResource(resourceId: string): string;
    }

    export class ResourceHelper implements IResourceHelper {
        private _resourceClass: string = '';

        constructor(resourceClass: string) {
            this._resourceClass = resourceClass;
        }

        getLocalResource(resourceId: string): string {
            const self = this;
            return Home.Resources[self._resourceClass].Messages[resourceId];
        }
    }
}