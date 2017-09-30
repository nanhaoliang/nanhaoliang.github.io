var app = angular.module('records', []);
app.controller('myRecord', function($scope){
	
	$scope.shows = true;
	
	$scope.liveList = [
		{
			id:"111111111111",
			title:"录播",
			title1:"2017年会全程回放门票",
			img:"http://mpic.tiankong.com/caf/a19/cafa19387b3321be67dfb9451051de70/640.jpg",
			userId:"11111111",
			userName:"奥巴牛",
			place:"临沂市兰山区人民医院",
			price:"199.00",
			signUpId:"000",
			signUp:"122",
			kaiTime:"09-31 18:61-18:62"
		},
		{
			id:"2222222222222",
			title:"录播",
			title1:"2017年会全程回放门票2",
			img:"http://mpic.tiankong.com/caf/a19/cafa19387b3321be67dfb9451051de70/640.jpg",
			userId:"2222222222",
			userName:"奥巴牛",
			place:"临沂市兰山区人民医院",
			price:"00.00",
			signUpId:"001",
			signUp:"222",
			kaiTime:"09-31 18:61-18:62"
		},
		{
			id:"2222222222222",
			title:"录播",
			title1:"2017年会全程回放门票2",
			img:"http://mpic.tiankong.com/caf/a19/cafa19387b3321be67dfb9451051de70/640.jpg",
			userId:"2222222222",
			userName:"奥巴牛",
			place:"临沂市兰山区人民医院",
			price:"00.00",
			signUpId:"001",
			signUp:"222",
			kaiTime:"09-31 18:61-18:62"
		},
	]
	$scope.lives1 = $scope.liveList;
	
	// 全部
	$scope.alls = function(){
		$scope.lives1 = $scope.liveList;
	}
	
	//付费
	$scope.pay = function(){
		var lives = $scope.liveList;
		$scope.lives1 = [];
		for (var a = 0; a < lives.length; a++) {
			if(lives[a].signUpId == "000"){
				$scope.lives1.push(lives[a]);
			}
		}
	}
	
	//限免
	$scope.free = function(){
		var lives = $scope.liveList;
		$scope.lives1 = [];
		for (var a = 0; a < lives.length; a++) {
			if(lives[a].signUpId == "001"){
				$scope.lives1.push(lives[a]);
			}
		}
	}
})