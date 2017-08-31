(function(){
  'use strict';

  angular
    .module('myApp.bd')
    .config(homeConfig);

  homeConfig.$inject = ['$stateProvider'];

  function homeConfig($stateProvider){

    $stateProvider
      .state('bd', {
      url: '/bd',
      templateUrl: 'app/features/bd/bd-home.tpl.html',
      controller: 'BdController as bdCtrl'  
    })
  };

})();