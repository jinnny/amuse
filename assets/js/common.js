$(function() {

  function isIE () {
    var e = window.navigator.userAgent, t = e.indexOf('MSIE '), e = e.indexOf('Trident/');
    return (0 < t || 0 < e) && document.body.classList.add('is--IE11'), 0 < t || 0 < e;
  }

  isIE();

  $('.js-model-house-button').on('click', function () {
    $(this).parents('.js-model-house').toggleClass('is--active')
    $('.js-model-house-bg').toggleClass('is--active')
    $('body').toggleClass('overflow--hidden')
  })

  $('.js-header').on('mouseover', function (){
      $('.js-header').addClass('is--show-depth')
      $('.js-header-bg').addClass('is--active')

  }).on('mouseout', function () {
    $('.js-header').removeClass('is--show-depth')
    $('.js-header-bg').removeClass('is--active')
  })

  $('.js-unit-button').on('click', function (e) {
    e.preventDefault()
    $('.js-unit-modal').addClass('is--active')
    var unit = $(this).attr('data-unit')
    $('.model-house-unit-content').removeClass('is--active')
    $('.model-house-unit-content').eq(unit).addClass('is--active')
  })

  $('.js-unit-modal-close').on('click', function () {
    $('.js-unit-modal').removeClass('is--active')
    $('.model-house-unit-content').removeClass('is--active')
  })

  // 모델하우스 유닛 마우스 올릴때
  $('.model-house-unit__item').on('mouseover', function (){
    if(width > 991) {
      // if ($(this).has('ul').length > 0) {
      $('.model-house-unit__item').removeClass('is--active')
      $(this).addClass('is--active')
      // }
    }
  }).on('mouseout', function () {
    $('.model-house-unit__item').removeClass('is--active')
  })


  // // 모바일일 경우 2차메뉴 열기
  // $('.js-header-menu-item__link').on('click', function (e){
  //   var width = $(window).width();
  //   if(width <= 991) {
  //     var parentLi = $(this).parents('li')
  //     if (parentLi.has('.js-menu-list--depth').length > 0) {
  //       e.preventDefault()
  //       parentLi.toggleClass('is--open');
  //       parentLi.find('.js-menu-list--depth').slideToggle()
  //     }
  //   }
  // })

  // function mobileReset() {
  //   var width = $(window).width();
  //   if(width > 991) {
  //     $('.js-header').removeClass('is--open')
  //   }
  // }

  // var main_swiper = function () {
  //   (swiper = new Swiper('.model-house-visual', {
  //     pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
  //     // autoplay: { delay: 5e3, disableOnInteraction: !1 },
  //     navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  //     paginationClickable: true,
  //     effect: 'fade'
  //   })).on('slideChange', function () {
  //     var e = this.activeIndex;
  //     var t, r = document.querySelectorAll('.swiper-slide')[swiper.activeIndex],
  //       e = document.querySelectorAll('.swiper-slide')[swiper.previousIndex];
  //     r.querySelector('video') && ((t = r.querySelector('video')).currentTime = 0,
  //       gsap.delayedCall(.10, function () {
  //       t.play();
  //     })),
  //       e.querySelector('video') && (t = r.querySelector('video')) ? (t = r.querySelector('video')).pause() : null;
  //   });
  // }
  //
  // main_swiper()

});
