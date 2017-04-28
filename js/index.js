var app = angular.module('app', ['ngPowerPoint']);

var ngPowerPoint = angular.module('ngPowerPoint', []);
ngPowerPoint.directive('ngPowerPoint', function() {
	return {
		template: '<textarea rows="4" cols="50"></textarea>',
		restrict: 'E'
	}
});

app.controller('ngCtrl', ['$scope', function($scope) {
	$scope.myname = "vinoth";
}]);

