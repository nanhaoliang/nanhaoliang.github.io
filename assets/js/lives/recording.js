var app = angular.module('records', []);
app.controller('myRecord', function($scope,$http,$window,$location){
	//直播列表
	$scope.liveList = [];
	$scope.lives1 = [];
	//顶部搜索框
	$scope.searchs = "";
	//记载更多条数
	$scope.count = 10;
	//点击加载跟多判断点的什么 0 全部  1付费 2限免
	$scope.fenlei = "0";
	
	// 初始化查询全部接口
	$http({
		method: 'GET',
		url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=10'
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
		$scope.fenlei = "0";
		$http({
			method: 'GET',
			url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=10'
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
		$scope.fenlei = "1";
		$http({
			method: 'GET',
			url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=10&catatree=1,1507344254119'
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
		$scope.fenlei = "2";
		$http({
			method: 'GET',
			url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=10&catatree=1,1507344560956'
		}).then(function successCallback(response) {
			$scope.liveList = response.data.data;
			$scope.lives1 = $scope.liveList;
			console.log($scope.lives1)
		}, function errorCallback(response) {
			// 请求失败执行代码
			alert("刷新失败");
		});
	}
	
	//加载更多
	$scope.gengdu = function(){
		var x=document.getElementById("a").innerHTML;
		x=parseInt(x)+10;
		document.getElementById("a").innerHTML=x;
		$("#jiads").addClass("am-icon-spin");
		$("#butt").addClass("am-disabled");
		if($scope.fenlei == "0"){
			var urls = 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage='+x+''
		}else if($scope.fenlei == "1"){
			var urls = 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage='+x+'&catatree=1,1507344254119'
		}else if($scope.fenlei == "2"){
			var urls = 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage='+x+'&catatree=1,1507344560956'
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
				url: 'https://v.polyv.net/uc/services/rest?method=getNewList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=10'
			}).then(function successCallback(response) {
				$scope.liveList = response.data.data;
				$scope.lives1 = $scope.liveList;
				var timeout = setTimeout(function(){
					$("#shaux").removeClass("am-icon-spin");
				},2000);
				location.reload();
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
	
	// 弹出带搜索按钮的键盘
	$('#myinput').bind('search', function () {
		$scope.clickEvent();
    });
    
	//搜索视频
  	$scope.clickEvent = function() {
  		var searc = $scope.searchs;
  		if(searc == ""){
  			$scope.alls();
  		}
	  	$http({
				method: 'GET',
				url: 'https://v.polyv.net/uc/services/rest?method=searchByTitle&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&keyword='+searc+'&numPerPage=1'
			}).then(function successCallback(response) {
				$scope.liveList = response.data.data;
				$scope.lives1 = $scope.liveList;
				console.log($scope.lives1);
			}, function errorCallback(response) {
				//请求失败执行代码
				alert("刷新失败");
			});
 	}
  	
})

// 直播列表页
var app = angular.module('vidos', []);

app.config(['$locationProvider', function ($locationProvider) {
	$locationProvider.html5Mode(true);
}]);

app.controller('myVidos', ['$scope','$location','$http', function($scope,$location,$http){
	// 视频Id
	$scope.luId = "";
	// 视频详情
	$scope.xiangq = {};
	//获取url中的值
	console.log($location.search().vid); 
	$scope.luId = $location.search().vid;
	
	//给视频id赋值
	document.getElementsByName('lubo')[0].id = $scope.luId;
	var vid = $scope.luId
	var player = polyvObject('#'+vid+'').videoPlayer({
	    'width':'100%',
	    'height':'300',
	    'vid' : vid,
	    'flashvars' : {"setScreen":"100"}
	});
	// 获取视频的单个信息
	$http({
			method: 'GET',
			url: 'http://v.polyv.net/uc/services/rest?method=getById&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&vid='+vid+''
		}).then(function successCallback(response) {
			$scope.xiangq = response.data.data[0];
			console.log($scope.xiangq)
		}, function errorCallback(response) {
			//请求失败执行代码
			alert("刷新失败");
	});
	
	$scope.zuo = function(){
		alert(111);
	}
}]);