// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('starter', ['ionic', 'ionic-material','ngOpenFB','firebase']);

app.run(function ($ionicPlatform,ngFB) {
    ngFB.init({appId: '203754890060574'});
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider,$sceDelegateProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        cache:false,
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }
        }
    })
    
    .state('app.detail', {
        url: '/detail:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/detail.html',
                controller: 'DetailCtrl'
            }
        }
    })
    
    .state('app.comments', {
        url: '/comments:id',
        cache:false,
        views: {
            'menuContent': {
                templateUrl: 'templates/comments.html',
                controller: 'CommentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
       
        views: {
            'menuContent': {
                templateUrl: 'templates/bookmark.html',
                controller: 'BookmarkCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/components');
    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
});

