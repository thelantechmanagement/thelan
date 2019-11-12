jQuery(function ($) {

	'use strict';



	// -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------
    
    function stickMenu() {
        if ($(".navbar").length) {
            var nav = $('.navbar'),
            scrolled = false,
            top = $(window).scrollTop();

            if (110 < top && !scrolled) {
                nav.addClass('sticky animated fadeInDown');
                scrolled = true;
            } else {
                nav.removeClass('sticky animated fadeInDown');
                scrolled = false;
            }
        }
    }



    // -------------------------------------------------------------
    //  	Offcanvas Menu
    // -------------------------------------------------------------

    
    (function () {
        var menutoggle = $(".menu-toggle");
        var offcanvasmenu = $("#offcanvas-menu");
        var closemenu = $(".close-menu");

        menutoggle.on("click" ,function(){
            offcanvasmenu.addClass("toggled");
            return false;
        });

        closemenu.on("click" ,function() {
            offcanvasmenu.removeClass("toggled");
            return false;
        });
    }());



    // -------------------------------------------------------------
    //  Offcanvas Menu Sub-menu
    // -------------------------------------------------------------
    if ( $('.dropBar').length) {
        $('.dropBar').on("click" ,function(){
            $(this).parent().find('ul').slideToggle();
            return false;
        });
    }



    // -------------------------------------------------------------
    //      Chat-Box 
    // -------------------------------------------------------------

    (function () {
        var openbox = $("#open-box");
        var mailbox = $(".mail-box");
        var closebox = $(".close-box");

        openbox.on("click" ,function(){
            mailbox.addClass("active");
            return false;
        });

        closebox.on("click" ,function() {
            mailbox.removeClass("active");
            return false;
        });
    }());


    
    // -------------------------------------------------------------
    // Sub-menu
    // -------------------------------------------------------------
    if ( $('.dropmenu').length) {
        $('.dropmenu').on("click" ,function(){
            $(this).parent().find('ul').slideToggle();
            return false;
        });
    }



    // -------------------------------------------------------------
    //      Single-Page-Menu-Scrolling  Easy Plugin
    // -------------------------------------------------------------

    function singlePageScroll() {
        $('a.page-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
               scrollTop: $($anchor.attr('href')).offset().top 
           }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    
    // -------------------------------------------------------------
    //      Home Page Four Top Bar Show
    // -------------------------------------------------------------

    jQuery(function() {
        $("#link-button").on("click" , function() {
            $(".top-bar").toggleClass("active");
        });
    });






    // -------------------------------------------------------------
    //      Map/Contact-Box-Remove
    // -------------------------------------------------------------

    (function () {
        var mapview = $(".map-view");
        var contactsection = $(".contact-section-one");
        var formview = $(".form-view");

        mapview.on("click" ,function() {
            contactsection.fadeOut('3000');
            return false;
        });

        formview.on("click" ,function() {
            contactsection.fadeIn('3000');
            return false;
        });
    }());




    // ------------------------------------------------------------------
    // Revulation Slider   {slidertwo}
    // ------------------------------------------------------------------

    (function () {
        $('.tp-banner').revolution({
            delay:9000,
            startwidth:1170,
            startheight:1000,
            hideThumbs:10,
            fullWidth:"on",
            forceFullWidth:"on",
            onHoverStop:"off",
            navigationType:"none",
            navigationStyle:"preview4",
            spinner:"off",
            hideTimerBar:"on"
        });
    }());




    // -------------------------------------------------------------
    //      LightBox-Js
    // -------------------------------------------------------------

    if ($('#lightBox').length) {
        $('#lightBox').poptrox({
            usePopupCaption: true,
            usePopupNav: true,
            popupPadding: 0
        });
    }





    // -------------------------------------------------------------
    //      Parallax-Js
    // -------------------------------------------------------------

    function bgParallax() {
        if ($(".parallax-section").length) {
            $(".parallax-section").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var doParallax = -(resize/5);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }

    


    // -------------------------------------------------------------
    //  	expert-Slider
    // -------------------------------------------------------------

    if ($('.expert-carousel').length) {
        $('.expert-carousel').owlCarousel({
            loop:true,
            autoplay:true,
            margin:20,
            items:3,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }



    // -------------------------------------------------------------
    //      service-Slider
    // -------------------------------------------------------------

    if ($('.service-carousel').length) {
        $('.service-carousel').owlCarousel({
            loop:true,
            autoplay:true,
            margin:20,
            items:3,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }



    // -------------------------------------------------------------
    //      Progress Bar
    // -------------------------------------------------------------
    
    function progressBar() {
        $('.progressSection').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $.each($('div.progress-bar'),function(){
                    $(this).css('width', $(this).attr('aria-valuenow')+'%');
                });
                $(this).off('inview');
            }
        });
    }




    /*------------------------------------------
         STYLE SWITCHER
    -------------------------------------------  
        // HTML FOR COLOR SWITCHER
        var switcherHtml = '<div class="style-switcher-box"><div class="switcher-inner"><h5>Style Switcher</h5><div class="main-list"><div class="list"><span class="list-title">Skin color</span><div class="sublist"><ul class="color-changer"><li class="color-default"></li><li class="color-style1"></li><li class="color-style2"></li><li class="color-style3"></li><li class="color-style4"></li><li class="color-style5"></li><li class="color-style6"></li><li class="color-style7"></li><li class="color-style8"></li><li class="color-style9"></li><li class="color-style10"></li></ul></div></div><div class="list pattern-bg"><span class="list-title">Skin pattern</span><div class="sublist"><ul class="pattern-changer"><li class="pattern-one"></li><li class="pattern-two"></li><li class="pattern-three"></li><li class="pattern-four"></li><li class="pattern-five"></li><li class="pattern-six"></li><li class="pattern-seven"></li><li class="pattern-eight"></li><li class="pattern-nine"></li><li class="pattern-ten"></li></ul></div></div><div class="list layout"><span class="list-title">Layout</span><div class="sublist"><ul class="layout-sw"><li>Full width</li><li class="box">Box</li></ul></div></div></div><p><span>Note: </span> This template is build with SASS. The skin color is only demo. You can change the color scheme as your like. </p> </div><button class="toggle-btn"><i class="fa fa-cog"></i></button> </div>';
        var blankStyleInject = '<link href="assets/css/blank-color.css" rel="stylesheet" title="switchstyle">';
        var htmlHead = $("head");

            $("body").append(switcherHtml);
            htmlHead.append(blankStyleInject);


        function styleSwitcher() {
            if ($(".style-switcher-box").length) {
                var switcherHolder = $(".style-switcher-box"),
                    btn = switcherHolder.find(".toggle-btn"),
                    colorChangerBtn = $(".style-switcher-box .color-changer li"),
                    layoutChangerBtn = $(".style-switcher-box .layout-sw li"),
                    links = document.getElementsByTagName("link");
                var body = $("body");

                for (var i = 0; i <= links.length; i++){
                    var title = links[i].getAttribute("title");
                    if ( title == "switchstyle") {
                        var targetLink = links[i];
                        var href = links[i].getAttribute("href");
                        break;
                    }
                }


                btn.on("click", function() {
                    switcherHolder.toggleClass("toggle-switcherbox");
                })

                colorChangerBtn.on("click", function() {
                    var $this = $(this);
                    var styleFileName = $this.attr("class");
                    targetLink.href = "assets/css/" + styleFileName + ".css";
                });

                layoutChangerBtn.on("click", function(e) {
                    var $this = $(this);
                    if ( $this.hasClass("box") ) {
                        body.addClass("box-layout");
                    } else {
                        body.removeClass("box-layout");
                    }
                })
            }
        }

        styleSwitcher();*/



    //-------------------------------------------------------
    //  	counter Section
    //-------------------------------------------------------
    
    function funFactCounting() {
        if ($('.counting-section').length) {
            $('.counting-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.timer').each(function () {
                        var $this = $(this);
                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).unbind('inview');
                }
            });
        }
    }



    // -------------------------------------------------------------
    //      Google Map
    // -------------------------------------------------------------

    if ($('#googleMap').length) {
        google.maps.event.addDomListener(window, 'load', init);
        
        function init() {
            var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 12,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(38.895734, -77.009435), // Washington DC

                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},
                    {"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},
                    {"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
                    {"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},
                    {"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]},
                    {"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},
                    {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},
                    {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},
                    {"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},
                    {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},
                    {"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},
                    {"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},
                    {"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},
                    {"featureType": "water","elementType": "geometry","stylers": [{"color": "#e9e9e9"},{"lightness": 17}]},
                    {"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#54be73"}]}]};

                            // Get the HTML DOM element that will contain your map 
                            var mapElement = document.getElementById('googleMap');

                            // Create the Google Map using our element and options defined above
                            var map = new google.maps.Map(mapElement, mapOptions);

                            // Let's also add a marker while we're at it
                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(38.895734, -77.009435),
                                map: map,
                                title: 'Snazzy!'
                            });
                        }
                    }



                    if ($('#menuMap').length) {
                        google.maps.event.addDomListener(window, 'load', init);
                        
                        function init() {
                            var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 12,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(38.895734, -77.009435), // Washington DC

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},
                    {"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},
                    {"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
                    {"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},
                    {"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]},
                    {"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},
                    {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},
                    {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},
                    {"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},
                    {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},
                    {"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},
                    {"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},
                    {"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},
                    {"featureType": "water","elementType": "geometry","stylers": [{"color": "#e9e9e9"},{"lightness": 17}]},
                    {"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#54be73"}]}]};

                            // Get the HTML DOM element that will contain your map 
                            var mapElement = document.getElementById('menuMap');

                            // Create the Google Map using our element and options defined above
                            var map = new google.maps.Map(mapElement, mapOptions);

                            // Let's also add a marker while we're at it
                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(38.895734, -77.009435),
                                map: map,
                                title: 'Snazzy!'
                            });
                        }
                    }



    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    function backToTopBtnAppear() {
        if ($("#toTop").length) {
            var windowpos = $(window).scrollTop(),
            backToTopBtn = $("#toTop");

            if (windowpos > 300) {
                backToTopBtn.fadeIn();
            } else {
             backToTopBtn.fadeOut();
         }
     }
 }

 function backToTop() {
    if ($("#toTop").length) {
        var backToTopBtn = $("#toTop");
        backToTopBtn.on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            
            return false;
        })
    }
}




	// -------------------------------------------------------------
    // 		Preloader
    // -------------------------------------------------------------

    function preloader() {
        if ($('#preloader').length) {
            $('#preloader').delay(500).fadeOut('slow');
        }
    }
    



    // -------------------------------------------------------------
    //      WHEN WINDOW LOAD
    // -------------------------------------------------------------

    $(window).on("load", function() {

        backToTop();

        preloader();

        new WOW().init();

        funFactCounting();

        progressBar();

        bgParallax();
    })



    // -------------------------------------------------------------
    //      WHEN WINDOW SCROLL
    // -------------------------------------------------------------
    $(window).on("scroll", function() {

        stickMenu();

        backToTopBtnAppear();

        singlePageScroll();

        bgParallax();
    });


    $( document ).ready(function() {

        $( ".cross" ).hide();
        $( ".menu" ).hide();
        $( ".hamburger" ).click(function() {
            $( ".menu" ).slideToggle( "slow", function() {
                $( ".hamburger" ).hide();
                $( ".cross" ).show();
            });
        });

        $( ".cross" ).click(function() {
            $( ".menu" ).slideToggle( "slow", function() {
                $( ".cross" ).hide();
                $( ".hamburger" ).show();
            });
        });

    });



});   // Jquery-End