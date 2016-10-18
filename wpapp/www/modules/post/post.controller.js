(function () {
'use strict';

angular.module('wpapp.post')
.controller('PostCtrl', PostCtrl);

PostCtrl.$inject = ['post'];
function PostCtrl(post) {
	var post_page = this;
  	post_page.post = post;
  	console.log(post)
}

})();