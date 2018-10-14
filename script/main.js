
//Changing BG-Image
$(document).ready(function () {

    $("a").click(function () {
        var link = $(this).attr('href');
        if(link == "#About" ){
            $(".layer2").css('background-image','url("../img/bg2.jpg")')
        }
        if(link == "#Projects"){
            $(".layer2").css('background-image','url("../img/bg3.jpg")')
        }
        if(link == "#Files"){
            $(".layer2").css('background-image','url("../img/bg4.jpg")')
        }
        if(link == "#Contact"){
            $(".layer2").css('background-image','url("../img/bg5.jpg")')
        }
    });


});

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
        //var st =$(this).scrollTop;
       //if(st>lastScrollTop){
       //    $(".logodiv").css('top',0-lastScrollTop);
       //    $(".logodiv").css('left',0-lastScrollTop);
       //}
       //else{

       //}
       //lastScrollTop = st;
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




//StepProgressBar
$(document).ready(function() {

    $('.tabs').tabs();

    $('.progress-li').mouseenter(function () {
        var title = $(this ).find('.determinate').attr("title");
        var value = $(this).find('span').text();
        console.log("Title:"+title+"<br>Value:"+value);
        $(this).find('.determinate').attr("title",value);
        $(this).find('span').text(title);
    }).mouseleave(function () {
        var title2 = $(this).find('.determinate').attr("title");
        var value2 = $(this).find('span').text();
        $(this ).find(".determinate").attr("title",value2);
        $(this).find("span").text(title2);
    });

});

//carousel-Slider
$(document).ready(function () {
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
});
});


//Password Validator

function validatePW() {
    var corr = "gibbiX12345";
    var val = $("#pw-input").val();
    if(val === corr){
        M.toast({html: "Zugriff erfolgreich!"});
        $(".secure-form").css("display","none")
        $(".hidden-files").css("display","block");

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

        $(window).load(function () {
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
        });

    }
    else{
        M.toast({html: "Der eingegebene Schlüssel ist falsch!"});
    }
}

//PHPMailer result output
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
if(getUrlParameter("result")=="fail") {
    M.toast({html: "Ihre Nachricht konnte nicht gesendet werden. Versuchen Sie es bitte Später erneut!"});
}
if(getUrlParameter("result")=="success") {
    M.toast({html: "Ihre Nachricht wurde erfolgreich gesendet!"});
}

//Responsive Sidenav
$(document).ready(function () {
   $('.sidenav').sidenav();
    $('.sidenav > .tab').tabs();
});


