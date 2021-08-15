$(function() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  //visual
  var  mainVisual = new Swiper('.main-visual', {
    paginationClickable: true,
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    autoplay: { delay: 5e3, disableOnInteraction: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    effect: 'fade',
    allowTouchMove: false,
    on: {
      init: function () {
        // var e = document.querySelector('.main-visual .swiper-slide .main-slide-text').clientHeight;
        $('.swiper-button-area').addClass('show');
        $('.main-visual').find('.swiper-label__number').eq(0).addClass('is--active');
      },
      slideChange: function () {
        var currentNumber = this.realIndex
        $('.main-visual').find('.swiper-label__number').removeClass('is--active');
        $('.main-visual').find('.swiper-label__number').eq(currentNumber).addClass('is--active');
      }
    }
  });
  $('.main-swiper-slide-button.swiper-slide-button--stop').on('click', function (){
    $(this).addClass('is--hide')
    mainVisual.autoplay.stop()
    $(this).siblings('.swiper-slide-button--play').removeClass('is--hide')
  })
  $('.main-swiper-slide-button.swiper-slide-button--play').on('click', function (){
    $(this).addClass('is--hide')
    $(this).siblings('.swiper-slide-button--stop').removeClass('is--hide')
    mainVisual.autoplay.start()
  })
  //visual

  //interior
  function initTab(menuElId, index) {
    var tabMenu = $('#'+menuElId).find('.main-interior__button');
    var tabCont = $('#'+menuElId).find('.interior-content-area');
    $(tabCont).addClass('blind');
    var targetEl = $(tabMenu).eq(index).attr('href');
    $(targetEl).removeClass('blind');
    $(tabMenu).removeClass('is--active');
    $(tabMenu).eq(index).addClass('is--active');
    var tab = index;
    var oldTab;
    $(tabMenu).click(function() {
      oldTab = tab;
      tab = $(tabMenu).index(this);
      switch (tab) {
        case 0:
          interior84.autoplay.start()
          interior114.autoplay.stop()
          interior117.autoplay.stop()
          interior139.autoplay.stop()
          interior145.autoplay.stop()
          break;
        case 1:
          interior114.autoplay.start()
          interior84.autoplay.stop()
          interior117.autoplay.stop()
          interior139.autoplay.stop()
          interior145.autoplay.stop()
          break;
        case 2:
          interior117.autoplay.start()
          interior114.autoplay.stop()
          interior84.autoplay.stop()
          interior139.autoplay.stop()
          interior145.autoplay.stop()
          break;
        case 3:
          interior139.autoplay.start()
          interior114.autoplay.stop()
          interior84.autoplay.stop()
          interior117.autoplay.stop()
          interior145.autoplay.stop()
          break;
        case 4:
          interior145.autoplay.start()
          interior139.autoplay.stop()
          interior117.autoplay.stop()
          interior114.autoplay.stop()
          interior84.autoplay.stop()
          break;
        default:
      }
      if (oldTab != tab){
        $(tabMenu).eq(oldTab).removeClass('is--active');
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

  var interior84 = new Swiper('.interior84-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    loop: true,
    spaceBetween: 10,
    loopedSlides: 2,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    on: {
      init: function () {
        var slideLength = this.slides.length - 4
        $('.interior84-swiper-container').find('.swiper-label__total').text('0' + slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 4
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.interior84-swiper-container').find('.swiper-label__number').text('0' + currentNumber);
      }
    },
  });
  var interior114 = new Swiper('.interior114-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    loop: true,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    loopedSlides: 2,
    on: {
      init: function () {
        var slideLength = this.slides.length - 4
        $('.interior114-swiper-container').find('.swiper-label__total').text('0' + slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 4
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.interior114-swiper-container').find('.swiper-label__number').text('0' + currentNumber);
      }
    },
  });
  var interior117 = new Swiper('.interior117-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    loop: true,
    spaceBetween: 10,
    loopedSlides: 2,
    watchSlidesVisibility: true,
    on: {
      init: function () {
        var slideLength = this.slides.length - 4
        $('.interior117-swiper-container').find('.swiper-label__total').text('0' + slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 4
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.interior117-swiper-container').find('.swiper-label__number').text('0' + currentNumber);
      }
    },
  });
  var interior139 = new Swiper('.interior139-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    loop: true,
    spaceBetween: 10,
    loopedSlides: 2,
    watchSlidesVisibility: true,
    on: {
      init: function () {
        var slideLength = this.slides.length - 4
        $('.interior139-swiper-container').find('.swiper-label__total').text('0' + slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 4
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.interior139-swiper-container').find('.swiper-label__number').text('0' + currentNumber);
      }
    },
  });
  var interior145 = new Swiper('.interior145-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    loop: true,
    spaceBetween: 10,
    loopedSlides: 2,
    watchSlidesVisibility: true,
    on: {
      init: function () {
        var slideLength = this.slides.length - 4
        $('.interior145-swiper-container').find('.swiper-label__total').text('0' + slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 4
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.interior145-swiper-container').find('.swiper-label__number').text('0' + currentNumber);
      }
    },
  });

  initTab('interior', 0);

  $('.main-section-interior .swiper-slide-button--stop').on('click', function (){
    var buttonArea = $(this).parents('.swiper-slide-button-area')
    var interiorName = Number(buttonArea.attr('data-interior'))
    $(this).addClass('is--hide')
    $(this).siblings('.swiper-slide-button--play').removeClass('is--hide')
    switch (interiorName) {
      case 84:
        interior84.autoplay.stop()
        break;
      case 114:
        interior114.autoplay.stop()
        break;
      case 117:
        interior117.autoplay.stop()
        break;
      case 139:
        interior139.autoplay.stop()
        break;
      case 145:
        interior145.autoplay.stop()
        break;
    }
  })
  $('.main-section-interior .swiper-slide-button--play').on('click', function (){
    var buttonArea = $(this).parents('.swiper-slide-button-area')
    var interiorName = Number(buttonArea.attr('data-interior'))
    $(this).addClass('is--hide')
    $(this).siblings('.swiper-slide-button--stop').removeClass('is--hide')
    switch (interiorName) {
      case 84:
        interior84.autoplay.start()
        break;
      case 114:
        interior114.autoplay.start()
        break;
      case 117:
        interior117.autoplay.start()
        break;
      case 139:
        interior139.autoplay.start()
        break;
      case 145:
        interior145.autoplay.start()
        break;
    }
  })
  //interior

  //premium
  var premiumSwiper = new Swiper('.premium-swiper-container', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: !1
    },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    slidesPerView: 1,
    loop: true,
    on: {
      init: function () {
        $('.main-section-premium').find('.premium-slide__button').eq(0).addClass('is--active');
      },
      slideChange: function () {
        var currentNumber = this.realIndex
        $('.main-section-premium').find('.premium-slide__button').removeClass('is--active');
        $('.main-section-premium').find('.premium-slide__button').eq(currentNumber).addClass('is--active');
      }
    }
  });
  $('.premium-slide__button').on('click', function () {
    premiumSwiper.autoplay.stop()
    var slideIndex = premiumSwiper.realIndex
    var current = Number($(this).attr('data-premium-index'))
    if(slideIndex !== current) {
      $('.main-section-premium').find('.premium-slide__button').removeClass('is--active');
      $('.main-section-premium').find('.premium-slide__button').eq(current).addClass('is--active');
      premiumSwiper.slideTo(current + 1)
      premiumSwiper.autoplay.start()
    }
  })
  //premium
  //unit
  var unitSwiper = new Swiper('.unit-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 21,
    autoHeight: true,
    // on: {
    //   init: function () {
    //     $('.main-section-premium').find('.premium-slide__button').eq(0).addClass('is--active');
    //   },
    //   slideChange: function () {
    //     var currentNumber = this.realIndex
    //     $('.main-section-premium').find('.premium-slide__button').removeClass('is--active');
    //     $('.main-section-premium').find('.premium-slide__button').eq(currentNumber).addClass('is--active');
    //   }
    // }
  });
  //unit


  AOS.init({
    duration: 2000
  });
})
