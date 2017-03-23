var Home;
(function (Home) {
    var Models;
    (function (Models) {
        var HundredField = (function () {
            function HundredField(obj) {
                this.Id = 0;
                this.Number = 0;
                this.Visible = true;
                this.Css = 'btn btn-primary btn-block';
                if (obj != null) {
                    this.Id = obj.Id;
                    this.Number = obj.Number;
                    this.Visible = obj.Visible;
                    this.Css = obj.Css;
                }
            }
            return HundredField;
        }());
        Models.HundredField = HundredField;
    })(Models = Home.Models || (Home.Models = {}));
})(Home || (Home = {}));
//# sourceMappingURL=hundredField.js.map