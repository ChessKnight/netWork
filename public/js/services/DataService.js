angular.module('DataService', []).factory('dataService', ['$http', function($http, $q) {

	var urlBase = 'http://localhost:8080/api';
	$http.defaults.headers.post["Content-Type"] = 'application/JSON';
    var dataService = {};

    /*
      LOGIN SERVICE CALLS 
    */
	dataService.validateEmail = validateEmail;
	dataService.getAccount = getAccount;
	dataService.createAccount = createAccount;
	dataService.resetPassword = resetPassword;
	dataService.performLoginOperation = performLoginOperation;

	/*
	  FORUM SERVICE CALLS
	*/
	dataService.getForumList = getForumList;
	dataService.createForum = createForum;

	/*
	  PROFILE SERVICE CALLS
	*/
	dataService.performSearch = performSearch;
	dataService.getProfile = getProfile;
	dataService.updateProfile = updateProfile;
	/*
	  CONNECTION SERVICE CALLS
	*/
	
	dataService.getPendingConnection = getPendingConnection;
	dataService.getConnection = getConnection;
	dataService.removeConnection= removeConnection;
	dataService.approveConnection= approveConnection;
	dataService.declineConnection= declineConnection;
	
	return dataService;	
	
	function testForumService(){
		return $http({
				method: 'GET',
				url: urlBase + '/testForumService'
		}).then(
			function(res) { //what to on on success call
				console.log(JSON.stringify(res.data));
				return res.data;
			},
			function(res) { //what to do on failed call
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
		});
	}

	function getForumList(){
				return $http({
				method: 'GET',
				url: urlBase + '/getForumList'
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});

	}

	function getForumById(forumId){

	}

	function createForum(forumData){
		return $http({
				method: 'POST',
				url: urlBase + '/createForum', 
				data: forumData
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});


	}

	function validateEmail(newEmail){
		return $http({
			method: 'POST',
				url: urlBase + '/validateEmail',
				data: newEmail
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});
	}
	
	function getAccount(accountInfo){
		return $http({
			method: 'POST',
				url: urlBase + '/getAccount',
				data: accountInfo
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});
	}
	
	function resetPassword(accountInfo){
		return $http({
			method: 'POST',
				url: urlBase + '/resetPassword',
				data: accountInfo
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});
	}

	function createAccount(newUser){
		return $http({
				method: 'POST',
				url: urlBase + '/createAccount',
				data: newUser
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});
	}

		
	function performLoginOperation(userIn, passIn){ 
		return $http({
				method: 'POST',
				url: urlBase + '/login',
				data: {email : userIn,
						password : passIn}
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});
	}
	
	function performSearch(searchCriteria){ 
		console.log(searchCriteria);
		return $http({
				method: 'POST',
				url: urlBase + '/search',
				data: searchCriteria
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body.data;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});
	}
    
	function getProfile(profileID){ 
		console.log(profileID);
		return $http({
				method: 'POST',
				url: urlBase + '/getProfileById',
				data: profileID
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body.data;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});
	}
	
    function getPendingConnection(pendingConnection){
		return $http({
				method: 'POST',
				url: urlBase + '/getPendingConnection',
				data: {userId:pendingConnection}
		}).then(
			function(res) { //what to on on success call
				console.log(JSON.stringify(res.data));
				return res.data;
			},
			function(res) { //what to do on failed call
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
		});
	}


    function getConnection(user){
		return $http({
				method: 'POST',
				url: urlBase + '/getConnection',
				data: {userId:user}
				
		}).then(
			function(res) { //what to on on success call
				console.log(JSON.stringify(res.data));
				return res.data;
			},
			function(res) { //what to do on failed call
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
		});
	}
	
	
    function removeConnection(currentUser, selectedConnection){
		return $http({
				method: 'POST',
				url: urlBase + '/removeConnection',
				data: {userId:currentUser ,connectionId:selectedConnection}
				
		}).then(
			function(res) { //what to on on success call
				console.log(JSON.stringify(res.data));
				return res.data;
			},
			function(res) { //what to do on failed call
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
		});
	}
    
    
    function approveConnection(currentUser1, selectedConnection1){
		return $http({
				method: 'POST',
				url: urlBase + '/approveConnection',
				data: {userId:currentUser1 ,connectionId:selectedConnection1}
				
		}).then(
			function(res) { //what to on on success call
				console.log(JSON.stringify(res.data));
				return res.data;
			},
			function(res) { //what to do on failed call
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
		});
	}
    
    function declineConnection(currentUser2, selectedConnection2){
		return $http({
				method: 'POST',
				url: urlBase + '/declineConnection',
				data: {userId:currentUser2 ,connectionId:selectedConnection2}
				
		}).then(
			function(res) { //what to on on success call
				console.log(JSON.stringify(res.data));
				return res.data;
			},
			function(res) { //what to do on failed call
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
		});
	}
    
	function updateProfile(data){ 
		console.log(data);
		return $http({
				method: 'POST',
				url: urlBase + '/updateProfileInfo',
				data: data
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body.data;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});
	}
    
    
	
}]);