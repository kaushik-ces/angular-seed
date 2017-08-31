(function(){
	'use strict';
	angular
	.module('myApp', [
		'ui.router',

		// BD team module
		'myApp.bd',
	])

	.config(appConfig);

	appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

	function appConfig($urlRouterProvider, $stateProvider){
    	$urlRouterProvider
    		.when('', '/bd');
  	}

})();