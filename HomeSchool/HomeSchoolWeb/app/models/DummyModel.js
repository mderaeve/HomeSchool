var Home;
(function (Home) {
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
    })(Models = Home.Models || (Home.Models = {}));
})(Home || (Home = {}));
//# sourceMappingURL=DummyModel.js.map