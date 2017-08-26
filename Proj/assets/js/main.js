
/*
$(".section_one .container p:nth-child(1)").click(function(){
  $(".header").slideUp(500);
});

$(".section_one .container p:nth-child(2)").click(function(){
  $(".header").slideDown(500);
});
*/
$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed:3000,
  dots: true
});
