(function () {
'use strict';

angular.module('wpapp.home')
.component('posts', {
  templateUrl: 'modules/home/home.posts.template.html',
  controller: PostsComponentController,
  bindings: {
    posts: '<',
    users: '<',
    loadMorePosts: '&',
    noMorePosts: '<'
  }
});

//PostsComponentController.$inject = []
function PostsComponentController() {
  var $ctrl = this;

  $ctrl.loadMore = function () {
    return $ctrl.loadMorePosts();
  };
}

})();
