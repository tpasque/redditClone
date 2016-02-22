var app = angular.module('redditClone', ['ui.bootstrap']);

app.controller('MyController', function ($scope) {
    $scope.posts = [];
    $scope.showForm = false

    $scope.ToggleForm = function () {
      $scope.showForm = !$scope.showForm;
    }

    $scope.ToggleCommentForm = function (post) {
      post.showCommentForm = !post.showCommentForm;
    }

    $scope.addComment = function (post, comment, comment_author) {
      post.comments.push(comment)
      post.comment_authors.push(comment_author)
    }

    $scope.CountUpVote = function (post) {
      post.up_votes = post.up_votes + 1
      // var total_upvotes = post.up_votes.push(upvote);
      // post.up_votes.push(upvote)

      // console.log(total_upvotes);
    }

    $scope.CountDownVote = function (post) {
      post.down_votes = post.down_votes - 1
      // var total_downvotes = post.down_votes.push(downvote);
      // console.log(total_downvotes);
    }

    $scope.submitPost = function () {

      //validations.  Review with instructor on how to "module.export" this into the html?
      //then do if statment with the insert on the if and the else statement would have the alert for the errors.

      // function titleIsNotEmpty(input){
      //   return !input.trim() ? 'title cannot be blank' : true ;
      // }
      //
      // function authorIsNotEmpty(input){
      //   return !input.trim() ? 'author cannot be blank' : true ;
      // }
      //
      // function image_urlIsNotEmpty(input){
      //   return !input.trim() ? 'image URL cannot be blank' : true ;
      // }
      //
      // function descriptionIsNotEmpty(input){
      //   return !input.trim() ? 'description cannot be blank' : true ;
      // }
      //
      // function formIsValid(input) {
      //   var errors = [];
      //   errors.push(titleIsNotEmpty(input.title))
      //   errors.push(authorIsNotEmpty(input.author))
      //   errors.push(image_urlIsNotEmpty(input.image_url))
      //   errors.push(descriptionIsNotEmpty(input.description))
      //   return errors.filter(function (error){
      //     return error !== true;
      //     console.log(errors)
      //   })
      // }

      // this will allow us to collect data
      var post = {};
      post.title = $scope.title;
      post.author = $scope.author;
      post.image_url = $scope.image_url;
      post.description = $scope.description;
      post.comments = [];
      post.comment_authors = [];
      post.showCommentForm = false;
      post.up_votes = 0;
      post.down_votes = 0;
      $scope.posts.push(post);

      console.log($scope.posts);
      // console.log("first post.comments");
      // console.log(post.comments);
      $scope.ToggleForm();
      console.log(post.up_votes);

      // ????????.  Why doens't this change?
      post.votes = post.up_votes + post.down_votes;
    }


  });
