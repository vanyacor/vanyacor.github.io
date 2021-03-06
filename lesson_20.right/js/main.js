$(document).ready(function(){
    $('.features-slider').slick({
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
              
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  prevArrow: '<button class="prev arrow"> </button>',
                  nextArrow: '<button class="next arrow"> </button>',
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  prevArrow: '<button class="prev arrow"> </button>',
                  nextArrow: '<button class="next arrow"> </button>',
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
        ]
    });
});