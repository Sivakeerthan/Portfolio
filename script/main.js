
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

    });


// Refresh
    $(document).ready(function () {
        $('html, body').animate({
            scrollTop: $("html,body").offset().top
        },3000);

        if($(window).height > $(window).width){
            $(".layer2").css("background-size","auto 100%");
        }
        if($(window).height < $(window).width){
            $(".layer2").css("background-size","100% auto");
        }
    });


//Start-Page Animations

var lastScrollTop=0;
    $(document).ready(function () {
        $(".tooltiptext").addClass('visible');
        var st =$(this).scrollTop;
        if(st>lastScrollTop){
            $(".logodiv").css('top',0-lastScrollTop);
            $(".logodiv").css('left',0-lastScrollTop);
        }
        else{

        }
        lastScrollTop = st;
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


//Changing BG-Image
$(document).ready(function () {
    var home = $("#Home").offset().top;
    var about = $("#About").offset().top;
    var files = $("#Files").offset().top;
    var wst = $(window).scrollTop;

    if(wst>=home){
        $(".layer2").css('background-image','url("https://wallpapershome.com/images/wallpapers/landscape-3840x2160-flat-4k-5k-fog-iphone-wallpaper-forest-blue-11927.jpg")')
    }
    if(wst>=about){
        $(".layer2").css('background-image','url("http://bdfjade.com/data/out/54/5612226-flat-wallpaper.jpg")')
    }
    if(wst>=files){
        $(".layer2").css('background-image','url("https://i0.wp.com/get.wallpapers8k.com/wallpapers/a/2/3/90096.jpg")')
    }
});

//StepProgressBar
$(document).ready(function() {
    $('.progressBar.sg').stepProgressBar({
        currentValue: 100,
        steps: [
            {value: 100,
                topLabel:"Sehr Gut"},
            {value: 75,
                topLabel:"Gut"},
            {value: 50,
                topLabel:"Bekannt"},
            {value: 25,
                topLabel:"Neu"}
        ]
    });
    $('.progressBar.g').stepProgressBar({
        currentValue: 75,
        steps: [
            {value: 100,
            topLabel:"Sehr Gut"},
            {value: 75,
            topLabel:"Gut"},
            {value: 50,
            topLabel:"Bekannt"},
            {value: 25,
            topLabel:"Neu"}
        ]
    });
    $('.progressBar.b').stepProgressBar({
        currentValue: 50,
        steps: [
            {value: 100,
                topLabel:"Sehr Gut"},
            {value: 75,
                topLabel:"Gut"},
            {value: 50,
                topLabel:"Bekannt"},
            {value: 25,
                topLabel:"Neu"}
        ]
    });
    $('.progressBar.n').stepProgressBar({
        currentValue: 25,
        steps: [
            {value: 100,
                topLabel:"Sehr Gut"},
            {value: 75,
                topLabel:"Gut"},
            {value: 50,
                topLabel:"Bekannt"},
            {value: 25,
                topLabel:"Neu"}
        ]
    });
});



