var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
    $BODY = $('body'),
    $MENU_TOGGLE = $('.menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $RIGHT_COL = $('.right_content'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');
function init_sidebar() {
	$SIDEBAR_MENU.find('a').on('click', function(ev) {
		var $li = $(this).parent();
		if ($li.is('.active')) {
			$li.removeClass('active active-sm');
			$('ul:first', $li).slideUp(200);
		} else {
			// prevent closing menu if we are on child menu
			if (!$li.parent().is('.child_menu')) {
				$SIDEBAR_MENU.find('li').removeClass('active active-sm');
				$SIDEBAR_MENU.find('li ul').slideUp(200);
			}else
			{
				if ( $BODY.is(".nav-sm") )
				{
					$SIDEBAR_MENU.find( "li" ).removeClass( "active active-sm" );
					$SIDEBAR_MENU.find( "li ul" ).slideUp(200);
				}
			}
			$li.addClass('active');

			$('ul:first', $li).slideDown(200);
		}
	});

	// toggle small or large menu 
	$MENU_TOGGLE.on('click', function() {
		if ($BODY.hasClass('nav-md')) {
			$SIDEBAR_MENU.find('li.active ul').hide();
			$SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
		} else {
			$SIDEBAR_MENU.find('li.active-sm ul').show();
			$SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
		}
		$BODY.toggleClass('nav-md nav-sm');
	});

	// check active menu
	$SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

	$SIDEBAR_MENU.find('a').filter(function () {
			return this.href == CURRENT_URL;
		}).parent('li').addClass('current-page').parents('ul').slideDown(function() {
		}).parent().addClass('active');
	
	// normalize content
	$RIGHT_COL.css("min-height", $(window).height() - $NAV_MENU.height() - $FOOTER.height() - 10);

};
// Sidebar


$(document).ready(function() {
	init_sidebar();
	
	if($BODY.outerWidth() > 1281){ 
		$("html").removeClass("mobile").addClass("web");
	} else if($BODY.outerWidth() > 768){ 
		$("html").removeClass("mobile").addClass("tablet");
	} else {
		$("html").removeClass("web").addClass("mobile");
	};

	// resize
	$(window).resize(function(){
		if($BODY.outerWidth() > 1281){ 
			$("html").removeClass("mobile tablet").addClass("web");
			
		} else if($BODY.outerWidth() > 768){ 
			$("html").removeClass("web mobile").addClass("tablet");
		} else {
			$("html").removeClass("web tablet").addClass("mobile");
		};
	});

	//footer
	$(".ft-site dl dt a").click(function(){
		$(this).parents("dt").next("dd").slideToggle(200);
		$(".ft-site dl dt a").not(this).parents("dt").next("dd").slideUp(200);
		return false;
	});
	

	$('.tb-check tbody tr').click(function() {
		$(this).toggleClass('checking').siblings().removeClass('checking');
	});
	$('.tb-check tbody tr a').click(function(e) {
		e.stopPropagation();
	});
	

	//datetimepicker
	$('.date').datetimepicker({
		viewMode: 'months',
		format: 'DD/MM/YYYY',
	});

	// scrollbar
	$(window).on("load",function(){
		$(".x-scroll").mCustomScrollbar({
			axis:"x",
			theme:"minimal-dark"
		});
		$(".y-scroll").mCustomScrollbar({
			axis:"xy",
			theme:"minimal-dark",
			scrollbarPosition: "outside",
			autoHideScrollbar : false,
			callbacks:{
				whileScrolling:function(){ 
					$(".y-scroll thead").css({
						'transform': 'translate(0, ' + Math.abs(this.mcs.top) + 'px)'
					});
				}
			}
		});
		$(".xy-scroll").mCustomScrollbar({
			axis:"xy",
			theme:"minimal-dark"
		});
	});
});

function tog(v) {
    return v ? 'addClass' : 'removeClass';
}
$(document).on('input', '.clearable', function() {
		$(this)[tog(this.value)]('on');
	}).on('mousemove', '.on', function(e) {
		$(this)[tog(this.offsetWidth - 18 < e.clientX - this.getBoundingClientRect().left)]('onX');
	}).on('touchstart click', '.onX', function(ev) {
		ev.preventDefault();
		$(this).removeClass('on onX').val('').change();
});