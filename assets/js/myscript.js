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

$(".menu-desktop-list li a").click(function() {
    var liText = $(this).attr('href');
    console.log(liText);
    $('html, body').animate({
        scrollTop: $(liText).offset().top
    }, 500);
});
