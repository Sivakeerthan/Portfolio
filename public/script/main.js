//var loginLink = document.getElementById("Login");
//loginLink.addEventListener('click',function() {
//    window.open('../login.php');
//});
var lastScrollTop=0;
$("#navbar").addClass('navbar-relative');
    $(window).scroll(function () {
        var top = $("#navbar").offset().top;
        if($(window).scrollTop() <= top){
            $("#navbar").removeClass('navbar-relative');
            $("#navbar").addClass('navbar-relative');
        }
        if($(window).scrollTop() > top){
            $("#navbar").removeClass('navbar-relative');
            $("#navbar").addClass('navbar-fixed');
        }
        var st =$(this).scrollTop;
        if(st>lastScrollTop){
            $(".logodiv").css('top',lastScrollTop-((lastScrollTop/100)*st));
            $(".logodiv").css('left',lastScrollTop-((lastScrollTop/100)*st));
        }
        else{

        }
        lastScrollTop = st;
    });

    $(document).ready(function () {
        $('html, body').animate({
            scrollTop: $("html,body").offset().top
        },3000);
    });

    $(document).ready(function () {
        $(".tooltiptext").addClass('visible');
    });
    $(".logodiv").click(function () {
        $(".logodiv").animate({
            left: '100%',
            top: '100%',
            opacity:0,
            visibility:'hidden'
        },3000);
        $('html, body').animate({
            scrollTop: $("#mainpage").offset().top
        },3000);


    });




