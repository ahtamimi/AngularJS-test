(function () {
'use strict';


angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.text="";
	$scope.message="";
	$scope.isEmpty = false;

	$scope.check = function () {
		
		if($scope.text.length === 0 ){
			$scope.message = "Please enter data first";
			$scope.isEmpty = true;
		}
		else {

			var items = $scope.text.split(',');
			var counter = 0;

			for (var i = items.length - 1; i >= 0; i--) {
				counter += items[i].trim().length === 0 ? 0: 1;
			}


			if(counter < 4)
				$scope.message = "Enjoy!";
			else
				$scope.message = "Too much!";

			$scope.isEmpty = false;
		} 
	};
	
	
};



})();