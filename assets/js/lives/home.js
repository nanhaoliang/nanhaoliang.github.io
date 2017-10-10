var app = angular.module('home', []);

app.run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 50;   
        // 在此处配置偏移量
}])

app.controller('homePage', function($scope,$interval,$location,$anchorScroll,$http,$window){
	
	$scope.weixinName = "微信姓名";
	$scope.phones = ""; //手机号
	
	//验证码倒计时
	$scope.canClick=false; 
    $scope.description = "验证码"; 
    var second=59;  
    var timerHandler; 
    
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
	
	//录播内容  图片 title 上传时间
	$scope.lulives = [];
	$scope.lubo = [];
	
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
	
//	$http({
//			method: 'GET',
//			url: 'http://www.comsplus.cn:86/'
//		}).then(function successCallback(response) {
//			console.log(response);
//		}, function errorCallback(response) {
//			// 请求失败执行代码
//			alert("刷新失败");
//	});

	
	$http({
			method: 'GET',
			url: 'https://v.polyv.net/uc/services/rest?method=getHotList&readtoken=1dfa53b2-ae76-4bfd-8e98-5fd4ed0dc291&pageNum=1&numPerPage=3'
		}).then(function successCallback(response) {
			$scope.lulives = response.data.data;
			$scope.lubo = $scope.lulives;
			console.log($scope.lubo);
		}, function errorCallback(response) {
			// 请求失败执行代码
			alert("刷新失败");
	});
	
	//查看回放
	$scope.vidoh = function(u,orderServiceId){
		console.log(orderServiceId);
		window.location.href = "assets/view/lives/recordingHome.html?vid="+u.vid;
	}
	
	//录播列表页
	$scope.luxiang = function(){
		window.location.href = "assets/view/recording.html";
	}
	
	//登录验证码
	$scope.getTestCode = function(){
		var mobile = $scope.phones;
		 if(mobile.length==0){  
           alert('请输入手机号码！');  
           document.form1.mobile.focus();  
           return false;  
	     }      
        if(mobile.length!=11){  
            alert('请输入有效的手机号码！');  
            document.form1.mobile.focus();  
            return false;  
	     }  
        var myreg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,2,3,5-9]))\d{8}$/  
        if(!myreg.test(mobile))  
        {  
            alert('请输入有效的手机号码！');  
            document.form1.mobile.focus();  
            return false;  
        }  
        
        timerHandler =$interval(function(){  
            if(second<=0){  
                $interval.cancel(timerHandler);    //当执行的时间59s,结束时，取消定时器 ，cancle方法取消   
                second=59;  
                $scope.description="验证码";  
                $scope.canClick=false;    //因为 ng-disabled属于布尔值，设置按钮可以点击，可点击发送  
            }else{  
                $scope.description=second+"s";  
                second--;  
                $scope.canClick=true;  
            }  
        },1000)   //每一秒执行一次$interval定时器方法  
    };  
	
	//注册手机号
	$scope.common = function(){
		//关闭模态框
		if($scope.phones != ""){
			$("#my-confirm").modal('close');
		}
	}
	
	// 实时问答 弹出框
	$scope.wenda = function(){
		alert("--敬请期待--");
	}
	
	// 锚点
	$scope.mao1 = function(){
		$location.hash('about');
        $anchorScroll();
	}
	$scope.mao2 = function(){
		$location.hash('xueshu');
        $anchorScroll();
	}
	$scope.mao3 = function(){
		$location.hash('zixun');
        $anchorScroll();
	}
})
