(function () {
'use strict';


angular.module('NameCalculator',[])

.controller('NameCalculatorController', function ($scope) {

	$scope.name="";
	$scope.totalValue = 0;

	$scope.displayNumeric = function(){
		var totalNameValue = calculateNumiricForString($scope.name);
		$scope.totalValue = totalNameValue;
	};



function calculateNumiricForString(name) {
	var totalNameValue = 0;
	for (var i = name.length - 1; i >= 0; i--) {
		totalNameValue += name.charCodeAt(i);
	}
	return totalNameValue;
}

});



})();