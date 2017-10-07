var app = angular.module('records', []);
app.controller('myRecord', function($scope,$http,$window){
	
	$scope.shows = true;
	
	$scope.liveList = [];
	$scope.lives1 = [];
	

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

//	myUrl = 'http://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&jsonp=a&pageNum=1';
//
//	$http.jsonp(myUrl).success(
//	　　function(data){
//	　　　　alert(data);
//	　　}
//	);
	//lianghaonan
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
			url: 'http://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1'
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
			url: 'http://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&catatree=1,1507344254119'
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
			url: 'http://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&catatree=1,1507344560956'
		}).then(function successCallback(response) {
			$scope.liveList = response.data.data;
			$scope.lives1 = $scope.liveList;
			console.log($scope.lives1)
		}, function errorCallback(response) {
			// 请求失败执行代码
			alert("刷新失败");
		});
	}
	
    //传递参数
    
})