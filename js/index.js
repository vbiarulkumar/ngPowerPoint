var app = angular.module('app', ['ngPowerPoint']);

var ngPowerPoint = angular.module('ngPowerPoint', []);
ngPowerPoint.directive('ngPowerPoint', function() {
	
	return {
		templateUrl: '../js/textarea.html',
		restrict: 'E',
		scope: {},
		transclude: true,
		controller: ['$scope', function($scope) {

		}]
	}
});
ngPowerPoint.directive('pptIndex', function() {
	function link(scope, element, attrs, timerctrl) {
		console.log(scope.pptIndex);	
	}
	return {
		require: '^^ngPowerPoint',
		restrict: 'A',
		transclude: true,
		scope: {
			pptIndex: '@'
		},
		link: link
	}
});

app.controller('ngCtrl', ['$scope', function($scope) {

}]);

