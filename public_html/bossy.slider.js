angular.module('app.directive.bossy.slider', [])
    .controller('SliderController', ['$scope', function($scope) {
        $scope.value = 5;
        $scope.max = 9;
        $scope.min = 1;
        $scope.string = "----o----";
        $scope.slider = ['-', '-', '-', '-', 'o', '-', '-', '-', '-'];

        $scope.increase = function() {
            if ($scope.value < $scope.max) {
                $scope.slider[$scope.value - 1] = '-';
                $scope.value = $scope.value + 1;
                $scope.slider[$scope.value - 1] = 'o';
            }
            $scope.getstring();
        };

        $scope.decrease = function() {
            if ($scope.value > $scope.min) {
                $scope.slider[$scope.value - 1] = '-';
                $scope.value = $scope.value - 1;
                $scope.slider[$scope.value - 1] = 'o';
            }
            $scope.getstring();
        };
        $scope.getstring = function() {  //function takes the slider array and creates a string of the contents. 
            $scope.string = "";
            for(var i = 0; i < 9; i++)
            {
                $scope.string += $scope.slider[i];  
            }
        };
    
    }]).directive('bossySlider', function () {
        return {
            restrict: 'AE',
            controller: 'SliderController',
            template: '<button ng-click="decrease()">-</button><span>{{string}}</span><button ng-click="increase()">+</button><p>The value is {{value}}!</p>',
            scope: {}
        }
    });