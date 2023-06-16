// AOS.init();
// 

// 
$('.archive-btn').click(function () {
  $('.archive-list').toggle(300);
});

//
$(".methodology-con .read-more").click(function () {
  $("#more-content").slideToggle("slow");
  if ($(".methodology-con .read-more").text() == "read more") {
    $(".methodology-con .read-more").html("hide")
  }
  else {
    $(".methodology-con .read-more").text("read more")
  }
});

// Articles Carousel
var swiper = new Swiper(".articles-carousel", {
  breakpoints: {
    300: {
      slidesPerView: 2.2,
      spaceBetween: 10
    },
    575: {
      slidesPerView: 3.2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4.3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 15
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
// Visual Stories Carousel
var swiper = new Swiper(".vs-carousel", {
  spaceBetween: 15,
  breakpoints: {
    300: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    575: {
      slidesPerView: 2.2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 15,
      navigation: false
    },
    992: {
      slidesPerView: 3.2,
      spaceBetween: 15
    },
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Videos Carousel
var swiper = new Swiper(".videos-carousel", {
  spaceBetween: 15,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    575: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 15,
      navigation: false
    },
    992: {
      slidesPerView: 2.2,
      spaceBetween: 15
    },
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Videos Carousel
var swiper = new Swiper(".mba-ranking-carousel", {
  spaceBetween: 15,
  breakpoints: {
    300: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    575: {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 15,
      navigation: false
    },
    992: {
      slidesPerView: 3.3,
      spaceBetween: 20
    },
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



