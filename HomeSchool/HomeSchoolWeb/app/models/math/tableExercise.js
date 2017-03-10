var Home;
(function (Home) {
    var Models;
    (function (Models) {
        var TableExercise = (function () {
            function TableExercise(obj) {
                this.Id = 0;
                this.A = 0;
                this.B = 0;
                this.Answered = 0;
                this.Correct = 0;
                if (obj != null) {
                    this.Id = obj.Id;
                    this.A = obj.A;
                    this.B = obj.B;
                    this.Answered = obj.Answered;
                    this.Correct = obj.Correct;
                }
            }
            return TableExercise;
        }());
        Models.TableExercise = TableExercise;
    })(Models = Home.Models || (Home.Models = {}));
})(Home || (Home = {}));
//# sourceMappingURL=tableExercise.js.map