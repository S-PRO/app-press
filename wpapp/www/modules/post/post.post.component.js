(function () {
'use strict';

angular.module('wpapp.post')
.component('post', {
  templateUrl: 'modules/post/post.post.template.html',
  controller: PostComponentController,
  bindings: {
    post: '<',
    users: '<'
  }
});

PostComponentController.$inject = []
function PostComponentController() {
  var $ctrl = this;

  console.log($ctrl.post)
}

})();
