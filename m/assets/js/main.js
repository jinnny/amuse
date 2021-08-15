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
  $('.main-swiper-slide-button.main-swiper-slide-button--stop').on('click', function (){
    $(this).addClass('is--hide')
    mainVisual.autoplay.stop()
    $(this).siblings('.main-swiper-slide-button--play').removeClass('is--hide')
  })
  $('.main-swiper-slide-button.main-swiper-slide-button--play').on('click', function (){
    $(this).addClass('is--hide')
    $(this).siblings('.main-swiper-slide-button--stop').removeClass('is--hide')
    mainVisual.autoplay.start()
  })
  //visual


  var interior84 = new Swiper('.interiorA-swiper-container', {
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
        $('.interiorA-swiper-container').find('.swiper-label__total').text('0' + slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 4
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.interiorA-swiper-container').find('.swiper-label__number').text('0' + currentNumber);
      }
    },
  });
  var interior114 = new Swiper('.interiorB-swiper-container', {
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    loop: true,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    loopedSlides: 2,
    on: {
      init: function () {
        var slideLength = this.slides.length - 4
        $('.interiorB-swiper-container').find('.swiper-label__total').text('0' + slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length - 4
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.interiorB-swiper-container').find('.swiper-label__number').text('0' + currentNumber);
      }
    },
  });

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
          break;
        case 1:
          interior114.autoplay.start()
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

  initTab('interior', 0);
  //interior

  //model-house
  var modelHouseSwiper = new Swiper('.model-house-swiper-container', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: !1
    },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    slidesPerView: 1,
    loop: true,
    on: {
      init: function () {
        $('.main-section-model-house').find('.model-house-slide__button').eq(0).addClass('is--active');
      },
      slideChange: function () {
        var currentNumber = this.realIndex
        $('.main-section-model-house').find('.model-house-slide__button').removeClass('is--active');
        $('.main-section-model-house').find('.model-house-slide__button').eq(currentNumber).addClass('is--active');
      }
    }
  });
  $('.model-house-slide__button').on('click', function () {
    modelHouseSwiper.autoplay.stop()
    var slideIndex = modelHouseSwiper.realIndex
    var current = Number($(this).attr('data-model-house-index'))
    if(slideIndex !== current) {
      $('.main-section-model-house').find('.model-house-slide__button').removeClass('is--active');
      $('.main-section-model-house').find('.model-house-slide__button').eq(current).addClass('is--active');
      modelHouseSwiper.slideTo(current + 1)
      modelHouseSwiper.autoplay.start()
    }
  })
  //model-house
  //life
  var lifeSwiper = new Swiper('.life-swiper-container', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: !1
    },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    slidesPerView: 1,
    loop: true
  });
  //life
  //premium
  var premiumSwiper = new Swiper('.premium-swiper-container', {
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    slidesPerView: 1.2,
    spaceBetween: 6,
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
  //premium


  AOS.init({
    duration: 2000
  });
})
