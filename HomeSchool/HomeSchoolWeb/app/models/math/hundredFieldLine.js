var Home;
(function (Home) {
    var Models;
    (function (Models) {
        var HundredFieldLine = (function () {
            function HundredFieldLine(obj) {
                this.Id = 0;
                this.From = 0;
                this.To = 0;
                this.Total = 0;
                this.Visible = true;
                if (obj != null) {
                    this.Id = obj.Id;
                    this.From = obj.From;
                    this.To = obj.To;
                    this.Total = obj.Total;
                    this.Visible = obj.Visible;
                }
            }
            return HundredFieldLine;
        }());
        Models.HundredFieldLine = HundredFieldLine;
    })(Models = Home.Models || (Home.Models = {}));
})(Home || (Home = {}));
//# sourceMappingURL=hundredFieldLine.js.map