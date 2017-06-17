$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('.arrow').fadeIn(400);    // Fade in the arrow
    } else {
        $('.arrow').fadeOut(400);   // Else fade out the arrow
    }
});
$('.arrow').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});