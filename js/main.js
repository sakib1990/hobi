(function ($) {
  'use strict';

// meanmenu

  jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
  });


  $('.info-bar').on('click',function(){
      $('.extra-info').addClass('info-open');
  })

  $('.close-icon').on('click',function(){
    $('.extra-info').removeClass('info-open');
})

  // slider-active
  
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function(e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: true,
        fade: true,
  arrows: false,
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
        ]
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();


  // blog-active
  $('.blog-active').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });


  // testimonial-active
  $('.testimonial-active').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></i></button>',
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });


  $('.testimonial-item-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonial-nav'
  });
  $('.testimonial-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-item-active',
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0

  });


  // brand-active
  $('.brand-active').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });

  // protfolio active
  var grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })

  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    grid.isotope({ filter: filterValue });
  });


  
  // magnific popup
  $('.popup-img').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    
  });


// counterUp
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

// types

$(".type").typed({
  strings: [
    "hello",
    "my",
    "name"
  ]
});

// wow js
new WOW().init();

// niceSelect
$('select').niceSelect();

})(jQuery);