(function () {
    'use strict';

    angular.module('myApp', []).controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.input = "";
        $scope.message = "";

        $scope.checkNumberOfItem = function () {

            const inputLength = countValidItem($scope.input);
            console.log(inputLength);

            if (inputLength == 0) {
                $scope.message = 'Please enter data first';
                return;
            } else if (inputLength <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        }

        function countValidItem(input) {

            let nonEmptyItemCount = 0;
            if (input == "") {
                return nonEmptyItemCount;
            }

            const values = input.split(',');
            values.forEach(item => {
                if (item.trim() !== "") {
                    nonEmptyItemCount++;
                }
            });

            return nonEmptyItemCount;
        }
    }
})()