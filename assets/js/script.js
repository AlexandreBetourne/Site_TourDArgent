// STYLE MAP ACCESS
var style=[
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]

$(document).ready(function () {
    // MENU FIXE A PARTIR DE 670px
    $(window).scroll(function () {
        if ($(window).scrollTop() > 750) {
            $('header').addClass("fixe");
            $('#home').addClass("FixedHeaderError");
            $('#top_img').addClass("FixedHeaderError");
        } else {
            $('header').removeClass("fixe");
            $('#home').removeClass("FixedHeaderError");
            $('#top_img').removeClass("FixedHeaderError");
        }
    })
    
    //SCROLL ON CLICK TITLE HOME
    $("#double_arrow_scroll").click(function() {
    $('html,body').animate({
        scrollTop: $("header").offset().top},
        'slow');
    });
    
    //SCROLL ON CLICK PRESENTATION
    $("#double_arrow_scroll2").click(function() {
    $('html,body').animate({
        scrollTop: 1270},
        'slow');
    });
    
    // MENU BURGER
    $('#burgerButton').click(function(){
        $('#burgerMenu').fadeIn();
    })
    $("#hideBurger").click(function(){
        $("#burgerMenu").fadeOut();
    })
    
    // MASK CARTE & MENU
    $("#showCarte").click(function(){
        $("#mask_carte").fadeIn();
        window.scrollTo(0, 0);
    })
    $("#showMenue").click(function(){
        $("#mask_menue").fadeIn();
        window.scrollTo(0, 0);
    })
    $("#hideCarte").click(function(){
        $("#mask_carte").fadeOut();
    })
    $("#hideMenue").click(function(){
        $("#mask_menue").fadeOut();
    })
    document.addEventListener('keyup', function(ev){
        if(ev.keyCode == 27) $("#mask_carte").fadeOut();
    })
    document.addEventListener('keyup', function(ev){
        if(ev.keyCode == 27) $("#mask_menue").fadeOut();
    })
    
    // BOOKING POP UP
    $(".table").click(function(){
        $(this).css( "background-color", "transparent" );
        $(this).css( "color", "black" );
        $(".room").css( "background-color", "black");
        $(".room").css( "color", "white");
        $(this).css( "height", "20px" );
        $(".room").css( "height", "50px" );
        $(this).css( "line-height", "2" );
        $(".room").css( "line-height", "2" );
        $("form").fadeIn();
    })
    $(".room").click(function(){
        $(this).css( "background-color", "transparent" );
        $(this).css( "color", "black" );
        $(".table").css( "background-color", "black");
        $(".table").css( "color", "white");
        $(this).css( "height", "20px" );
        $(".table").css( "height", "50px" );
        $(this).css( "line-height", "2" );
        $(".table").css( "line-height", "2" );
        $("form").fadeIn();
    })
    $(".closeButton").click(function(){
        $("#popUpBooking").fadeOut();
        $(".opacityMask").fadeOut();
    })
    $("#bookingButton").click(function(){
        $("#popUpBooking").fadeIn();
        $(".opacityMask").fadeIn();
    })
    document.addEventListener('keyup', function(ev){
        if(ev.keyCode == 27) {
            $("#popUpBooking").fadeOut();
            $(".opacityMask").fadeOut();
        }
    })
}); 