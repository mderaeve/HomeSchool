var Home;
(function (Home) {
    var Models;
    (function (Models) {
        var RejectMessage = (function () {
            function RejectMessage(obj) {
                this.Message = null;
                if (obj != null) {
                    this.Message = obj.Message;
                }
            }
            return RejectMessage;
        }());
        Models.RejectMessage = RejectMessage;
    })(Models = Home.Models || (Home.Models = {}));
})(Home || (Home = {}));
//# sourceMappingURL=RejectMessage.js.map