//var loginLink = document.getElementById("Login");
//loginLink.addEventListener('click',function() {
//    window.open('../login.php');
//});

    $(window).scroll(function () {
        var top = $('#navbar').offset().top;
        if($("#mainpage").offset().top >= top){
            $('navbar').css({position: "fixed",top:"0"});
            $("#navbar").removeClass('navbar-absolute').addClass('navbar-fixed');
        }
        else{
            $('navbar').css({position: "relative",top:"0"});
            $("#navbar").removeClass('navbar-fixed').addClass('navbar-relative');
        }
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




