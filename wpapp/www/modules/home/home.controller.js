(function () {
'use strict';

angular.module('wpapp.home')
.controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', 'posts', 'DataService', 'PostsPerPage'];
function HomeCtrl($scope, posts, DataService, PostsPerPage) {
	var home_page = this;
  	var currentPostsPage = 1;

  	home_page.posts = posts;
  	home_page.noMorePosts = false;
  	
  	home_page.loadMorePosts = function() {
  		DataService.fetchAllPosts(PostsPerPage, ++currentPostsPage)          
  			.then(function (response) {
  				if (response.data.length) {
	  				for (i=0; i<response.data.length; i++) {
	  					home_page.posts.push(response.data[i]);
	  				}
  				}
  				else {
  					home_page.noMorePosts = true;
  				}

            	return response.data;
        	})
          	.catch(function (error) {
            	console.log("Something went terribly wrong.");
          	});

  		$scope.$broadcast('scroll.infiniteScrollComplete');
  	};
}

})();