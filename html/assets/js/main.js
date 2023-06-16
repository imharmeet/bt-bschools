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
      slidesPerView: 1.5,
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
// MBA Ranking Carousel
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


// Career CHoices Chart
var ctx02 = document.getElementById('career-chart').getContext('2d');
var gradient = ctx02.createLinearGradient(0, 10, 0, 1000);
gradient.addColorStop(0, '#6DB49B');
gradient.addColorStop(1, 'Transparent');

var gradient1 = ctx02.createLinearGradient(0, 0, 0, 1000);
gradient1.addColorStop(0, '#FCDA29');
gradient1.addColorStop(1, 'Transparent');

var myChart02 = new Chart(ctx02, {
  type: 'line',
  data: {
    labels: [2018, 2019, 2020, 2021, 2022, 2023],
    datasets: [{
      backgroundColor: gradient1,
      borderColor: '#FCDA29',
      label: 'Enterpreneurship',
      fill: true,
      data: [11, 11, 7, 6, 5, 5],
      pointHoverRadius: 10,
      spanGaps: true,
    }, {
      backgroundColor: gradient,
      borderColor: '#6DB49B',
      label: 'Family Business',
      fill: true,
      // data: [6, 3, 2, 2, 2, 1],
      data: [17, 14, 9, 8, 7, 6],
      spanGaps: true,

    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'No. of Students',
        align: 'start',
        font: {
          weight: 400,
          size: 14,
        }
      },
      legend: {
        display: true,
        position: 'top',
        padding: 30,
        labels: {
          color: '#FFFFFF',
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
            weight: 400,
          }
        },
      }
    },
    tension: 0.3,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
        display: true,
        grid: {
          display: true,
          color: '#504E54',
          lineWidth: 0.5,
        },
        font: {
          size: 14,
          weight: 600,
        },
        scaleLabel: {
          display: true,
          fontSize: 20
        },
        stacked: true,
      },
      x: {
        ticks: {
          beginAtZero: true,
        },
        display: true,
        grid: {
          borderColor: 'white',
          color: '#504E54',
          lineWidth: 0.5,
        }
      }

    }
  }
});
// Report Card Chart
var ctx03 = document.getElementById('over-years-chart').getContext('2d');
var gradient = ctx03.createLinearGradient(0, 10, 0, 1000);
gradient.addColorStop(0, '#6DB49B');
gradient.addColorStop(1, 'Transparent');

var gradient1 = ctx03.createLinearGradient(0, 0, 0, 1000);
gradient1.addColorStop(0, '#FCDA29');
gradient1.addColorStop(1, 'Transparent');

// Add margin below the labels
const plugin = {
  beforeInit(chart) {
    const originalFit = chart.legend.fit;
    chart.legend.fit = function fit() {
      originalFit.bind(chart.legend)();
      this.height += 15;
    }
  }
}
var myChart03 = new Chart(ctx03, {
  type: 'line',
  data: {
    labels: [2019, 2020, 2021, 2022, 2023],
    datasets: [{
      backgroundColor: '#419195',
      borderColor: 'rgb(255, 255, 255)',
      label: 'Learning (250)',
      fill: true,
      data: [42, 55, 53, 50, 70, 65],
      pointHoverRadius: 10,
      spanGaps: true,
    }, {
      backgroundColor: '#A1D0BE',
      borderColor: 'rgb(255, 255, 255)',
      label: 'Living (150)',
      fill: true,
      data: [57, 44, 49, 64, 47, 46],
      spanGaps: true,

    }, {
      backgroundColor: '#E6D8AC',
      borderColor: 'rgb(255, 255, 255)',
      label: 'Placement (250)',
      fill: true,
      data: [53, 67, 79, 48, 67, 54],
      spanGaps: true,

    }, {
      backgroundColor: '#E29E37',
      borderColor: 'rgb(255, 255, 255)',
      label: 'Selection (150)',
      fill: true,
      data: [67, 54, 59, 58, 67, 56],
      spanGaps: true,

    }, {
      backgroundColor: '#A02F1F',
      borderColor: 'rgb(255, 255, 255)',
      label: 'Future (200)',
      fill: true,
      data: [74, 64, 79, 83, 57, 96],
      spanGaps: true,

    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#1F1C24',
        formatter: function (value) {
          return Math.round(value) + '%';
        },
        font: {
          weight: 'bold',
          size: 14,
        }
      },
      legend: {
        display: true,
        position: 'top',
        padding: 30,
        labels: {
          color: '#555359',
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
            weight: 400,
          }
        },
      }
    },
    tension: .3,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
        display: true,
        grid: {
          display: true,
          color: '#504E54',
          lineWidth: 0.5,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        font: {
          size: 14,
          weight: 600,
        },
        scaleLabel: {
          display: true,
          fontSize: 20
        },
        stacked: true,
      },
      x: {
        ticks: {
          beginAtZero: true,
        },
        display: true,
        grid: {
          borderColor: 'white',
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 0.5,
        }
      }

    }
  },
  plugins: [ChartDataLabels, plugin],
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