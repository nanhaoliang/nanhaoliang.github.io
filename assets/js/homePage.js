
//初始化操作
$(function() {
	// 显示更多按钮操作
	$("[name='nei3']").hide();
	$("[name='nei3']:first").show();
	$("[name='nei3']:first").removeAttr("name");
	$("#texths").text("显示更多 ∨");
	
	// 初始化模态框
    $('#my-confirm').modal({
      relatedTarget: this,
      closeViaDimmer: false,
    });
    $('#my-confirm').find('.am-modal-btn').off('click.close.modal.amui');
});

// 显示更多按钮操作
var job = 0;
function ttt() {
	if(job == 0) {
		$("[name='nei3']").show(800);
		$("#texths").text("收起内容 ∧");
		job = 1;
	} else {
		$("[name='nei3']").hide(800);
		$("#texths").text("显示更多 ∨");
		job = 0;
	}
}

// JavaScript Document 文字滚动
function b() {
	t = parseInt(x.css('top'));
	y.css('top', '19px');
	x.animate({
		top: t - 19 + 'px'
	}, 'slow'); //19为每个li的高度
	if(Math.abs(t) == h - 19) { //19为每个li的高度
		y.animate({
			top: '0px'
		}, 'slow');
		z = x;
		x = y;
		y = z;
	}
	setTimeout(b, 3000); //滚动间隔时间 现在是3秒
}
$(document).ready(function() {
	$('.swap').html($('.news_li').html());
	x = $('.news_li');
	y = $('.swap');
	h = $('.news_li li').length * 19; //19为每个li的高度
	setTimeout(b, 3000); //滚动间隔时间 现在是3秒

})

// 页面完全加载完成之后执行的方法 loading加载提示框
window.onload = function() {
	$("#loader-wrapper").show();
	setTimeout(function() {
		$("#loader-wrapper").hide();
	}, 1000);
}

