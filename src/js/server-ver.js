cript type="text/javascript" xml="space">// <![CDATA[
require([
  'jquery',
  'slick'
  ], function ($) {
$(document).ready(function(){
  $('#ingredientsDesc').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 2000,
      fade: true,
      cssEase: 'ease-in-out',
      pauseOnHover: true
  });
  $('#testimonialSlider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1200,
    cssEase: 'ease-in-out'
  }); // comments slider
// Regimen
  // Set intial tab states
  $("#regimenSimple").css("display", "block");
  $("#regimenSimpleBtn").addClass("tabActive");
  $("#simple1").css("display", "block");
  $(".regimenTab").click(function(event) {
    var target = $( event.target );
    $(".regimenTab .regimenTablinks").removeClass("tabActive");
    target.addClass("tabActive");
    $(".regimenTab-subtxt").removeClass("tabActive");
    if (target.is("#regimenSimpleBtn")) {
      $("#regimenCore").css("display", "none");
      $("#regimenSimple").css("display", "block");
      $("#simple1").css("display", "block");
    } else if (target.is("#regimenCoreBtn")) {
      $("#regimenCore").css("display", "block");
      $("#regimenSimple").css("display", "none");
      $("core1").css("display", "block");
    } else {
      console.log("Regimen selection error!");
    } // if else
  });// Regimen Tab click event
});
});
// ]]></script>
