'use strict';
var Home;
(function (Home) {
    var Common;
    (function (Common) {
        var List = (function () {
            function List(values) {
                this._values = [];
                if (values != null)
                    this._values = values;
            }
            List.prototype.add = function (value) {
                if (this.contains(value))
                    throw new Error('This value already exists in the List.');
                this._values.push(value);
            };
            List.prototype.addRange = function (values) {
                this._values.concat(values);
            };
            List.prototype.clear = function () {
                this._values = [];
            };
            List.prototype.contains = function (value) {
                if (this.getOrdinal(value) === -1)
                    return false;
                else
                    return true;
            };
            List.prototype.count = function () {
                return this._values.length;
            };
            List.prototype.find = function (filterSvc, expression) {
                var self = this;
                return filterSvc('filter')(self._values, expression);
            };
            List.prototype.getOrdinal = function (value) {
                return this._values.indexOf(value);
            };
            List.prototype.remove = function (value) {
                if (!this.contains(value))
                    return false;
                this._values.splice(this.getOrdinal(value), 1);
                return true;
            };
            List.prototype.values = function () {
                return this._values;
            };
            return List;
        }());
        Common.List = List;
    })(Common = Home.Common || (Home.Common = {}));
})(Home || (Home = {}));
//# sourceMappingURL=list.js.map