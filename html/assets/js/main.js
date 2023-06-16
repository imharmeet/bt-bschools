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


// Performance Indicators
var dataADS = [
  ['2020', '2021', '2022', '2023'],
  // ['2023', '2022', '2021', '2020'],
  [1920761, 1843200, 1855900, 1802000],
  [1770344, 1729309, 1688737, 1640249],
  [1442614, 1424389, 1397622, 1338963],
  [1147003, 1146232, 1110082, 1069016],
];
var dataCF = [
  // ['2020', '2021', '2022', '2023'],
  ['2023', '2022', '2021', '2020'],

  [29.63, 30.48, 25.49, 24.49],
  [22.54, 23.53, 19.63, 19.61],
  [17.01, 17.62, 14.78, 14.71],
  [12.29, 12.68, 10.77, 10.64],
];
var dataMTFR = [
  ['2022-23', '2021-22', '2020-21', '2019-20'],
  [2.3, 2.1, 2.2, 2.1],
  [2, 1.9, 2.1, 2.3],
  [2, 1.9, 2, 2],
  [1.6, 1.6, 1.6, 1.7],
];
var dataBS = [
  // ['2020', '2021', '2022', '2023'],
  ['2023', '2022', '2021', '2020'],

  [438, 423, 397, 413],
  [373, 377, 369, 340],
  [286, 291, 285, 264],
  [233, 240, 235, 226],
];

$(function () {

  // Initial chart
  var chart = c3.generate({
    data: {
      rows: dataADS,
      type: 'bar',
    },
    axis: {
      y: {
        label: {
          text: '₹ lakhs',
          position: 'outer-right'
        }
      },
      x: {
        tick: {
          categories: ['Top 10', 'Top 25', 'Top 50', 'Top 100']
        },
      },
      rotated: true
    },
    color: {
      pattern: ['#BEE296', '#89C597', '#549EA3', '#37749B']
    },

  });

  // Redraw chart depending on which option is selected
  $("#DataType").change(function (evt) {
    var timeSelection = eval($("#DataType").val());
    var chart = c3.generate({
      data: {
        rows: timeSelection,
        type: 'bar'
      },
      axis: {
        rotated: true
      },
      color: {
        pattern: ['#BEE296', '#89C597', '#549EA3', '#37749B']
      }
    });
  });

});