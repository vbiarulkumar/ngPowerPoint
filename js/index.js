var app = angular.module('pptApp', ['ngPowerPoint']);

var ngPowerPoint = angular.module('ngPowerPoint', []);
ngPowerPoint.directive('ngPowerPoint', function() {
	
	return {
		templateUrl: '../js/textarea.html',
		restrict: 'E',
		scope: {
			timer: '='
		},
		transclude: true,
		controller: ['$scope', function($scope) {
			/*Used for accessing parent directive properties
			from child directive*/
			this.getTimer = function() {
				return $scope.timer;
		    }
		}]
	}
});
ngPowerPoint.directive('pptIndex', function() {
	function link(scope, element, attrs, timerctrl) {
		scope.timer = timerctrl.getTimer();
		// console.log(scope.timer);
	}
	return {
		require: '^ngPowerPoint',
		restrict: 'A',
		scope: {
			pptIndex: '@'
		},
		link: link
	}
});

app.controller('ngCtrl', ['$scope', function($scope) {
	
}]);

