$(function(){
	$("#zuozhe").show();
	$("#keCheng").hide();
	$("#zuozhe1").text("收起内容");
	$("#keCheng1").text("显示内容");
	
});

// 作者介绍 显示隐藏
var job = 0;
function zuo() {
	if(job == 0) {
		$("#zuozhe").hide(800);
		$("#keCheng").show(800);
		$("#zuozhe1").text("显示内容 ");
		$("#keCheng1").text("收起内容");
		job = 1;
	} else {
		$("#zuozhe").show(800);
		$("#keCheng").hide(800);
		$("#zuozhe1").text("收起内容");
		$("#keCheng1").text("显示内容");
		job = 0;
	}
}
//课文详情 显示隐藏
var jpb = 0;
function kew() {
	if(jpb == 0) {
		$("#keCheng").show(800);
		$("#zuozhe").hide(800);
		$("#keCheng1").text("收起内容");
		$("#zuozhe1").text("显示内容 ");
		jpb = 1;
	} else {
		$("#keCheng").hide(800);
		$("#zuozhe").show(800);
		$("#keCheng1").text("显示内容");
		$("#zuozhe1").text("收起内容 ");
		jpb = 0;
	}
}
