var $bg, $title, $en, $ele;
var _init = function() {
  $ele = $('.sub-top-area');
  $bg = $ele.find('.sub-top-bg');
  $title = $ele.find('.sub-top__title');
  $en = $ele.find('.en_tit');
  $menu = $ele.find('.sub-top-menu')
  $subTitle = $('.sub-content__title')
  $subTitleLine = $subTitle.find('.sub-content-title-line')
  $subTitleText = $subTitle.find('.sub-content-title-text')

  var mySplitText = new SplitText($title, { type: "chars" });
  //var word_tl = new TimelineLite({delay:1});
  var shuffleCharArray = shuffleArray(mySplitText.chars);

  TweenLite.set(shuffleCharArray, { autoAlpha: 0 });

  tl = new TimelineLite();
  tl.staggerTo(shuffleCharArray, .8, { delay: 1.5, autoAlpha: 1, ease: Cubic.easeOut }, 0.3)
  tl.play();
  tl.timeScale(2);

  function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
$(function () {
  _init()
  $('.header').addClass('sub')
  $('.sub-content__title, .sub-top-menu, .sub-top-link-area').addClass('is--active')
  $('.sub-top-title').addClass('is--active')

  AOS.init({
    duration: 1000
  });

  $('.sub-top-menu__item').on('click', function () {
    $(this).toggleClass('is--active')
  })
  $('.js-sub-menu-depth').on('click', function () {
    $(this).toggleClass('is--active')
  })
})
