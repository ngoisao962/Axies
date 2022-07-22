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
        autoplay: true,
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
var countDownDate = new Date("July 23, 2022 2:37:25").getTime();

      var x = setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var x = document.querySelectorAll("#demo");

        for (let i = 0; i <= x.length - 1; i++) {
          x[i].innerHTML = hours + ":" + minutes + ":" + seconds;
          if (distance < 0) {
            clearInterval(x[i]);
            x[i].innerHTML = "EXPIRED";
          }
        }
      }, 1000);