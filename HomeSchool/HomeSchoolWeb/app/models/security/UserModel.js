var Home;
(function (Home) {
    var Models;
    (function (Models) {
        var UserModel = (function () {
            function UserModel(obj) {
                this.Id = null;
                this.Name = null;
                this.Rank = 0;
                this.Avater = 0;
                if (obj != null) {
                    this.Id = obj.Id;
                    this.Name = obj.Name;
                    this.Rank = obj.Rank;
                    this.Avater = obj.Avater;
                }
            }
            return UserModel;
        }());
        Models.UserModel = UserModel;
    })(Models = Home.Models || (Home.Models = {}));
})(Home || (Home = {}));
//# sourceMappingURL=UserModel.js.map