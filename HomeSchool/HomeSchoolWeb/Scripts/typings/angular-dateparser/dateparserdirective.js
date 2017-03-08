/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
var NgDateParser;
(function (NgDateParser) {
    var DateParserDirective = (function () {
        function DateParserDirective(dateFilter, $dateParser, $locale) {
            var _this = this;
            this.dateFilter = dateFilter;
            this.$dateParser = $dateParser;
            this.$locale = $locale;
            this.restrict = 'A';
            this.require = 'ngModel';
            this.scope = {
                ngModel: '='
            };
            this.link = function ($scope, element, attrs, ngModel) {
                var dateFormat;
                attrs.$observe('dateParser', function (value) {
                    dateFormat = value;
                    ngModel.$render();
                });
                $scope.$watchCollection(function () { return _this.$locale; }, function (value, oldValue) {
                    if (!angular.equals(value, oldValue)) {
                        ngModel.$render();
                    }
                });
                ngModel.$parsers.unshift(function (viewValue) {
                    var date = _this.$dateParser(viewValue, dateFormat);
                    // Set validity when view value changes
                    ngModel.$setValidity('date', !viewValue || angular.isDate(date));
                    return date;
                });
                ngModel.$render = function () {
                    var modelValueExists = ngModel.$modelValue === '' || ngModel.$modelValue === null || ngModel.$modelValue;
                    element.val(modelValueExists ? _this.dateFilter(ngModel.$modelValue, dateFormat) : undefined);
                    _this.scope.ngModel = ngModel.$modelValue;
                };
                // Format the new model value before it is displayed
                ngModel.$formatters.push(function (modelValue) {
                    // Set validity when model value changes
                    ngModel.$setValidity('date', !modelValue || angular.isDate(modelValue));
                    return angular.isDate(modelValue) ? _this.dateFilter(modelValue, dateFormat) : '';
                });
            };
        }
        DateParserDirective.factory = function () {
            var directive = function (dateFilter, $dateParser, $locale) { return new DateParserDirective(dateFilter, $dateParser, $locale); };
            directive.$inject = ['dateFilter', '$dateParser', '$locale'];
            return directive;
        };
        return DateParserDirective;
    }());
    angular.module('dateParser')
        .directive('dateParser', DateParserDirective.factory());
})(NgDateParser || (NgDateParser = {}));
//# sourceMappingURL=dateparserdirective.js.map