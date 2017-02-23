var BDO;
(function (BDO) {
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
                    return BDO.HomeSchoolWeb.Resources[self._resourceClass].Messages[resourceId];
                };
                return ResourceHelper;
            }());
            Resources.ResourceHelper = ResourceHelper;
        })(Resources = Common.Resources || (Common.Resources = {}));
    })(Common = BDO.Common || (BDO.Common = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=resourceHelper.js.map