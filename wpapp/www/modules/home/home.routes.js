(function () {
'use strict';

angular.module('wpapp.home')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // *** Set up UI states ***
  $stateProvider

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'modules/home/home.html',
        controller: 'HomeCtrl as home_page'
      }
    },
    resolve: {
      posts: ['DataService', function (DataService, PostsPerPage) {
        return DataService.fetchAllPosts(PostsPerPage, 1)
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.log("Something went terribly wrong.");
          });
      }]
    }
  });

}

})();