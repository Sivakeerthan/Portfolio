$('nav-section').click(function () {
    var section = $(this).attr('href');
    $(document).animate({
        scrollTop: $(section).offset().top
    },3000)
});