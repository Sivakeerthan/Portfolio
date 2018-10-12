//Fixed navbar
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
        if(location.hash == "") {
            $("#start").css("display","block");
            $('html, body').animate({
                scrollTop: $("html,body").offset().top
            }, 3000);
        }

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
        if($('html,body').scrollTop >= $("#mainpage").offset().top){
            $("#start").css('display','none');
        }


    });


//Changing BG-Image
$(document).ready(function () {
    var home = $("#Home").offset().bottom;
    var about = $("#About").offset().top;
    var files = $("#Files").offset().top;
    var wst = $(window).scrollTop;

    if(wst<=home){
        $(".layer2").css('background-image','url("https://wallpapershome.com/images/wallpapers/landscape-3840x2160-flat-4k-5k-fog-iphone-wallpaper-forest-blue-11927.jpg")')
    }
    if(wst<=about){
        $(".layer2").css('background-image','url("http://bdfjade.com/data/out/54/5612226-flat-wallpaper.jpg")')
    }
    if(wst<=files){
        $(".layer2").css('background-image','url("https://i0.wp.com/get.wallpapers8k.com/wallpapers/a/2/3/90096.jpg")')
    }
});

//StepProgressBar
$(document).ready(function() {

    $('.tabs').tabs();

    $('.progress').mouseover(function () {
        
    })

});

//carousel-Slider
$(document).ready(function () {
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
});
});


//Password Validator
var access_key = "gibbiX12345";
function validatePW() {
    if($("#pw-input").val() == access_key){
        M.toast({html: "Zugriff erfolgreich!"});
        $(".secure-form").css("display","none")
        $(".hidden-files").css("display","block");
        do{
            $(".hidden-files").html('  <div class="preloader-wrapper small active">\n' +
                '    <div class="spinner-layer spinner-green-only">\n' +
                '      <div class="circle-clipper left">\n' +
                '        <div class="circle"></div>\n' +
                '      </div><div class="gap-patch">\n' +
                '        <div class="circle"></div>\n' +
                '      </div><div class="circle-clipper right">\n' +
                '        <div class="circle"></div>\n' +
                '      </div>\n' +
                '    </div>\n' +
                '  </div>');
        }while($(".hidden-files").has(".row"));
        try {
            $.get("templates/download-cards.html", function (temp_string) {
                if(temp_string!=null){
                    $(".hidden-files").html(temp_string);
                }
                if(temp_string==null) {
                    $(".hidden-files").html("<h2>Uups...Da ist was schief gelaufen!</h2>" +
                        "<p>Details sind im Console Log ersichtlich</p>");

                }
            }, 'html')
        }catch(e){
            console.log("JQuery $.get Error:"+e.message);
        }


    }
    else{
        M.toast({html: "Der eingegebene Schlüssel ist falsch!"});
    }
}



