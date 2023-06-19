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


// Add margin below the labels
const plugin02 = {
  beforeInit(chart) {
    const originalFit = chart.legend.fit;
    chart.legend.fit = function fit() {
      originalFit.bind(chart.legend)();
      this.height += 15;
    }
  }
}

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
  },
  plugins: [ChartDataLabels, plugin02],
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
    maintainAspectRatio: false,
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

// Performance Chart
var ctx04 = document.getElementById('myChart04').getContext('2d');
// Add margin below the labels
const marginBt = {
  beforeInit(chart) {
    const originalFit = chart.legend.fit;
    chart.legend.fit = function fit() {
      originalFit.bind(chart.legend)();
      this.height += 15;
    }
  }
}
var myChart04 = new Chart(ctx04, {
  type: 'bar',
  data: {
    labels: ["Top 10", "Top 25", "Top 50", "Top 100"],
    datasets: [{
      label: '2023',
      data: [23, 28, 23, 33, 35],
      backgroundColor: '#37749B',
      borderColor: '#fff',
      borderWidth: 1,
      categoryPercentage: .8,
      barPercentage: 1,
      // grouped: false,
      order: 1
    },
    {
      label: '2022',
      data: [36, 23, 12, 25, 17],
      backgroundColor: '#549EA3',
      borderColor: '#fff',
      borderWidth: 1,
      categoryPercentage: .8,
      barPercentage: 1,

    },
    {
      label: '2021',
      data: [18, 13, 23, 33, 26],
      backgroundColor: '#89C597',
      borderColor: '#fff',
      borderWidth: 1,
      categoryPercentage: .8,
      barPercentage: 1,

    },
    {
      label: '2020',
      data: [10, 34, 32, 22, 12],
      backgroundColor: '#BEE296',
      borderColor: '#fff',
      borderWidth: 1,
      categoryPercentage: .8,
      barPercentage: 1,

    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
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
  plugins: [marginBt]
});

const salary = document.getElementById('DataType');
salary.addEventListener('change', salaryData);
function salaryData() {
  myChart04.data.datasets[0].data = salary.value.split(',');
  myChart04.update();
}