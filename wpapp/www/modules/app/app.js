// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('wpapp', ['ionic', 'wpapp.controller', 'wpapp.data', 'wpapp.home', 'wpapp.post'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back').previousTitleText('');
  $ionicConfigProvider.navBar.alignTitle('center');

  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'modules/app/app.menu.html',
    controller: 'AppCtrl as app',
    resolve: {

      wp_options: ['DataService', function (DataService) {
        return DataService.fetchWpOptions()
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.log("Something went terribly wrong.");
          });
      }],

      styles: ['DataService', function (DataService) {
        return DataService.fetchAppOptions()
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.log("Something went terribly wrong.");
          });
      }],

      users: ['DataService', function (DataService) {
        return DataService.fetchAllUsers()
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.log("Something went terribly wrong.");
          });
      }],

    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

.constant('ApiBasePath', "http://wpapp.s-pro.tk/wp-json")
.constant('OptionsPageId', 65)
.constant('PostsPerPage', 5);

