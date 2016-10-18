(function () {
'use strict';

angular.module('wpapp.post')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // *** Set up UI states ***
  $stateProvider

  .state('app.post', {
    url: '/post/:postId',
    views: {
      'menuContent': {
        templateUrl: 'modules/post/post.html',
        controller: 'PostCtrl as post_page'
      }
    },
    resolve: {
      post: ['$stateParams', 'DataService', function ($stateParams, DataService) {
        return DataService.fetchPost($stateParams.postId)
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.log("Something went terribly wrong.");
          });
      }]
    },
    params: {
      postId: null
    }
  });

}

})();