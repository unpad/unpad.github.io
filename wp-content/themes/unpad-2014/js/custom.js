jQuery(document).ready(function($) {
  var si = $('#gallery-1').royalSlider({
    addActiveClass: true,
    arrowsNav: true,
    imageScalePadding: 0,
    startSlideId: 2,
    controlNavigation: true,
    autoScaleSlider: false, 
    loop: true,
    fadeinLoadedSlide: false,
    globalCaption: false,
    keyboardNavEnabled: true,
    globalCaptionInside: false,
    slidesSpacing: 8,
    visibleNearby: false,
    navigateByClick: false,
    autoPlay: {
        enabled: true,
        pauseOnHover: true,
        delay: 4000
      }
  }).data('royalSlider');
  // link to fifth slide from slider description.
  $('.slide4link').click(function(e) {
    si.goTo(3);
    return false;
  });
});