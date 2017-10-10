var app = angular.module('lives', []);
app.controller('myLives', function($scope,$http,$window,$location){
	$scope.liveList = []
	$scope.lives1 = $scope.liveList;
	
	
	//点击加载跟多判断点的什么 0 全部  1付费 2限免 3最热
	$scope.fenlei = "0";
	//记载更多条数
	$scope.count = 10;
	
	
	// 初始化查询全部接口
//	$http({
//		method: 'GET',
//		u;rl: ''
//	}).then(function successCallback(response) {
//		$scope.liveList = response.data.data;
//		$scope.lives1 = $scope.liveList;
//		console.log($scope.lives1)
//	}, function errorCallback(response) {
//		// 请求失败执行代码
//		alert("刷新失败");
//	});
	
	//全部
	$scope.alls = function(){
		$scope.fenlei = "0";
		alert($scope.fenlei);
//		$http({
//			method: 'GET',
//			url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=10'
//		}).then(function successCallback(response) {
//			$scope.liveList = response.data.data;
//			$scope.lives1 = $scope.liveList;
//			console.log($scope.lives1)
//		}, function errorCallback(response) {
//			// 请求失败执行代码
//			alert("刷新失败");
//		});
	}
	
	//付费
	$scope.pay = function(){
//		var lives = $scope.liveList;
//		$scope.lives1 = [];
//		for (var a = 0; a < lives.length; a++) {
//			if(lives[a].priceId == "000"){
//				$scope.lives1.push(lives[a]);
//			}
//		}
		$scope.fenlei = "1";
		alert(1);
//		$http({
//			method: 'GET',
//			url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=10&catatree=1,1507344254119'
//		}).then(function successCallback(response) {
//			$scope.liveList = response.data.data;
//			$scope.lives1 = $scope.liveList;
//			console.log($scope.lives1)
//		}, function errorCallback(response) {
//			// 请求失败执行代码
//			alert("刷新失败");
//		});
		
	}
	
	//免费
	$scope.free = function(){
		$scope.fenlei = "2";
		alert(2)
//		$http({
//			method: 'GET',
//			url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=10&catatree=1,1507344560956'
//		}).then(function successCallback(response) {
//			$scope.liveList = response.data.data;
//			$scope.lives1 = $scope.liveList;
//			console.log($scope.lives1)
//		}, function errorCallback(response) {
//			// 请求失败执行代码
//			alert("刷新失败");
//		});
	}
	
	//最热
	$scope.hottest = function(){
		$scope.fenlei = "3";
		alert(3)
//		$http({
//			method: 'GET',
//			url: 'https://v.polyv.net/uc/services/rest?method=getHotList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=10'
//		}).then(function successCallback(response) {
//			$scope.liveList = response.data.data;
//			$scope.lives1 = $scope.liveList;
//			console.log($scope.lives1)
//		}, function errorCallback(response) {
//			// 请求失败执行代码
//			alert("刷新失败");
//		});
	}
	
	//加载更多
	$scope.gengdu = function(){
		var x=document.getElementById("a").innerHTML;
		x=parseInt(x)+10;
		document.getElementById("a").innerHTML=x;
		alert(x)
		$("#jiads").addClass("am-icon-spin");
		$("#butt").addClass("am-disabled");
		if($scope.fenlei == "0"){
			var urls = ''
		}else if($scope.fenlei == "1"){
			var urls = ''
		}else if($scope.fenlei == "2"){
			var urls = ''
		}else if($scope.fenlei == "3"){
			var urls = ''
		}
		$http({
			method: 'GET',
			url: urls
		}).then(function successCallback(response) {
			$scope.liveList = response.data.data;
			$scope.lives1 = $scope.liveList;
			$("#jiads").removeClass("am-icon-spin");
			$("#butt").removeClass("am-disabled");
		}, function errorCallback(response) {
			// 请求失败执行代码
			alert("刷新失败");
		});
	}
	
	//顶部刷新
	$scope.shux = function(){
		$("#shaux").addClass("am-icon-spin");
		$http({
				method: 'GET',
				url: ''
			}).then(function successCallback(response) {
				$scope.liveList = response.data.data;
				$scope.lives1 = $scope.liveList;
				var timeout = setTimeout(function(){
					$("#shaux").removeClass("am-icon-spin");
				},2000);
				location.reload();  //刷新页面
			}, function errorCallback(response) {
				// 请求失败执行代码
				alert("刷新失败");
		});
	}
	
	//查看直播
	$scope.vidoh = function(u,orderServiceId){
		console.log(orderServiceId);
		u.vid = "99863";
		window.location.href = "../view/lives/liveHome.html?vid=" + u.vid;
	}
	
	// 弹出带搜索按钮的键盘
	$('#myinput').bind('search', function () {
		$scope.clickEvent();
    });
    //搜索视频
  	$scope.clickEvent = function() {
		var searc = $scope.searchs;
//		if(searc == ""){
//			$scope.alls();
//		}
//	  	$http({
//				method: 'GET',
//				url: 'https://v.polyv.net/uc/services/rest?method=searchByTitle&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&keyword='+searc+'&numPerPage=1'
//			}).then(function successCallback(response) {
//				$scope.liveList = response.data.data;
//				$scope.lives1 = $scope.liveList;
//				console.log($scope.lives1);
//			}, function errorCallback(response) {
//				//请求失败执行代码
//				alert("刷新失败");
//			});
 	}
    
})

// 直播列表页
var app = angular.module('livebcs', []);

app.config(['$locationProvider', function ($locationProvider) {
	$locationProvider.html5Mode(true);
}]);

app.controller('myLivebcs', ['$scope','$location','$http', function($scope,$location,$http){
	// 视频Id
	$scope.luId = "";
	
	//获取url中的值
	console.log($location.search().vid); 
	$scope.luId = $location.search().vid;
	
	//给视频id赋值
//	document.getElementsByName('lubo')[0].id = $scope.luId;
	var vid = $scope.luId
	var player = polyvObject('#player').livePlayer({
	    'width':'100%',
	    'height':'300',
	    'flashvars':{"is_barrage":"on"},
	    'uid':'e3wx706i3v',
	    'vid':vid,
	    'hideBar':true,
	    'param1':'1505212490999',
    	'param2':'广州观众/27915'
	});
	player.s2j_onInitOver = function( ){
		//点击按钮，开始播放
	}	
	
	// 获取直播的单个信息
//	$http({
//			method: 'GET',
//			url: ''
//		}).then(function successCallback(response) {
//			$scope.xiangq = response.data.data[0];
//			console.log($scope.xiangq)
//		}, function errorCallback(response) {
//			//请求失败执行代码
//			alert("刷新失败");
//	});
	
}]);