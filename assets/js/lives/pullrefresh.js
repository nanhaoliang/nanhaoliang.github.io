var app = angular.module('pullregr', []);

app.controller('myPullregr', function($scope,$http,$window,$location){
	
	//直播列表
	$scope.liveList = [
		{
			vid:"asfasdfdfasdfasdfdas",
			title:"11",
			title1:"111111111111",
			img:"http://mpic.tiankong.com/bc6/1d5/bc61d5b192cf7fef05bf80e570446a48/640.jpg",
			userName:"nihao",
			place:"1111",
			price:"22.00",
			signUp:"100",
			ptime:"10:88"
		}
	];
	$scope.lives1 = $scope.liveList ;
	
	//录播
	$scope.luboList = [
		{
			vid:"asfasdfdfasdfasdfdas",
			title:"11",
			title1:"111111111111",
			first_image:"http://mpic.tiankong.com/bc6/1d5/bc61d5b192cf7fef05bf80e570446a48/640.jpg",
			userName:"nihao",
			place:"1111",
			price:"22.00",
			signUp:"100",
			ptime:"10:88"
		}
	];
	$scope.lubo1 = $scope.luboList
	
	//顶部搜索框
	$scope.searchs = "";
	
	//加载更多条数
	$scope.count = 10;
	
	//点击加载跟多判断点的什么 0 全部  1录播 2直播
	$scope.fenlei = "0";
	
	
	//全部
	$scope.alls = function(){
		$scope.fenlei = "0";
		$http({
			method: 'GET',
			url: ''
		}).then(function successCallback(response) {
			$scope.liveList = response.data.data;
			$scope.lives1 = $scope.liveList;
			console.log($scope.lives1)
		}, function errorCallback(response) {
			// 请求失败执行代码
			alert("刷新失败");
		});
	}
	
	//直播
	$scope.live = function(){
		$scope.fenlei = "1";
		$http({
			method: 'GET',
			url: ''
		}).then(function successCallback(response) {
			$scope.liveList = response.data.data;
			$scope.lives1 = $scope.liveList;
			console.log($scope.lives1)
		}, function errorCallback(response) {
			// 请求失败执行代码
			alert("刷新失败");
		});
	}
	
	//免费
	$scope.lubo = function(){
		$scope.fenlei = "2";
		$http({
			method: 'GET',
			url: ''
		}).then(function successCallback(response) {
			$scope.liveList = response.data.data;
			$scope.lives1 = $scope.liveList;
			console.log($scope.lives1)
		}, function errorCallback(response) {
			// 请求失败执行代码
			alert("刷新失败");
		});
	}
	
	//查看回放
	$scope.vidoh = function(u,orderServiceId){
		console.log(orderServiceId);
		window.location.href = "../view/lives/recordingHome.html?vid=" + u.vid;
	}
	
	//顶部刷新
	$scope.shux = function(){
		$("#shaux").addClass("am-icon-spin");
//		$http({
//				method: 'GET',
//				url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=10'
//			}).then(function successCallback(response) {
//				$scope.liveList = response.data.data;
//				$scope.lives1 = $scope.liveList;
//				var timeout = setTimeout(function(){
//					$("#shaux").removeClass("am-icon-spin");
//				},2000);
//				location.reload();
//			}, function errorCallback(response) {
//				// 请求失败执行代码
//				alert("刷新失败");
//		});
	}
	
	
	//加载更多
	$scope.gengdu = function(){
		var x=document.getElementById("a").innerHTML;
		x=parseInt(x)+10;
		document.getElementById("a").innerHTML=x;
		$("#jiads").addClass("am-icon-spin");
		$("#butt").addClass("am-disabled");
		if($scope.fenlei == "0"){
			var urls = ''
		}else if($scope.fenlei == "1"){
			var urls = ''
		}else if($scope.fenlei == "2"){
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
	
	// 弹出带搜索按钮的键盘
	$('#myinput').bind('search', function () {
		alert(1111);
    });
    
	//搜索视频
//	$scope.clickEvent = function() {
//		var searc = $scope.searchs;
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
// 	}
  	
	
})