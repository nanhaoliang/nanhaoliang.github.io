'use strict';
// Define `TrialApp` module           引用angular-ui-router
var app = angular.module('TrialApp', ['ui.router']);

app.controller('MainController', function($scope,$state) {
//  alert("Welcome to nested view demo!");
	console.log($state);
	$state.go("homepage");
});

// Define routers   路由控制
app.config(function($stateProvider) {
	$stateProvider  //路由配置
    .state('home', {
	    url: '/home',
	    templateUrl: 'index.html',
	    controller: 'MainController'
    })
    .state('homepage', {
    	url: '/homepege',
    	templateUrl:'assets/views/content/pageHome.html',
    	controller: function($scope, $state){
    		//页面方法
    	}
    })
    .state('follow', {
    	url: '/follow',
    	templateUrl:'assets/views/content/follow.html',
    	controller: function($scope, $state){
    		//页面方法
    	}
    })
    .state('live', {
    	url: '/live',
    	templateUrl:'assets/views/content/live.html',
    	controller: function($scope, $state){
    		//页面方法
    	}
    })
    .state('recording', {
    	url: '/recording',
    	templateUrl:'assets/views/content/recording.html',
    	controller: function($scope, $state){
    		//页面方法
    	}
    })
});


//顶部head内容
app.directive("header",function(){
    return{
        restrict: 'EAC', //
        transclude: true,
        templateUrl:'assets/views/Introduce/head.html'
    }
});

//左侧划出菜单栏内容
app.directive("nav",function(){
    return{
        restrict: 'EAC', //
        transclude: true,
        templateUrl:'assets/views/Introduce/nav.html'
    }
});

// 回到顶部按钮
app.directive("top",function(){
    return{
        restrict: 'EAC', //
        transclude: true,
        templateUrl:'assets/views/Introduce/top.html'
    }
});

//底部固定导航栏
app.directive("bottom",function(){
    return{
        restrict: 'EAC', //
        transclude: true,
        templateUrl:'assets/views/Introduce/bottom-List.html'
    }
});
