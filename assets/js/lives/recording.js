var app = angular.module('records', []);
app.controller('myRecord', function($scope,$http,$window,$location){
	//直播列表
	$scope.liveList = [];
	$scope.lives1 = [];
	//顶部搜索框
	$scope.searc;hs = "";
	
	// 初始化查询全部接口
	$http({
		method: 'GET',
		url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1'
	}).then(function successCallback(response) {
		$scope.liveList = response.data.data;
		$scope.lives1 = $scope.liveList;
		console.log($scope.lives1)
	}, function errorCallback(response) {
		// 请求失败执行代码
		alert("刷新失败");
	});
	
//	post请求
//	$http.post('https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1',
//	{'Content-Type':'application/x-www-form-urlencoded'})
//	.success(function(data){
//		$scope.liveList = data.data;
//		$scope.lives1 = $scope.liveList;
//	});

		
	//全部
	$scope.alls = function(){
		$http({
			method: 'GET',
			url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1'
		}).then(function successCallback(response) {
			$scope.liveList = response.data.data;
			$scope.lives1 = $scope.liveList;
			console.log($scope.lives1)
		}, function errorCallback(response) {
			// 请求失败执行代码
			alert("刷新失败");
		});
	}
		
	//付费
	$scope.pay = function(){
		$http({
			method: 'GET',
			url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&catatree=1,1507344254119'
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
	$scope.free = function(){
		$http({
			method: 'GET',
			url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&catatree=1,1507344560956'
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
		var orderServiceId = "qqq";
		window.location.href = "../view/lives/recordingHome.html?vid=" + u.vid;
	}
	
    //搜索视频 
    $scope.clickEvent = function() {
    	var searc = $scope.searchs;
        $http({
			method: 'GET',
			url: 'https://v.polyv.net/uc/services/rest?method=searchByTitle&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&keyword='+searc+'&numPerPage=1'
		}).then(function successCallback(response) {
			$scope.liveList = response.data.data;
			$scope.lives1 = $scope.liveList;
			console.log($scope.lives1);
		}, function errorCallback(response) {
			// 请求失败执行代码
			alert("刷新失败");
		});
    }
    
    $scope.enterEvent = function(e) {
        var keycode = window.event?e.keyCode:e.which;
        if(keycode==13){
            $scope.clickEvent();
        }
    }
})

// 直播列表页
var app = angular.module('vidos', []);
app.controller('myVidos', function($scope,$http,$window,$location){
	var orderServiceId = parseInt($location.search().vid); 
})