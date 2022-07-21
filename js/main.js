$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: false,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
                600:{
                    margin: 20,
                    nav: true,
                  items: 2
                },
                1000:{
                    margin: 20,
                    stagePadding: 0,
                    nav: true,
                  items: 4
                }
            }
        });            
    }
    if ( $('.owl-3').length > 0 ) {
      $('.owl-3').owlCarousel({
          center: false,
          items: 1,
          loop: true,
          stagePadding: 0,
          margin: 20,
          smartSpeed: 1000,
          autoplay: false,
          nav: true,
          dots: true,
          pauseOnHover: false,
          responsive:{
            300:{
              margin:20,
              nav: true,
            items: 2
          },
            400:{
              margin: 20,
              nav: true,
            items: 3
          },
            500:{
              margin: 20,
              nav: true,
            items: 4
          },
              600:{
                  margin: 20,
                  nav: true,
                items: 4
              },
              700:{
                margin: 20,
                nav: true,
              items: 5
            },
            800:{
              margin: 20,
              nav: true,
            items: 6
          },
          900:{
            margin: 20,
            nav: true,
          items: 7
        },
              1000:{
                  margin: 20,
                  stagePadding: 0,
                  nav: true,
                items: 9
              }
          }
      });            
  }
  if ( $('.owl-4').length > 0 ) {
    $('.owl-4').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 20,
        smartSpeed: 1000,
        autoplay: false,
        nav: true,
        dots: true,
        pauseOnHover: false,
        responsive:{
            600:{
                margin: 20,
                nav: true,
              items: 2
            },
            1000:{
                margin: 20,
                stagePadding: 0,
                nav: true,
              items: 3
            }
        }
    });            
}

})