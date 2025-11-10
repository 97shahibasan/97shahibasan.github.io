/* Navbar scroll effect */
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar-custom').addClass('scrolled');
    } else {
        $('.navbar-custom').removeClass('scrolled');
    }
});