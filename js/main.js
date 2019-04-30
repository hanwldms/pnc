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
$("#pager3 > li").click(function () {
	clearInterval(interval3);
	var k = $(this).index();
	wid3 = (k * -100) + 100;
	ani3();
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

$(".p1-1").mouseover(function () {
	$(".go").stop().slideDown("fast");
});
$(".p1-1").mouseleave(function () {
	$(".go").stop().slideUp("fast");
});

$(".p1-2").mouseover(function () {
	$(".go2").stop().slideDown("fast");
});
$(".p1-2").mouseleave(function () {
	$(".go2").stop().slideUp("fast");
});

$(".p1-3").mouseover(function () {
	$(".go3").stop().slideDown("fast");
});
$(".p1-3").mouseleave(function () {
	$(".go3").stop().slideUp("fast");
});

$(".qnabts > button:first-child").click(function(){
	$(".select_qnabt1").show();
	$(".select_qnabt2").hide();
	$(".FAQimg").children("img").attr('src', '../img/inquiry02_bg.png');
	$(".FAQcmt").children("h4").html('제품/견적문의 FAQ');
});

$(".qnabts > button:last-child").click(function(){
	$(".select_qnabt2").show();
	$(".select_qnabt1").hide();
	$(".FAQimg").children("img").attr('src', '../img/inquiry01_bg.png');
	$(".FAQcmt").children("h4").html('채용문의 FAQ');
});
