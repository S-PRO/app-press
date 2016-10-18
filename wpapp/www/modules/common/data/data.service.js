(function () {
'use strict';

angular.module('wpapp.data')
.service('DataService', DataService);

DataService.$inject = ['$http', 'ApiBasePath', 'PostsPerPage', 'OptionsPageId']
function DataService($http, ApiBasePath, PostsPerPage, OptionsPageId) {
  var service = this;

  service.fetchWpOptions = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "")
    });
  };

  service.fetchAppOptions = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/acf/v2/page/" + OptionsPageId)
    });
  };

  service.fetchAllPosts = function (per_page, page) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/wp/v2/posts"),
      params: {
        per_page: per_page ? per_page : PostsPerPage,
        page: page
      }
    });
  };

  service.fetchPost = function (postId) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/wp/v2/posts/" + escape(postId)),
    });
  };

  service.fetchAllUsers = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/wp/v2/users")
    });
  };

  service.fetchUser = function (userId) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/wp/v2/users/" + escape(userId)),
    });
  };

}

})();
