
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  let hola = window.innerHeight;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--hola', `${hola}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
  // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    let hola = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);    
    document.documentElement.style.setProperty('--hola', `${hola}px`);
  });

$(window).scroll(function(){
    $(".logo_header").css("opacity", 1 - $(window).scrollTop() / 250);
  //250 is fade pixels
  });

  const sm = window.matchMedia( "(max-width: 999px)" );
  const md = window.matchMedia( "(min-width: 1000px)" );

// MENU

var menuShow = $('.menu-res').hasClass('show');

function desplazar () {
  $('.menu-res').toggleClass('show');
  $('#hamburger').toggleClass('top');
  $('#menuIconFirst').toggleClass('menuicon_first');
  $('#menuIconSecond').toggleClass('menuicon_second');
  $('#menuIconThird').toggleClass('menuicon_third');
}

$('#hamburger').on('click', function(e) {
  desplazar();
  e.stopPropagation();
  menuShow = $('.menu-res').hasClass('show');
})

window.addEventListener('click', function(e){
    if ( menuShow = true ) {
      $('.menu-res').removeClass('show');
      $('#hamburger').removeClass('top');
      $('#menuIconFirst').removeClass('menuicon_first');
      $('#menuIconSecond').removeClass('menuicon_second');
      $('#menuIconThird').removeClass('menuicon_third');
    }
})

// MENU SCROLL DESKTOP

var quienesSomos = $('#quienesSomos').offset();
var gallery = $('#gallery').offset();
var contact = $('#contact').offset();
var desktopNav = $('.menu-desktop-list')

window.addEventListener('scroll', function(){
  if ($(window).scrollTop() >= quienesSomos.top) {
  desktopNav.children('li:nth-child(1)').addClass('menu-active');
  desktopNav.children('li:nth-child(2)').removeClass('menu-active');
  } else {
  desktopNav.children('li:nth-child(1)').removeClass('menu-active');
  }
  if ($(window).scrollTop() + 50 >= gallery.top) {
  desktopNav.children('li:nth-child(1)').removeClass('menu-active');
  desktopNav.children('li:nth-child(2)').addClass('menu-active');
  desktopNav.children('li:nth-child(3)').removeClass('menu-active');
  }
  if ($(window).scrollTop() + 50 >= contact.top) {
  desktopNav.children('li:nth-child(2)').removeClass('menu-active');
  desktopNav.children('li:nth-child(3)').addClass('menu-active');
  }
})

$(".menu-desktop-list li a").click(function() {
    var liText = $(this).attr('href');
    console.log(liText);
    $('html, body').animate({
        scrollTop: $(liText).offset().top
    }, 500);
});
