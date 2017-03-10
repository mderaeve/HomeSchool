var Home;
(function (Home) {
    var Common;
    (function (Common) {
        var Resources;
        (function (Resources) {
            var ResourceHelper = (function () {
                function ResourceHelper(resourceClass) {
                    this._resourceClass = '';
                    this._resourceClass = resourceClass;
                }
                ResourceHelper.prototype.getLocalResource = function (resourceId) {
                    var self = this;
                    return Home.Resources[self._resourceClass].Messages[resourceId];
                };
                return ResourceHelper;
            }());
            Resources.ResourceHelper = ResourceHelper;
        })(Resources = Common.Resources || (Common.Resources = {}));
    })(Common = Home.Common || (Home.Common = {}));
})(Home || (Home = {}));
//# sourceMappingURL=resourceHelper.js.map