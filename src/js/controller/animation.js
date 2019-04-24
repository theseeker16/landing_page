$(document).ready(function () {
  console.log("ready");
  AOS.init({
    once: true
  });

  $(".hero__scroll").click(function () {
    $('html, body').animate({
      scrollTop: $(".softek").offset().top
    }, 2500);
  });
});