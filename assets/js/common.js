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

  $('.js-header .header-menu').on('mouseover', function (){
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


});
