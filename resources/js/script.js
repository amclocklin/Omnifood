$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") { 
          $('nav').addClass('sticky'); 
          } else {
        $('nav').removeClass('sticky');
    }
    }, {
        offset: '60px'
      });

      
      
        
      $('.js--scroll-to-plans').click(function ()  {
          $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
        });
      
        $('.js--scroll-to-start').click(function ()  {
            $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
          });
        



$(function() {         
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html, body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
});

$('.js--wp-1').waypoint(function(direction) {
  $('.js--wp-1').addClass('animated fadeIn');
}, {
  offset: '55%'
})

$('.js--wp-2').waypoint(function(direction) {
  $('.js--wp-2').addClass('animated rotateInUpLeft');
}, {
  offset: '55%'
})

$('.js--wp-3').waypoint(function(direction) {
  $('.js--wp-3').addClass('animated slideInUp');
}, {
  offset: '55%'
})

$('.js--wp-4').waypoint(function(direction) {
  $('.js--wp-4').addClass('animated pulse');
}, {
  offset: '55%'
})

//$('.js--nav-icon').click(function (){
 // var nav = $('.js--main-nav');
 // var icon = $('.js--nav-icon i');
  
 /// nav.slideToggle(200);
//
 // if (icon.hasClass('ion-navicon-round')) {
  //  icon.addClass('.ion-close-round');
 //   icon.removeClass('.ion-navicon-round');
 // } else {
 //   icon.addClass('.ion-navicon-round');
  //  icon.removeClass('.ion-close-round');
//  }
//});


$('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');

  //Gets the class name of the element that triggered the event
  var clicked = element.target.className;

  //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
  if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
      return;

  //Opens and closes the menu
  if ($(window).width() < 768){
      nav.slideToggle(200);
  }

  //Changes icon states of the menu button
  if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
  } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
  }
});


$(window).resize(function(){
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');

  if ($(window).width() > 767){
      nav.css("display", "block");
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
  } else {
      nav.css("display", "none");
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
  }

});

});