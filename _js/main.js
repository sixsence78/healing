// JavaScript Document

$(function(){
    
    var swiper = new Swiper('.banner-container', {
        pagination: {
        el: '.ui .indi',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.ui .ui-next',
        prevEl: '.ui .ui-prev',
      },
    loop: true,
    on:{
            slideChangeTransitionEnd:function(){
               $('.main-banner .text-wrap .item').stop().animate({"opacity":0},500,"easeInOutExpo");
                $('.main-banner .text-wrap .item').eq(this.realIndex).stop().animate({"opacity":1},500,"easeInOutExpo");
                //console.log(this.realIndex);
            }
        }
    });
    
    var oneday = new Swiper('.onday-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    
    var huswiper = new Swiper('.hu-swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
    });

	
});
