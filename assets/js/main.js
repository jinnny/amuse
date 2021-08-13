
$(function() {

  // 메인슬라이드
  var  mainVisual = new Swiper('.main-visual', {
    paginationClickable: true,
    pagination: {
      el: '.swiper-pagination', clickable: !1,
      renderBullet: function (index, className) {
        return '<span class="pagination__item ' + className +'">'+0 + (index + 1) + '<span class="pagination-bar"></span>' + "</span>";
      },
    },
    autoplay: { delay: 5e3, disableOnInteraction: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    effect: 'fade',
    on: {
      init: function () {
      }
    }
  });
  $('.swiper-autoplay-control-button').on('click', function () {
    if($(this).hasClass('autoplay-stop-icon')) {
      mainVisual.autoplay.stop()
      $(this).addClass('is--hide')
      $('.autoplay-play-icon').removeClass('is--hide')
    }else {
      mainVisual.autoplay.start()
      $(this).addClass('is--hide')
      $('.autoplay-stop-icon').removeClass('is--hide')
    }
  })


  new Swiper('.community-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', clickable: true },
    // autoplay: { delay: 5e3, disableOnInteraction: !1 },
    autoplay: {
      delay: 5000
    },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    on: {
      init: function () {
        TweenMax.to($('.swiper-slide-active .community-slide__title span'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community-slide__title span'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0});
          }})
        TweenMax.to($('.swiper-slide-active .community-slide-line'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community-slide-line'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0.3});
          }})
        TweenMax.to($('.swiper-slide-active .community-slide-text--img img'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community-slide-text--img img'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0.6});
          }})
        TweenMax.to($('.swiper-slide-active .community-slide-text--impact p'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community-slide-text--impact p'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0.9});
          }})
        TweenMax.to($('.swiper-slide-active .community-slide-text:not(.community-slide-text--img) p'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community-slide-text:not(.community-slide-text--img) p'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 1.2});
          }})
        TweenMax.to($('.swiper-slide-active .community__link a'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community__link a'), 1, {y: 50,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 1.5});
          }})
      },
      slideChange : function(){
        TweenMax.to($('.swiper-slide-active .community-slide__title span'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community-slide__title span'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0});
          }})
        TweenMax.to($('.swiper-slide-active .community-slide-line'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community-slide-line'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0.3});
          }})
        TweenMax.to($('.swiper-slide-active .community-slide-text--img img'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community-slide-text--img img'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0.6});
          }})
        TweenMax.to($('.swiper-slide-active .community-slide-text--impact p'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community-slide-text--impact p'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0.9});
          }})
        TweenMax.to($('.swiper-slide-active .community-slide-text:not(.community-slide-text--img) p'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community-slide-text:not(.community-slide-text--img) p'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 1.2});
          }})
        TweenMax.to($('.swiper-slide-active .community__link a'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.swiper-slide-active .community__link  a'), 1, {y: 50,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 1.5});
          }})
      }
    }
  });


  $('.js-main-quick-button').on('click', function () {
    $(this).toggleClass('is--active')
    $('.main-quick-menu').toggleClass('is--active')
  })

  AOS.init({
    duration: 1000
  });
})
