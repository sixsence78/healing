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
	$(document).on("mouseover",".gnb-wrapper .gnb dl",function(){
		
       //alert("A");
       $(".gnb-wrapper .gnb div").hide(); $(this).find("div").show();
		
	});
	
	$(document).on("mouseleave","header",function(){
		
			$(".gnb-wrapper .gnb div").hide();
		
	});
	
	$(document).on("click",".gnb .mobile-util .close",function(){
        
		$(".mobile-gnb-wrapper .gnb").hide();
        return false;
		
	});
    
    $(document).on("click",".mobile-top .mobile-menu",function(){
        
		$(".mobile-gnb-wrapper .gnb").show();
        return false;
		
	});
	
	////////////////////     FOOTER     ////////////////////
	
	/*   FOOTER 로드   */
	$("footer").load('../_inc/footer.html');
	
	////////////////////     별점     ////////////////////
	
	$(document).on("mouseover",".comment-wrap .star-wrap em",function(){
        
       $(this).closest(".star-wrap").find("em").removeClass("act");
        var overNum = $(this).index();
        
        for(i=0; i<=overNum; i++){
            $(this).closest(".star-wrap").find("em").eq(i).addClass("act");
        }
        
    });
    
    $(document).on("mouseleave",".comment-wrap .star-wrap",function(){
        
        $(this).find("em").removeClass("act");
        
    });
    
    
    $(document).on("click",".comment-wrap .star-wrap em",function(){
        
       $(this).closest(".star-wrap").find("em").removeClass("on");
        var overNum = $(this).index();
        
        for(i=0; i<=overNum; i++){
            $(this).closest(".star-wrap").find("em").eq(i).addClass("on");
        }
        
    });
	
	
	
});
