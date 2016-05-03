/*
 * ScheVaMe-Index Fiddle is software to be used to calculate the ScheVaME-Index of projects.
	Copyright (C) 2016  Marco Dumont

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

 * 
 */
app.controller("WelcomeController", function($scope, $firebaseAuth) {
  $scope.ref = new Firebase("https://blazing-fire-882.firebaseio.com/");
  // create an instance of the authentication service
  $scope.auth = $firebaseAuth($scope.ref);
  // login with Facebook
  
  
  $scope.doTwitterLogin = function () {
 	$scope._login("twitter");
  };
  
  $scope.doFacebookLogin = function () {
  	$scope._login("facebook");
  };
  
  $scope.doGoogleLogin = function () {
  	$scope._login("google");
  };
  
  $scope.doGitHubLogin = function () {
  	$scope._login("github");
  };
  
  $scope._login = function (provider) {
 		$scope.auth.$authWithOAuthPopup(provider).then(function(authData) {
  		console.log("Logged in as:", authData.uid);
  		//replace the welcome message with projects
  		
  		}).catch(function(error) {
    		alert("Authentication failed:" + error);
  		});  	
  };
});