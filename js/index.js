var app = angular.module('pptApp', ['ngPowerPoint']);

var ngPowerPoint = angular.module('ngPowerPoint', []);

// -------------------------------------------------- //
// -------------------------------------------------- //
// I run the directive at a priority that executes pre-transclusion. This gives
// us an opportunity to alter / compile the content before it is transcluded by
// the lower-priority hook for the directive.
	/*app.directive(
	    "ngPowerPoint",
	    function() {
	        // Return the directive configuration. Notice that we are running at
	        // priority 1500.1, which is a higher priority than the next directive
	        // binding.
	        return ({
	            compile: compile,
	            priority: 1500.1,
	            restrict: "A"
	        });
	        // I compile the pre-transcluded content.
	        function compile(tElement, tAttributes) {
	            tElement.children()
	                .addClass("item");
	        }
	    }
	);
*/// I transclude the directive content BACK INTO the current container (to
// demonstrate the concept). At this point, we no longer have access to the
// transcluded content until it is cloned, which is too late to augment it.
app.directive(
    "ngPowerPoint",
    function() {
        // Return the directive configuration. Notice that we are running at
        // priority 1500, which is a lower priority than the previous directive
        // binding (the one that augmented the transcluded content).
        return ({
            compile: compile,
            priority: 1500,
            restrict: "A",
            transclude: true
        });
        // I compile the directive. Since we are transcluding the entire element,
        // we only have access to the "anchor comment" in this context.
        function compile(tElement, tAttributes) {
            console.log("Container at compile (html):", tElement.html());
            tElement.addClass("container");
            return (link);
        }
        // I link the directive. Since we can only access the content via the
        // transclusion function, at this point, the content has already been
        // compiled by the time we get the clone.
        function link(scope, element, attributes, _c, transclude) {
            console.log("Container at link (html):", element.html());
            // Clone and inject the transcluded content.
            transclude(
                function injectLinkedClone(clone) {
                    var len = clone.length;
                    var count = 0
                    if (len > 0) {

                        setInterval(function() {
                            element.append(clone[count]);
                             count++;
                                if (count == len) {
                                    clearInterval(this);
                                };
                        }, parseInt(element.attr("timer")))
                    }


                }
            );
        }
    }
);

/*ngPowerPoint.directive('pptIndex', function() {
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
});*/

app.controller('ngCtrl', ['$scope', function($scope) {

}]);
