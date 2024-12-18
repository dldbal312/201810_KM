/*! device.js 0.1.55 */
(function(){var a,b,c,d,e,f,g,h,i,j=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};window.device={},b=window.document.documentElement,i=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return c("iphone")},device.ipod=function(){return c("ipod")},device.ipad=function(){return c("ipad")},device.android=function(){return c("android")},device.androidPhone=function(){return device.android()&&c("mobile")},device.androidTablet=function(){return device.android()&&!c("mobile")},device.blackberry=function(){return c("blackberry")||c("bb10")||c("rim")},device.blackberryPhone=function(){return device.blackberry()&&!c("tablet")},device.blackberryTablet=function(){return device.blackberry()&&c("tablet")},device.windows=function(){return c("windows")},device.windowsPhone=function(){return device.windows()&&c("phone")},device.windowsTablet=function(){return device.windows()&&c("touch")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},c=function(a){return-1!==i.indexOf(a)},e=function(a){var c;return c=new RegExp(a,"i"),b.className.match(c)},a=function(a){return e(a)?void 0:b.className+=" "+a},g=function(a){return e(a)?b.className=b.className.replace(a,""):void 0},device.ios()?device.ipad()?a("ios ipad tablet"):device.iphone()?a("ios iphone mobile"):device.ipod()&&a("ios ipod mobile"):device.android()?device.androidTablet()?a("android tablet"):a("android mobile"):device.blackberry()?device.blackberryTablet()?a("blackberry tablet"):a("blackberry mobile"):device.windows()?device.windowsTablet()?a("windows tablet"):device.windowsPhone()?a("windows mobile"):a("desktop"):a("desktop"),d=function(){return device.landscape()?(g("portrait"),a("landscape")):(g("landscape"),a("portrait"))},h=j.call(window,"onorientationchange")>=0,f=h?"orientationchange":"resize",window.addEventListener?window.addEventListener(f,d,!1):window.attachEvent?window.attachEvent(f,d):window[f]=d,d()}).call(this);

// jQuery Mobile Swipe Event
(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});


var ACTIVE_TOP_MENU = null;
var ACTIVE_MENU_LINK = null;
function init_sidebar() {
	var currentPath = window.location.pathname;
	var _activeLink = ACTIVE_MENU_LINK = $('.nav-md ul.side-menu a[href="' + currentPath + '"]');
	var _activeTopMenu = ACTIVE_TOP_MENU = _activeLink.parents('li.parent_menu');
	
	activateMenu(_activeTopMenu, _activeLink);

	// normalize content height
	$('.right_content').css("min-height", $(window).height() - $('.nav_menu').height() - $('footer').height() - 10);
};
function activateMenu(_activeTopMenu, _activeLink) {
	if (_activeTopMenu != null) {
		submenuToggle(_activeTopMenu);
		_activeLink.parents('li').addClass('active');
	}
}
function submenuToggle(_mainmenu) {
	if (ACTIVE_TOP_MENU == _mainmenu || !_mainmenu.is('.active')) {
		$('.nav-md ul.side-menu > li').removeClass('active');
		$('.nav-md ul.side-menu > li > .child_menu').hide();
		_mainmenu.addClass('active');
		$('ul:first', _mainmenu).slideDown(200);
	} else {
		_mainmenu.removeClass('active');
		$('ul:first', _mainmenu).slideUp(200);
	}
}
// Side-menu toggle
$(document).on('click', '.menu_toggle', function() {
	$('body').toggleClass('nav-md nav-sm');
	
	if ($('body').hasClass('nav-sm')) {
		$('ul.side-menu > li > .child_menu').hide();
		$('.nav-sm ul.side-menu > li').removeClass('active');
		
		if (ACTIVE_TOP_MENU != null) {
			ACTIVE_TOP_MENU.addClass('active');
		}
	} else {
		activateMenu(ACTIVE_TOP_MENU, ACTIVE_MENU_LINK);
	}
});
// Side-menu sub-menu toggle
$(document).on('click', '.nav-md ul.side-menu > li > a.submenu-open', function() {
	submenuToggle($(this).parent());
});

$(document).ready(function() {
	init_sidebar();
	
	if($('body').outerWidth() > 1281){ 
		$("html").removeClass("mobile").addClass("web");
	} else if($('body').outerWidth() > 768){ 
		$("html").removeClass("mobile").addClass("tablet");
	} else {
		$("html").removeClass("web").addClass("mobile");
	};

	// resize
	$(window).resize(function(){
		if($('body').outerWidth() > 1281){ 
			$("html").removeClass("mobile tablet").addClass("web");		
		} else if($('body').outerWidth() > 768){ 
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
	
	// check table
	$('.tb-check tbody tr').click(function() {
		$(this).toggleClass('checking').siblings().removeClass('checking');
	});
	$('.tb-check tbody tr a,.tb-check tbody tr button').click(function(e) {
		e.stopPropagation();
	});
	
	//datetimepicker - date
	$('.input-group.date').datetimepicker({
		viewMode: 'days',
		format: 'DD/MM/YYYY',
		allowInputToggle:true
	});
	
	//datetimepicker - month
	$('.input-group.month').datetimepicker({
		viewMode: 'months',
		format: 'MM/YYYY',
		allowInputToggle:true
	});
	
	// scrollbar
	$(window).on("load",function(){
		$(".x-scroll").mCustomScrollbar({
			axis:"x",
			scrollbarPosition: "outside",
			theme:"minimal-dark"
		});
		$(".y-scroll").mCustomScrollbar({
			axis:"yx",
			theme:"minimal-dark",
			scrollbarPosition: "outside",
			autoHideScrollbar : false,
			callbacks:{
				whileScrolling:function(){
					var fixedHeader = $(this).find('.fixed-header')
					if (fixedHeader.length){
						fixedHeader.css({
							'transform': 'translate(' + this.mcs.left + 'px, 0)'
						});
					}
				},
				onInit : function(){
					// $(this).TableFixedHeader();
				},
				onUpdate : function(){
					$(this).TableFixedHeader('resizing');
				}
			}
		});


		$(".xy-scroll").mCustomScrollbar({
			axis:"yx",
			theme:"minimal-dark"
		});

		$('.main_menu_side').mCustomScrollbar({
			theme:"light-thin"
		});

	});

	// dynatree
	if ($(".filetree").length > 0) {
		$(".filetree").each(function () {
			var $el = $(this),
				opt = {};
			opt.debugLevel = 0;
			if ($el.hasClass("filetree-callbacks")) {
				opt.onActivate = function (node) {
					$(".activeFolder").text(node.data.title);
					$(".additionalInformation").html("<ul style='margin-bottom:0;'><li>Key: " + node.data.key + "</li><li>is folder: " + node.data.isFolder + "</li></ul>");
				};
			}
			if ($el.hasClass("filetree-checkboxes")) {
				opt.checkbox = true;

				opt.onSelect = function (select, node) {
					var selNodes = node.tree.getSelectedNodes();
					var selKeys = $.map(selNodes, function (node) {
						return "[" + node.data.key + "]: '" + node.data.title + "'";
					});
					$(".checkboxSelect").text(selKeys.join(", "));
				};
			}

			$el.dynatree(opt);
		});
	}

	//  input clear
	function tog(v) {
		return v ? 'addClass' : 'removeClass';
	}	
	$(document).on('input', '.clearable', function() {
			$(this)[tog(this.value)]('on');
		}).on('mousemove', '.on', function(e) {
			$(this)[tog(this.offsetWidth - 25 < e.clientX - this.getBoundingClientRect().left)]('onX');
		}).on('touchstart click', '.onX', function(ev) {
			ev.preventDefault();
			$(this).removeClass('on onX').val('').change();
	});

	// multi modal
	$(document).on({
		'show.bs.modal': function() {
			var zIndex = 1040 + (10 * $('.modal:visible').length);
			$(this).css('z-index', zIndex);
			setTimeout(function() {
				$('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
			}, 0);
		},
		'hidden.bs.modal': function() {
			if ($('.modal:visible').length > 0) {
			setTimeout(function() {
				$(document.body).addClass('modal-open');
			}, 0);
		}
	}
	}, '.modal');

	// step, tab menu
	var url = document.location.toString();
	if (url.match('#')) {
		$('.wizard_steps a[href="#' + url.split('#')[1] + '"]').tab('show');
	} 
	$(".btnNext").click(function(){
		$(".anchor li.active").next("li").find("a").trigger("click");
	});
	$(".btnPrevious").click(function(){
		$(".anchor li.active").prev("li").find("a").trigger("click");
	});

	// tool tip
	$('[data-toggle="tooltip"]').tooltip({container: "body"})

});




$(document).ready(function () {

	// progress - test result
	$('#testResultClose, .overlay').on('click', function () {
		$('#testResultCollapse').removeClass('active');
		$('.overlay').fadeOut();
	});

	$('#testResultBtn').on('click', function () {
		$('#testResultCollapse').addClass('active');
		$('.overlay').fadeIn();
		$('.test-results .collapse.in').toggleClass('in');
		$('.test-results a[aria-expanded=true]').attr('aria-expanded', 'false');
	});

	// enroll - add subject
	$("#enroll").on('shown.bs.modal', function(e) {
		var tab = e.relatedTarget.hash;
		 $('.wizard_steps a[href="'+tab+'"]').tab('show')
	})


	$('.child-tr-body').on('show.bs.collapse', function () {
		$(this).closest("table")
			.find(".collapse.in")
			.not(this)
			.collapse('toggle')
	})
});




;(function($, undefined){
	
	"use strict";

	// 스케쥴 드래그
	var scheduleDraggable = (function(){
		var dragElem = $('[data-modules="dragBox"]'),
			dropElem = $('[data-modules="dropBox"]'),
			activeElem = null,
			DURR = 300,
			wrap = $('.schedule-drag-lists'),

			/**
			 * 초기화
			 */
			init = function(){
				var that = this;
				$('.schedule-drag-lists .inner-scroll').mCustomScrollbar({
					theme:"rounded-dark"
				});

				
				dragElem.draggable();
				dragElem.on('dragstart', function(){
					if ($(this).data('status') === 'disabled') return false;
					wrap.addClass('drag-moving');
				})
				dragElem.on('dragstop', function(e, ui){
					activeElem = ui.helper;
					var posX = e.clientX + $(document).scrollLeft()
					var posY = e.clientY + $(document).scrollTop()
					var dd = $(document).scrollTop()
					var mach = machElements(posX, posY);
					if ( mach !== null){
						that.dragOpen.call(this, mach);
					}else{
						dragElemReset();
					}
				});
			},

			/**
			 * 마우스 좌표와 매칭되는 드롭 리스트 반환
			 * @param x 마우스 X 좌표
			 * @param y 마우스 Y 좌표
			 */
			machElements = function(x, y){
				var machElem = null;
				if (dropElem !== 0) {
					dropElem.each(function(e){
						var $this = $(this);
						
						var pos = {
							x : $this.offset().left,
							y : $this.offset().top,
							w : $this.width() + $this.offset().left,
							h : $this.height() + $this.offset().top
						};

						if ( (x > pos.x && x < pos.w ) && (y > pos.y && y < pos.h ) ){
							machElem = $this;
							return false;
						};

					});

					return machElem;

				}
			},

			/**
			 * 드래그 요소 비활성화
			 */
			disabled = function(){
				dragElem.data( 'status', "disabled" );
			},

			/**
			 * * 드래그 요소 활성화
			 */
			enable = function(){
				dragElem.data( 'status', "" );
			},

			/**
			 * 드래그 엘리먼트 원위치
			 */
			dragElemReset = function(){
				if (activeElem !== undefined){
					activeElem.animate({top:'0', left:'0'}, DURR, function(){
						wrap.removeClass('drag-moving');
					})
				}
			},
			/**
			 * 드래그 엘리먼트 삭제
			 */
			dragElemRemove = function(){
				if (activeElem !== undefined){
					activeElem.parent().remove()
				}
			},

			/**
			 * 드래그 엘리먼트 유무 체크
			 */
			elemCheck = function(){
				return dragElem.length;
			},

			/**
			 * 드롭 콜백함수 
			 * 	$('[data-modules="dropBox"]').on('dropped', function(e){
			 *		...
			 *	})
			 */
			dragOpen = function(el){
				var startEvent = $.Event('dropped');
				el.trigger(startEvent)
				if (startEvent.isDefaultPrevented()) return
			};

		// 공개 메서드 반환
		return {
			init : init,
			reset : dragElemReset,
			disabled : disabled,
			enable : enable,
			remove : dragElemRemove,
			dragOpen : dragOpen,
			elemCheck : elemCheck
		}
	})();
	
	// 드래그 요소 유무 체크
	if (scheduleDraggable.elemCheck() !== 0) window.scheduleDraggable = scheduleDraggable;

})(jQuery)

/**
 * 스크롤 테이블 헤더 고정 플러그인
 * 
 */
;(function($, undefined){
	
	"use strict";
    var TableFixedHeader = function (elem) {
		this.$elem = elem;
		this.init();
	};
	
	TableFixedHeader.prototype = {
		/**
		 * 초기화
		 * 테이블 헤더 정보 가져와서 복사.
		 */
		init : function(){
			var header = this.thSort();
			var el = $('<div class="fixed-header">');
			this.fixed = $('.fixed-header')
			header.find('th').each(function(){
				var $this = $(this);
				var div = $('<div class="th">');
				var span = $('<span>');
				var childrens = $this[0].childNodes;
				var i;
				for (i = 0 ; i < childrens.length ; i+=1){
					span.append(childrens[i].cloneNode(true));
				}
				if ($this.attr('class')) div.addClass($this.attr('class'));
				div.append(span);
				el.append(div);
			});
			this.$elem.find('.mCustomScrollBox').append(el);
			this.resizing();
			this.posReset();
		},

		/**
		 * thead 객체 반환
		 */
		thSort : function(){
			var target = this.$elem.find('thead');
			return target;
		},

		/**
		 * 리사이징 이벤트
		 */
		posReset : function(){
			var that = this;
			$(window).on('resize', function(){
				that.resizing();
			})
		},

		/**
		 * 고정헤더 위치값 셋팅
		 */
		resizing : function(){
			var header = this.thSort();
			var el = this.$elem.find('.fixed-header');
			header.find('th').each(function(n){
				var $this = $(this);
				var style = {
					w : $this.outerWidth(),
					h : $this.outerHeight(),
					x : $this.position().left
				};
				el.find('div.th').eq(n).css({width:style.w, height:style.h, left:style.x+'px'});
				
			});
		},

		/**
		 * 고정 헤더 삭제
		 * $(element).TableFixedHeader('distory') 형식으로 호출
		 */
		distory : function(){
			this.$elem.find('.fixed-header').remove();
		},

		/**
		 * 고정 헤더 재 생성
		 * $(element).TableFixedHeader('enable') 형식으로 호출
		 */
		enable : function(){
			this.init();
		}
	}
    function Plugin(method){
        var $this = $(this);
		var data    = $this.data('TableFixedHeader');
		if (!data) $this.data('TableFixedHeader', (data = new TableFixedHeader(this)));
		if (method) data[method]()
    };

    $.fn.TableFixedHeader             = Plugin;
	$.fn.TableFixedHeader.Constructor = TableFixedHeader;
})(jQuery)


















































