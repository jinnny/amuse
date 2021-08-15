$(function() {
  var width = $(window).width();

  // 모바일메뉴 열기닫기
  $('.js-header-menu-button').on('click', function () {
    $('.js-header-menu').addClass('is--active')
  })
  $('.js-menu-button-close').on('click', function () {
    $('.js-header-menu').removeClass('is--active')
  })
  // // 모바일일 경우 2차메뉴 열기
  $('.header-menu__link').on('click', function (e){
    var width = $(window).width();
    if(width <= 991) {
      var parentLi = $(this).parents('li')
      var $curruntClass = parentLi.hasClass('is--open');
      if (parentLi.has('ul').length > 0) {
        e.preventDefault()
        $('.header-menu__item').removeClass('is--open')
        $('.header-menu__item ul').stop().slideUp()
        parentLi.addClass('is--open');
        parentLi.find('ul').stop().slideDown()
        if ($curruntClass) {
          parentLi.removeClass('is--open');
          parentLi.find('ul').stop().slideUp()
        }
      }
    }
  })

  $('.js-top-quick-menu-button').on('click', function () {
    $('.js-top-quick-menu').addClass('is--active')
  })

  $('.js-top-quick-menu-button-close').on('click', function () {
    $('.js-top-quick-menu').removeClass('is--active')
  })


  $('.js-quick-menu-subject').on('click', function (){
    $(this).parents('.quick-menu').addClass('is--active')
  })
  $('.js-quick-menu-close').on('click', function (){
    $(this).parents('.quick-menu').removeClass('is--active')
  })

  $('.js-model-house-unit__button').on('click', function () {
    var unit = $(this).attr('data-unit')
    $('.model-house-unit-content, .model-house-unit__button').removeClass('is--active')
    $(this).addClass('is--active')
    $('.model-house-unit-content').eq(unit).addClass('is--active')
  })

  $('.header-menu__item:nth-child(2)').on('click', function () {
    $('.js-header-menu').removeClass('is--active')
  })
});
