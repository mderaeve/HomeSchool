var BDO;
(function (BDO) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Models;
        (function (Models) {
            var DummyModel = (function () {
                function DummyModel(obj) {
                    this.Id = null;
                    if (obj != null) {
                        this.Id = obj.Id;
                    }
                }
                return DummyModel;
            }());
            Models.DummyModel = DummyModel;
        })(Models = HomeSchoolWeb.Models || (HomeSchoolWeb.Models = {}));
    })(HomeSchoolWeb = BDO.HomeSchoolWeb || (BDO.HomeSchoolWeb = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=DummyModel.js.map