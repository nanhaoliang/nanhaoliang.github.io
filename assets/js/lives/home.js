var app = angular.module('home', []);
app.controller('homePage', function($scope){
	$scope.weixinName = "微信姓名";
	
	// 轮播图
	$scope.lunboImg = [
		{
			img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
			imgTitle:"11图片标题 标题标题"
		},
		{
			img:"http://s.amazeui.org/media/i/demos/bing-2.jpg",
			imgTitle:"22图片标题 标题标题"
		},
		{
			img:"http://s.amazeui.org/media/i/demos/bing-3.jpg",
			imgTitle:"33图片标题 标题标题"
		},
		{
			img:"http://s.amazeui.org/media/i/demos/bing-4.jpg",
			imgTitle:"44图片标题 标题标题"
		}
	]
	
	// 轮播消息
	$scope.lunNews = [
		{
			links:"",
			message:"11111111111111"
		},
		{
			links:"",
			message:"22222222222222"
		},
		{
			links:"",
			message:"33333333333333"
		}
	]
	
	//直播内容
	$scope.zhibo = [
		{
			zhImg:"http://mpic.tiankong.com/077/708/0777089ad18a688eee7c756a506e5f4a/640.jpg",
			zhNei:"内容内容111111111",
			zhTime:"09-31 18:61~18:62"
		},
		{
			zhImg:"http://s.amazeui.org/media/i/demos/bing-2.jpg",
			zhNei:"内容内容22222222",
			zhTime:"09-31 18:61~18:62"
		},
		{
			zhImg:"http://s.amazeui.org/media/i/demos/bing-3.jpg",
			zhNei:"内容内容33333333",
			zhTime:"09-31 18:61~18:62"
		},
		{
			zhImg:"http://s.amazeui.org/media/i/demos/bing-4.jpg",
			zhNei:"内容内容4444444",
			zhTime:"09-31 18:61"
		}
	]
	
	//录播内容
	$scope.lubo = [
		{
			luImg:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
			luNei:"内容内容111111111",
			luTime:"09-31 18:61"
		},
		{
			luImg:"http://s.amazeui.org/media/i/demos/bing-2.jpg",
			luNei:"内容内容111111111",
			luTime:"09-31 18:61"
		},
		{
			luImg:"http://s.amazeui.org/media/i/demos/bing-3.jpg",
			luNei:"内容内容111111111",
			luTime:"09-31 18:61"
		}
	]
	
	//实时资讯
	$scope.information = [
		{
			ziTitle:"标题1111111111111111111",
			ziTime:"2017-09-26",
			ziZhai:"囧人囧事囧照，人在囧途，越囧越萌。标记《带你出发，陪我回家》"
		},
		{
			ziTitle:"标题1111111111111111111",
			ziTime:"2017-09-26",
			ziZhai:"你最喜欢的艺术作品，告诉大家它们的------名图画，色彩，交织，撞色"
		},
		{
			ziTitle:"标题1111111111111111111",
			ziTime:"2017-09-26",
			ziZhai:""
		}
	]
})