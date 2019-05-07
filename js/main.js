var page = 0;
var wid3 = 0;
var interval3 = setInterval(ani3, 3000);

function ani3() {
	wid3 -= 100; // wid = wid - 100;
	$("#slides3").stop().animate({
		"left": wid3 + "%"
	}, 300, function () {
		page = Math.abs(wid3 / 100);
		if (wid3 == -300) {
			wid3 = 0;
			page = 0;
			$(this).css({
				"left": 0
			});
		}
		$(".pager > li").css({
			"color": "#bbb"
		});
		$(".pager > li").eq(page).css({
			"color": "#0068d6"
		});
	});
}

// 
var page2 = 0;
var wid4 = 0;
var interval4 = setInterval(ani4, 3000);

function ani4() {
	wid4 -= 100; // wid = wid - 100;
	$("#slides4").stop().animate({
		"left": wid4 + "%"
	}, "slow", function () {
		page2 = Math.abs(wid4 / 100);
		if (wid4 == -300) {
			wid4 = 0;
			page2 = 0;
			$(this).css({
				"left": 0
			},);
		}
		$(".pager4 > li").css({
			"color": "#bbb"
		});
		$(".pager4 > li").eq(page2).css({
			"color": "#0068d6"
		});
	});
}
$("#pager4 > li").click(function () {
	clearInterval(interval4);
	var h = $(this).index();
	wid4 = (h * -100) + 100;
	ani4();
});

$(".nav_ctgr > li").mouseover(function () {
	$(this).addClass("nav_bg");
	$(this).find(".sub_ctgr").show();
	var hei = 150 + $(this).find(".sub_ctgr").outerHeight();
	$(this).css({
		"height": hei + "px"
	});
	$(this).children("p").css({
		"color": "#fff"
	});
});
$(".nav_ctgr > li").mouseleave(function () {
	$(this).removeClass("nav_bg");
	$(this).find(".sub_ctgr").hide();
	$(this).css({
		"height": "100px"
	});
	$(this).children("p").css({
		"color": "#333"
	});
});

$(".nav_lang").click(function () {
	$(".nav_lang").children(".lang_list").toggle();
});


$(".hambar > img").click(function () {
	$(".bar_hover").slideToggle();
	if ($(this).attr("src") == "../img/btn_close.png") $(this).attr('src', '../img/btn_total.png');
	else $(this).attr('src', '../img/btn_close.png');
});

$("#p1_img_pc").mouseover(function () {
	$(".go").stop().slideDown("fast");
});
$("#p1_img_pc").mouseleave(function () {
	$(".go").stop().slideUp("fast");
});

$(".p1-2 #p1_img_pc").mouseover(function () {
	$(".go2").stop().slideDown("fast");
});
$(".p1-2 #p1_img_pc").mouseleave(function () {
	$(".go2").stop().slideUp("fast");
});

$(".p1-3 #p1_img_pc").mouseover(function () {
	$(".go3").stop().slideDown("fast");
});
$(".p1-3 #p1_img_pc").mouseleave(function () {
	$(".go3").stop().slideUp("fast");
});

$(".qnabts > button:first-child").click(function(){
	$(".sel_qna1").show();
	$(".sel_qna2").hide();
	$(".FAQimg").children(".faqimg_p").attr('src', '../img/inquiry02_bg.png');
	$(".FAQimg").children(".faqimg_m").attr('src', '../img/inquiry02_bg_m.png');
	$(".FAQcmt").children("h4").html('제품/견적문의 FAQ');
	$(this).css({"background-color":"#212f45","color":"white"});
	$(".qnabt2").css({"background-color":"white","color":"black"});
	$(".qnabt1 img").attr('src','../img/arw_down_w.png');
	$(".qnabt2 img").attr('src','../img/arw_down_g.png');
});

$(".qnabts > button:last-child").click(function(){
	$(".sel_qna2").show();
	$(".sel_qna1").hide();
	$(".FAQimg").children(".faqimg_p").attr('src', '../img/inquiry01_bg.png');
	$(".FAQimg").children(".faqimg_m").attr('src', '../img/inquiry01_bg_m.png');
	$(".FAQcmt").children("h4").html('채용문의 FAQ');
	$(this).css({"background-color":"#212f45","color":"white"});
	$(".qnabt1").css({"background-color":"white","color":"black"});
	$(".qnabt2 img").attr('src','../img/arw_down_w.png');
	$(".qnabt1 img").attr('src','../img/arw_down_g.png');
});


var interval = setInterval(prdAni, 2000);
var k = -1;
var pos = 0;
var gap = 0;
var prdWid = 234;
function prdAni() {
	gap = prdWid*k;
	pos = Number($(".pro_menus").css("left").replace("px", ""));
	var tar = pos + gap;
	$(".pro_menus").stop().animate({"left": tar+"px"}, 500, function(){
		pos = Number($(this).css("left").replace("px", ""));
		if(pos <= -prdWid * 3) {
			clearInterval(interval);
		}
	});
}

$("#arrow_l").click(function(){
	clearInterval(interval);
	if(pos < 0) {
		k = 1;
		prdAni();
	}
});
$("#arrow_r").click(function(){
	clearInterval(interval);
	if(pos > -prdWid * 3) {
		k = -1;
		prdAni();
	}
});

