angular.module('SearchController', ['DataService']).controller('SearchController', function($scope, $rootScope, $http, dataService) {
	
	$scope.results = [];
	$scope.name = '';
    $scope.company = '';
    $scope.jobtitle = '';
    $scope.skill = '';
    $scope.endorsement = '';
    $scope.education = '';

    $scope.clearFields = function() {
        $scope.name = '';
        $scope.company = '';
        $scope.jobtitle = '';
        $scope.skill = '';
        $scope.endorsement = '';
        $scope.education = '';
	};
	
	function isEmpty( obj ) {
		console.log("in isEmpty()");
		for ( var prop in obj ) { 
			if ( obj[prop] !== "" && obj.hasOwnProperty( prop )) { return false; }
		}
		return true;
	}
	
    $scope.handleSubmit = function() {
		//compile info into an searchObject for api
		var searchCriteria = {};
		searchCriteria.name = $scope.name;
		searchCriteria.company = $scope.company;
		searchCriteria.jobTitle = $scope.jobtitle;
		searchCriteria.skill = $scope.skill;
		searchCriteria.endorsement = $scope.endorsement;
		searchCriteria.education = $scope.education;
		
		if(isEmpty(searchCriteria)){
			$scope.error = "search fields cannot be left empty";
			alert("cannot leave fields empty");
		}else{
			dataService.performSearch(searchCriteria).then(function(data){
				$scope.results = [];			
				var i = 0;
				for (i = 0; i < (data.resultList).length ;i++) {
					var obj = { id: data.resultList[i].id,
								name: data.resultList[i].name,
								jobTitle: data.resultList[i].jobTitle,
								company: data.resultList[i].company};
					$scope.results.push(obj);
				}
			});
		}
	}
});