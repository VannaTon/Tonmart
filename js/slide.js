var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6, // Default for larger screens
    spaceBetween: 30, // Space between slides in pixels
    // loop: true, //
    speed: 400, // Slide transition speed
    centeredSlides: false, // Do not center slides
    freeMode: false, // Prevent free scrolling
    navigation : {
        nextEl: '.next',
        prevEl: '.prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
  });

  var brand_swiper = new Swiper(".brand-carousel", {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: ".brand-next",
      prevEl: ".brand-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 4,
      },
    }
  });
  var products_swiper = new Swiper(".products-carousel", {
    slidesPerView: 5,
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: ".products-carousel-next",
      prevEl: ".products-carousel-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 6,
      },
    }
  });
