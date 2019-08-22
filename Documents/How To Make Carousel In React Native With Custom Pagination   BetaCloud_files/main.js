
/* JQuery
 -------------------------
*/
var mailSent = false;


$(function(){

    //Contact form
    $("#contact-form").submit(function(e){
        e.preventDefault();
        var name = $("#first-name").val();
        var email = $("#email").val();
        var message = $("#description").val();

        //Disable contact button
        $("#contact-submit-btn").html("Sending Message...");
        $("#contact-submit-btn").attr("disabled",true);

        $.ajax({
            'url':APP_URL+'/api/contacts',
            'type':'post',
            'data':{
                'name':name,
                'email':email,
                'message':message
            },
            error:function(){
                contactError("Failed to contact, network error");
            },
            success:function(res){
                dataLayer.push({'event':'contact-submitted','conversionValue':100});

                if(res.status=="success"){

                    $("#contact-submit-btn").html('Thanks for contacting!');
                    dataLayer.push({'event':'contact-success','conversionValue':100});
                    toastr.success("We have received your message, will reply asap!");
                }else if(res.status=="error"){

                    dataLayer.push({'event':'contact-error'});
                    contactError(res.data);
                }else{

                    dataLayer.push({'event':'contact-error'});
                    contactError("Failed to contact, server error");
                }
            }
        })

    });

    //Newsletter
    $(".footer-subscribe-form").submit(function(e){
        e.preventDefault();
        if(mailSent){
            return;
        }
        var clickedElement = this;
        var emailField = $(".footer-subscribe-email",this);
        var email = emailField.val();
        emailField.val("Confirming subscription...");
        emailField.attr("disabled",true);

        $.ajax({
            'url': APP_URL+'/api/subscribers',
            'type':"post",
            'data':{
                'email':email
            },
            error:function(){
                //Allow re-try
                newsletterError(clickedElement,email ,"Subscription failed, network error");
            },
            success:function(res){   
                console.log(res);             
               
                if(res.status=="success"){
                    //All went good
                    //emailField.val("Thank you, check confirmation email!");
                    emailField.val("Thank you for subscribing!");
                    emailField.attr("type","text");
                    //toastr.success("We sent you an email with confirmation link.");    
                    toastr.success("Newsletter subscription is confirmed.");    
                    mailSent = true;
                }
                else if(res.status=="error"){
                    //Allow re-try
                    newsletterError(clickedElement,email,res.data);
                }
                else{                        
                    //Allow re-try
                    newsletterError(clickedElement,email,"Subscription failed, server error");
                }
            }
        })
        
    });
})
 
function newsletterError(clickedElement,email,message){
    var emailField = $(".footer-subscribe-email",clickedElement);
    emailField.val(email);
    emailField.attr("disabled",false);
    emailField.focus();  

    toastr.error(message);
}

function contactError(message){
    toastr.error(message);

    //Disable contact button
    $("#contact-submit-btn").html('Send Message <i class="fas fa-arrow-right"></i>');
    $("#contact-submit-btn").attr("disabled",false);
    
}

 /*========Window Load Function========*/
    $(window).on("load", function() {
        "use strict";

 /* smooth scroll
  -------------------------------------------------------*/
      $.scrollIt({

        easing: 'swing',      
        scrollTime: 900,       
        activeClass: 'active',
        onPageChange: null,  
        topOffset: -70,
        upKey: 38,              
        downKey: 40

      });

 /* Navbar
  -------------------------------------------------------*/
     var win = $(window);
           
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 30) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });
    $('.popup-video').magnificPopup({
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });
    /* close navbar-collapse when a  clicked */
    $(".navbar-nav a").not('.dropdown-toggle').on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    /* close navbar-collapse when a  clicked */
    $('.dropdown').on('click', function () {
        $(this).toggleClass("show");
    });
         // ANSWER AND QUESTIOn
            $('.collapse').on('shown.bs.collapse', function () {
            $(this).prev().addClass('active');
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).prev().removeClass('active');
        });

        $(window).ready(function() {
        $('#preload').delay(200).fadeOut('fade');
    });
              (function(){
        if($(".services").length > 0) {
            var a = 0;
            $(window).on('scroll', function() {
                var oTop = $('.services').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.services .counter-item .counter').each(function() {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                            }
                        });
                    });
                    a = 1;
                }
            });
        }

    })();

     /*========Portfolio Isotope Setup========*/
    if ($(".portfolio-section").length) {
        var $elements = $(".portfolio-section");
        $elements.isotope();
        $(".port-filter ul li").on("click", function() {
            $(".port-filter ul li").removeClass("filter-item");
            $(this).addClass("filter-item");
            var selector = $(this).attr("data-filter");
            $(".portfolio-section").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        });
    }
    var wind = $(window);
    var singlePage = $('#js-singlePage-container').children('div');
    $('#js-grid-slider-projects').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: true,
        showPagination: false,
        rewindNav: false,
        scrollByPage: false,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 1,
            options: {
                caption: '',
                gapVertical: 10,
            }
        }],
        gapHorizontal: 0,
        gapVertical: 25,
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageAnimation: 'fade',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var indexElement = $(element).parents('.cbp-item').index(),
                item = singlePage.eq(indexElement);

            item.find('img').each(function(index, el) {
                var attr = el.getAttribute('data-cbp-src');

                if (attr) {
                    el.setAttribute('src', attr);
                    el.removeAttribute('data-cbp-src');
                }
            });

            this.updateSinglePage(item.html());
        },
    });

     /* Pricing table
  -------------------------------------------------------*/
        var e = document.getElementById("pricing-table-monthly"),
            d = document.getElementById("pricing-table-yearly"),
            t = document.getElementById("switcher"),   
            m = document.getElementById("monthly-section"),
            y = document.getElementById("yearly-section");

        $('#pricing-table-monthly').on('click', function () {
            t.checked = false;
            e.classList.add("toggler-pircing-is-active");
            d.classList.remove("toggler-pircing-is-active");
            m.classList.remove("inactive");
            y.classList.add("inactive");
        });

        $('#pricing-table-yearly').on('click', function () {
            t.checked = true;
            e.classList.add("toggler-pircing-is-active");
            d.classList.remove("toggler-pircing-is-active");
            m.classList.remove("inactive");
            y.classList.add("inactive");
        });

        $('#switcher-item').on('click', function () {
            d.classList.toggle("toggler-pircing-is-active");
            e.classList.toggle("toggler-pircing-is-active");
            m.classList.toggle("inactive");
            y.classList.toggle("inactive");
        });
    /* Products
  -------------------------------------------------------*/
        $("#b-caro").owlCarousel({
      navigation:  true,
      pagination:false,
      slideSpeed: 800,
      nav:true,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: false,
      singleItem: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      loop: true,
      responsive:{
        0:{
          items:1
        },
        680:{
          items:1
        },
        1000:{
          items:2
        }
      }
    });
    /* Clients Testimonials
  -------------------------------------------------------*/
        $("#c-caro").owlCarousel({
      navigation:  true,
      pagination:false,
      slideSpeed: 800,
      nav:true,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: false,
      singleItem: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      loop: true,
      responsive:{
        0:{
          items:1
        },
        680:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
        
          /* Slider background
  -------------------------------------------------------*/
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items:1,
      nav:false,
      loop:true,
      dots:true,
      autoplay:true
 
  });

  $("#client-logo").owlCarousel({
                loop: true,
                nav: false,

                dots: false,

                autoplay: false,
                autoplayTimeout: 3000,
                autoplayHoverPause:false,
                smartSpeed: 450,
                responsiveClass: true,
                responsive: {
                        0: {
                                items: 2,
                        },
                        600: {
                                items: 2,
                        },
                        1000: {
                                items: 5,
                        }
                }
            });   
       // ANSWER AND QUESTIOn
            $('.collapse').on('shown.bs.collapse', function () {
            $(this).prev().addClass('active');
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).prev().removeClass('active');
        });
             $("#slider").vegas({
          slides: [
              { src: "assets/images/banner/dummy-image.jpg" },
              { src: "assets/images/banner/dummy-image.jpg" },
              { src: "assets/images/banner/dummy-image.jpg" },
              { src: "assets/images/banner/dummy-image.jpg" }
          ]
      });
});
        $(window).ready(function() {
        $('#preload').delay(200).fadeOut('fade');
    });