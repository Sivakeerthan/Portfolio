$('nav-section').click(function () {
    var section = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(section).offset().top
    },30000)
});

