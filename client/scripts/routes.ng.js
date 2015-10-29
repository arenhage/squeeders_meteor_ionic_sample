angular.module('squeeders').config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('main', {
         url: '/main',
         abstract: true,
         templateUrl: 'client/templates/main.ng.html'
      })
      .state('main.list', {
         url: '/list',
         views: {
           'menuContent': {
              templateUrl: 'client/templates/list.ng.html',
              controller: 'ListController'
           }
         }
      })
   $urlRouterProvider.otherwise('main/list');
});
