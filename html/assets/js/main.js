// AOS.init();
// 


//
// $(".top-sec .loadmore-btn").click(function () {
//   $("#loadmore-articles").slideToggle("slow");
//   if ($(".top-sec .loadmore-btn span").text() == "load more") {
//     $(".top-sec .loadmore-btn span").html("hide")
//     $(".top-sec .loadmore-btn").addClass('active');
//   }
//   else {
//     $(".top-sec .loadmore-btn span").text("load more")
//     $(".top-sec .loadmore-btn").removeClass('active');
//   }
// });
// $(".top-content .read-more-btn").click(function () {
//   $("#more-content").slideToggle("slow");
//   if ($(".top-content .read-more-btn").text() == "Read More") {
//     $(".top-content .read-more-btn").html("Hide")
//   }
//   else {
//     $(".top-content .read-more-btn").text("Read More")
//   }
// });

// $(".summit-content .readmore").click(function () {
//   $("#more-content").slideToggle("slow");
//   if ($(".summit-content .readmore span").text() == "read more") {
//     $(".summit-content .readmore span").html("hide")
//     $(".summit-content .readmore").addClass('active');
//   }
//   else {
//     $(".summit-content .readmore span").text("read more");
//     $(".summit-content .readmore").removeClass('active');
//   }
// });

// Articles Carousel
var swiper = new Swiper(".articles-carousel", {
  breakpoints: {
    300: {
      slidesPerView: 2.2,
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
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
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
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 15,
      navigation: false
    },
    992: {
      slidesPerView: 4.5,
      spaceBetween: 20
    },
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



