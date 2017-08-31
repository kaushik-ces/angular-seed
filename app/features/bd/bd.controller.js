(function(){
	'use strict';

	angular
		.module('myApp.bd')
		.controller('BdController', BdController);

		BdController.$inject = [];

		function BdController(){

			var vm = this;
			vm.test = 'Vandhuruchuuu!!!'
		};


})();