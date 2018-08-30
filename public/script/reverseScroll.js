$(document).ready(function(){
        $(window).scroll(function () {
            $('.layer1').css('transform', 'translate3d(0,' + $(this).scrollTop() * 2 + 'px, 0)');

        }).niceScroll();

});