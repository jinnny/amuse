
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


  var premiumSwiper = new Swiper('.community-swiper-container', {
    pagination: { el: '.swiper-pagination', clickable: true },
    // autoplay: { delay: 5e3, disableOnInteraction: !1 },
    autoplay: {
      delay: 4000,
      disableOnInteraction: !1
    },
    slidesPerView: 1,
    loop: true,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    on: {
      init: function () {
        $('.main-section-community').find('.premium-slide__button').eq(0).addClass('is--active');
        TweenMax.to($('.main-section-community .swiper-slide-active .community-slide__title span'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community-slide__title span'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0.4});
          }})
        TweenMax.to($('.main-section-community .swiper-slide-active .community-slide-line'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community-slide-line'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0});
          }})
        TweenMax.to($('.main-section-community .swiper-slide-active .community-slide-text--img img'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community-slide-text--img img'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0.8});
          }})
        TweenMax.to($('.main-section-community .swiper-slide-active .community-slide-text--impact p'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community-slide-text--impact p'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 1});
          }})
        TweenMax.to($('.main-section-community .swiper-slide-active .community-slide-text:not(.community-slide-text--img) p'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community-slide-text:not(.community-slide-text--img) p'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 1.5});
          }})
        TweenMax.to($('.main-section-community .swiper-slide-active .community__link a'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community__link a'), 1, {y: 50,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 1.8});
          }})
      },
      slideChange : function(){
        var currentNumber = this.realIndex
        $('.main-section-community').find('.premium-slide__button').removeClass('is--active');
        $('.main-section-community').find('.premium-slide__button').eq(currentNumber).addClass('is--active');
        TweenMax.to($('.main-section-community .swiper-slide-active .community-slide__title span'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community-slide__title span'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0.4});
          }})
        TweenMax.to($('.main-section-community .swiper-slide-active .community-slide-line'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community-slide-line'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0});
          }})
        TweenMax.to($('.main-section-community .swiper-slide-active .community-slide-text--img img'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community-slide-text--img img'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 0.8});
          }})
        TweenMax.to($('.main-section-community .swiper-slide-active .community-slide-text--impact p'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community-slide-text--impact p'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 1});
          }})
        TweenMax.to($('.main-section-community .swiper-slide-active .community-slide-text:not(.community-slide-text--img) p'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community-slide-text:not(.community-slide-text--img) p'), 1, {y: 80,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 1.5});
          }})
        TweenMax.to($('.main-section-community .swiper-slide-active .community__link a'),0.35,{y:0,autoAlpha : 0,onComplete :function(){
            TweenMax.fromTo($('.main-section-community .swiper-slide-active .community__link  a'), 1, {y: 50,autoAlpha:0,ease: Power3.easeOut,delay: 0}, { y: 0,autoAlpha:1,delay: 1.8});
          }})
      }
    }
  });

  $('.js-premium-slide__button').on('click', function () {
    premiumSwiper.autoplay.stop()
    var slideIndex = premiumSwiper.realIndex
    var current = Number($(this).attr('data-premium-index'))
    if(slideIndex !== current) {
      $('.main-section-community').find('.premium-slide__button').removeClass('is--active');
      $('.main-section-community').find('.premium-slide__button').eq(current).addClass('is--active');
      premiumSwiper.slideTo(current + 1)
      premiumSwiper.autoplay.start()
    }
  })

  AOS.init({
    duration: 1000
  });

  //unit
  function initTab(menuElId, index) {
    var tabMenu = $('#'+menuElId).find('.js-unit-button');
    var tabCont = $('#'+menuElId).find('.unit-content-area');
    var imgMap = $('#'+menuElId).find('.js-unit-map');
    $(tabCont).addClass('blind');
    var targetEl = $(tabMenu).eq(index).attr('href');
    var targetElImgMap = $(imgMap).eq(index);
    $(targetEl).removeClass('blind');
    $(targetElImgMap).removeClass('blind');
    $(tabMenu).removeClass('is--active');
    $(tabMenu).eq(index).addClass('is--active');
    $(imgMap).eq(index).addClass('is--active');
    var tab = index;
    var oldTab;
    $(tabMenu).click(function() {
      oldTab = tab;
      tab = $(tabMenu).index(this);
      switch (tab) {
        case 0:
          unit46a.autoplay.start()
          unit29b.autoplay.stop()
          unit29c.autoplay.stop()
          unit29d.autoplay.stop()
          unit29e.autoplay.stop()
          break;
        case 1:
          unit29b.autoplay.start()
          unit46a.autoplay.stop()
          unit29c.autoplay.stop()
          unit29d.autoplay.stop()
          unit29e.autoplay.stop()
          break;
        case 2:
          unit29c.autoplay.start()
          unit29b.autoplay.stop()
          unit46a.autoplay.stop()
          unit29d.autoplay.stop()
          unit29e.autoplay.stop()
          break;
        case 3:
          unit29d.autoplay.start()
          unit29b.autoplay.stop()
          unit46a.autoplay.stop()
          unit29c.autoplay.stop()
          unit29e.autoplay.stop()
          break;
        case 4:
          unit29e.autoplay.start()
          unit29d.autoplay.stop()
          unit29c.autoplay.stop()
          unit29b.autoplay.stop()
          unit46a.autoplay.stop()
          break;
        default:
      }
      if (oldTab != tab){
        $(tabMenu).eq(oldTab).removeClass('is--active');
        $(imgMap).eq(oldTab).removeClass('is--active');
        $(imgMap).eq(tab).addClass('is--active');
        $(tabMenu).eq(tab).addClass('is--active');
        $(tabCont).addClass('blind');
        var targetEl = $(tabMenu).eq(tab).attr('href');
        $(targetEl).removeClass('blind')
        return false;
      }
      var targetEl = $(tabMenu).eq(tab).attr('href');
      $(targetEl).removeClass('blind');
      return false;
    });
  }

  var unit46a = new Swiper('.unit46a-swiper-container', {
    navigation: { nextEl: '.unit46a .swiper-button-next', prevEl: '.unit46a .swiper-button-prev' },
    loop: true,
    spaceBetween: 27,
    loopedSlides: 4,
    autoHeight: true,
    width: 300,
    autoplay: {
      delay: 2000,
    },
    on: {
      init: function () {
        var slideLength = this.slides.length - 8
        $('.unit46a-swiper-container').find('.swiper-label__total').text(slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 8
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.unit46a-swiper-container').find('.swiper-label__number').text(currentNumber);
      }
    },
  });
  var unit29b = new Swiper('.unit29b-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    loop: true,
    spaceBetween: 27,
    watchSlidesVisibility: true,
    loopedSlides: 4,
    autoHeight: true,
    width: 300,
    on: {
      init: function () {
        var slideLength = this.slides.length - 8
        $('.unit29b-swiper-container').find('.swiper-label__total').text(slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 8
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.unit29b-swiper-container').find('.swiper-label__number').text(currentNumber);
      }
    },
  });
  var unit29c = new Swiper('.unit29c-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    loop: true,
    spaceBetween: 27,
    loopedSlides: 4,
    autoHeight: true,
    width: 300,
    watchSlidesVisibility: true,
    on: {
      init: function () {
        var slideLength = this.slides.length - 8
        $('.unit29c-swiper-container').find('.swiper-label__total').text(slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 8
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.unit29c-swiper-container').find('.swiper-label__number').text(currentNumber);
      }
    },
  });
  var unit29d = new Swiper('.unit29d-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    loop: true,
    spaceBetween: 27,
    autoHeight: true,
    width: 300,
    loopedSlides: 4,
    watchSlidesVisibility: true,
    on: {
      init: function () {
        var slideLength = this.slides.length - 8
        $('.unit29d-swiper-container').find('.swiper-label__total').text(slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 8
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.unit29d-swiper-container').find('.swiper-label__number').text(currentNumber);
      }
    },
  });
  var unit29e = new Swiper('.unit29e-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    loop: true,
    spaceBetween: 27,
    autoHeight: true,
    width: 300,
    loopedSlides: 4,
    watchSlidesVisibility: true,
    on: {
      init: function () {
        var slideLength = this.slides.length - 8
        $('.unit29e-swiper-container').find('.swiper-label__total').text(slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 8
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.unit29e-swiper-container').find('.swiper-label__number').text(currentNumber);
      }
    },
  });

  initTab('unit', 0);

  $('.main-section-unit .swiper-slide-button--stop').on('click', function (){
    var buttonArea = $(this).parents('.swiper-slide-button-area')
    var unitName = buttonArea.attr('data-unit')
    $(this).addClass('is--hide')
    $(this).siblings('.swiper-slide-button--play').removeClass('is--hide')
    console.log(unitName,unit46a)
    switch (unitName) {
      case 'unit46a':
        unit46a.autoplay.stop()
        break;
      case 'unit29b':
        unit29b.autoplay.stop()
        break;
      case 'unit29c':
        unit29c.autoplay.stop()
        break;
      case 'unit29d':
        unit29d.autoplay.stop()
        break;
      case 'unit29e':
        unit29e.autoplay.stop()
        break;
    }
  })
  $('.main-section-unit .swiper-slide-button--play').on('click', function (){
    var buttonArea = $(this).parents('.swiper-slide-button-area')
    var unitName = buttonArea.attr('data-unit')
    $(this).addClass('is--hide')
    $(this).siblings('.swiper-slide-button--stop').removeClass('is--hide')
    switch (unitName) {
      case 'unit46a':
        unit46a.autoplay.start()
        break;
      case 'unit29b':
        unit29b.autoplay.start()
        break;
      case 'unit29c':
        unit29c.autoplay.start()
        break;
      case 'unit29d':
        unit29d.autoplay.start()
        break;
      case 'unit29e':
        unit29e.autoplay.start()
        break;
    }
  })
  //unit

})

