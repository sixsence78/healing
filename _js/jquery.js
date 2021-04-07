// JavaScript Document


////////////////////     BROWSER POPUP      ////////////////////
	
function openWin(url, width, height){
	window.open(url, "", "width="+width+", height="+height+", toolbar=no, menubar=no, scrollbars=yes, resizable=no" );
} 

$(function(){
	
	
	////////////////////     SKIP NAVI     ////////////////////
	
	/*   SKIP NAVI 로드   */
	//$("#skip-nav").load('../_inc/skip.html');
	
	
	////////////////////     HEADER     ////////////////////
	
	/*   HEADER 로드   */
	$("header").load('../_inc/gnb.html',function(){
		 //LNBinit();
	});
	
	/*     WEB     */
	$(document).on("mouseover",".gnb dl",function(){
		
       //alert("A");
       $(".gnb div").hide(); $(this).find("div").show();
		
	});
	
	$(document).on("mouseleave","header",function(){
		
			$(".gnb div").hide();
		
	});
	
	
	
	////////////////////     FOOTER     ////////////////////
	
	/*   FOOTER 로드   */
	$("footer").load('../_inc/footer.html');
	
	////////////////////     LNB     ////////////////////
	
	/*     SNS 공유     */
	
	$(document).on("click","#lnb .btn-share",function(){
		
		$(this).closest(".share").find("div").slideDown(500,"easeInOutExpo");
		return false;
		
	});
	
	$(document).on("click","#lnb .share .close",function(){
		
		$(this).closest("div").slideUp(500,"easeInOutExpo");
		return false;
		
	});
	
	
	function LNBinit(){
		
		/*     LNB 생성     */
		
		var d1;
		var url;
		
		var menuLength = $("#gnb>li").length;
		var menu1 = $("#gnb>li").eq(m1).find(">a").clone();
		
		
		$("#lnb .main-lnb").append('<li class="one"></li>');
		$("#lnb .one").append(menu1);
		$("#lnb .one>a").attr("aria-label","메뉴 펼치기");
		$("#lnb .one").append("<ul></ul>");

		for(var i = 0; i < menuLength; i++){
			
			d1 = $("#gnb>li").eq(i).find(">a").clone();
			$("#lnb .one ul").append("<li></li>")
			$("#lnb .one ul li").eq(i).append(d1);
			
		}
		
		$("#lnb .one").find("ul li").eq(m1).find("a").addClass("on");
		
		
		
		if(m2!=null){
			
			menuLength = $("#gnb>li").eq(m1).find(">ul>li").length;
			var menu2 = $("#gnb>li").eq(m1).find(">ul>li").eq(m2).find(">a").clone();
			
			$("#lnb .main-lnb").append('<li class="two"></li>');
			$("#lnb .two").append(menu2);
			$("#lnb .two>a").attr("aria-label","메뉴 펼치기");
			$("#lnb .two").append("<ul></ul>");
			
			for(i = 0; i < menuLength; i++){
				
				d1 = $("#gnb>li").eq(m1).find(">ul>li").eq(i).find(">a").clone();
				$("#lnb .two ul").append("<li></li>");
				$("#lnb .two ul li").eq(i).append(d1);
				
			}
			
			$("#lnb .two").find("ul li").eq(m2).find("a").addClass("on");
		
		};
		
		if(m3!=null){
			
			menuLength = $("#gnb>li").eq(m1).find(">ul>li").eq(m2).find("li").length;
			var menu3 = $("#gnb >li").eq(m1).find("li").eq(m2).find(">ul>li").eq(m3).find(">a").clone();
			
			$("#lnb .main-lnb").append('<li class="three"></li>');
			$("#lnb .three").append(menu3);
			$("#lnb .three>a").attr("aria-label","메뉴 펼치기");
			$("#lnb .three").append("<ul></ul>");
			
			for(i = 0; i < menuLength; i++){
				
				d1 = $("#gnb>li").eq(m1).find("li").eq(m2).find("ul>li").eq(i).clone();
				$("#lnb .three ul").append(d1);
				
			}
			
			$("#lnb .three").find("ul li").eq(m3).find("a").addClass("on");
		
		};
		
		
		$("#lnb .main-lnb>li>a").click(function(e){
			
			if(!$(this).parent("li").hasClass("home")){
				var displayCondition = $(this).closest("li").find("ul").css("display");
			
				if(displayCondition==="block"){
					$(this).closest("li").find("ul").slideUp(500,"easeInOutExpo");
					$(this).attr("aria-label","메뉴 펼치기");
					$(this).removeClass("on");
				}else{
					$(this).closest("li").find("ul").slideDown(500,"easeInOutExpo");
					$(this).attr("aria-label","메뉴 닫기");
					$(this).addClass("on");
				}

				e.preventDefault();
			}
			
		});
		
	}
	
	////////////////////     MODAL POPUP     ////////////////////
	
	/*   Sitemap 로드   */
	$("#modal-wrap").load('../_inc/modal.html',function(){
		
		modal(); 
		accessibilityFocus();
		
	});
	
	function accessibilityFocus() {
		
		$(document).on('keydown', '[data-focus-prev], [data-focus-next]', function(e){
			var next = $(e.target).attr('data-focus-next'), 
				prev = $(e.target).attr('data-focus-prev'), 
				target = next || prev || false; 
			
			if(!target || e.keyCode !== 9) {
				return;
				
			} 
			
			if( (!e.shiftKey && !!next) || (e.shiftKey && !!prev) ) { 
				
				setTimeout(function(){
					$('[data-focus="' + target + '"]').focus(); 
				}, 1);
				
			} 
		}); 
	} 
	
	function modal() {
		
		var openBtn = '[data-modal]', 
			closeBtn = '.modal-close'; 
		
		function getTarget(t) { 
			
			return $(t).attr('data-modal'); 
		
		} 
		
		function open(t) { 
			
			var showTarget = $('[data-modal-con="' + t + '"]');
			
			
			window.setTimeout(function(){
				var pop_height = showTarget.height()/-2;
				var pop_width = showTarget.innerWidth()/-2;
				showTarget.attr("tabindex","0");
				showTarget.show().css({"margin-top":pop_height,"margin-left":pop_width});
				showTarget.focus();
				showTarget.find('.modal-close').data('activeTarget', t);
			},500);
			
		} 
		
		function close(t) { 
			
			var activeTarget = $('[data-modal-con="' + t + '"]'); 
			activeTarget.hide(); 
			$('[data-modal="' + t + '"]').focus(); 
		} 
		
		$(document).on('click', openBtn, function(e){ 
			open(getTarget($(this)));
			//alert(getTarget($(this)));
			$("#modal-wrap").show();
			e.preventDefault(); 
		}) .on('click', closeBtn, function(e) { 
			e.preventDefault(); 
			close($(this).data('activeTarget'));
			$("#modal-wrap").hide();
		}); 
	}
	
});
