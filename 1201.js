$( document).ready(function() {
  $(window).scroll(function(evt){
    if($(window).scrollTop()>0){
      $(".navbar").removeClass("navbar-top");
      $(".navbar").addClass("bg-light");
    }
    else{
      $(".navbar").addClass("navbar-top");
      $(".navbar").removeClass("bg-light");
    }
  }); 
  var s = skrollr.init();
});

$(".btn-secondary").click(
  function(){
    $(".btn-secondary").text("歡迎進入官網選購");
  }
)