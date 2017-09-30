var app = angular.module('lives', []);
app.controller('myLives', function($scope){
	$scope.liveList = [
		{
			id:"111111111111",
			title:"合集",
			title1:"2017年会全程回放门票",
			img:"http://mpic.tiankong.com/077/708/0777089ad18a688eee7c756a506e5f4a/640.jpg",
			userId:"11111111",
			userName:"haonanLiang",
			place:"临沂市兰山区人民医院",
			price:"199.00",
			priceId:"000",
			signUp:"122",
		},
		{
			id:"2222222222222",
			title:"合集2",
			title1:"2017年会全程回放门票2",
			img:"http://mpic.tiankong.com/077/708/0777089ad18a688eee7c756a506e5f4a/640.jpg",
			userId:"2222222222",
			userName:"haonanLiang2",
			place:"临沂市兰山区人民医院",
			price:"00.00",
			priceId:"001",
			signUp:"222",
		},
		{
			id:"2222222222222",
			title:"合集2",
			title1:"2017年会全程回放门票2",
			img:"http://mpic.tiankong.com/077/708/0777089ad18a688eee7c756a506e5f4a/640.jpg",
			userId:"2222222222",
			userName:"haonanLiang2",
			place:"临沂市兰山区人民医院",
			price:"299.00",
			priceId:"000",
			signUp:"222",
		},
	]
	
	$scope.lives1 = $scope.liveList;
	
	// 全部
	$scope.alls = function(){
		$scope.lives1 = [];
		$scope.lives1 = $scope.liveList;
	}
	
	//付费
	$scope.pay = function(){
		var lives = $scope.liveList;
		$scope.lives1 = [];
		for (var a = 0; a < lives.length; a++) {
			if(lives[a].priceId == "000"){
				$scope.lives1.push(lives[a]);
			}
		}
	}
	
	//限免
	$scope.free = function(){
		var lives = $scope.liveList;
		$scope.lives1 = [];
		for (var a = 0; a < lives.length; a++) {
			if(lives[a].priceId == "001"){
				$scope.lives1.push(lives[a]);
			}
		}
	}
})