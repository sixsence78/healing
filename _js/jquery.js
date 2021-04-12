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
	
	////////////////////     LNB     ////////////////////
	
	/*     SNS 공유     */
	
	
	
});
