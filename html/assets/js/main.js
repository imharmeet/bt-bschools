Chart.defaults.font.family = "Open Sans";


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
      slidesPerView: 3.5,
      spaceBetween: 15
    },
  },
  mousewheel: {
    releaseOnEdges: true,
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
  mousewheel: {
    releaseOnEdges: true,
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
  mousewheel: {
    releaseOnEdges: true,
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
  mousewheel: {
    releaseOnEdges: true,
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
      spanGaps: false,
    }, {
      backgroundColor: gradient,
      borderColor: '#6DB49B',
      label: 'Family Business',
      fill: true,
      // data: [6, 3, 2, 2, 2, 1],
      data: [17, 14, 9, 8, 7, 6],
      spanGaps: false,

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
        color: '#A3A3A3',
        font: {
          weight: 400,
          size: 14,
        },
        padding: {
          bottom: 20
        },
      },
      legend: {
        display: true,
        position: 'bottom',
        padding: 30,
        labels: {
          generateLabels: function (chart) {
            const originalLabels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
            originalLabels.forEach(label => {
              if (label.datasetIndex === 0) { // Modify labels for the first dataset
                label.fillStyle = '#FCDA29'; // Set the desired color for the legend dot point
              } else {
                label.fillStyle = '#6DB49B';
              }
            });
            return originalLabels;
          },
          color: '#FFFFFF',
          usePointStyle: true,
          padding: 20,
          font: {
            size: 13,
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
          color: '#A3A3A3',
          font: {
            size: 12,
            weight: 400,
          }
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
          color: '#A3A3A3',
          font: {
            size: 12,
            weight: 400,
          }
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


// Performance Chart
// Get the select dropdown element
let dataSelect = document.getElementById('data-select');
// Set up initial chart data and labels
let datasets = [
  {
    label: '2023',
    data: [29.63, 22.54, 17.01, 12.29],
    backgroundColor: '#37749B',
  },
  {
    label: '2022',
    data: [30.48, 23.53, 17.62, 12.68],
    backgroundColor: '#549EA3',
  },
  {
    label: '2021',
    data: [25.49, 19.63, 14.78, 10.77],
    backgroundColor: '#89C597',
  },
  {
    label: '2020',
    data: [24.49, 19.61, 14.71, 10.64],
    backgroundColor: '#BEE296',
  }
];
let labels = ["Top 10", "Top 25", "Top 50", "Top 100"];
let labelsRatio = ["Top 1-25", "Top 26-50", "Top 51-75", "Top 76-100"];
// Create the chart with initial data
const ctx04 = document.getElementById('myChart04').getContext('2d');
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
const chart = new Chart(ctx04, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: datasets
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#7D7B80',
        formatter: function (value) {
          return Math.round(value) + '%';
        },
        font: {
          weight: 'bold',
          size: 14,
        },

      },
      legend: {
        display: true,
        position: 'top',
        padding: 30,
        labels: {
          color: '#7D7B80',
          usePointStyle: true,
          padding: 15,
          font: {
            size: 14,
            weight: 400,
          }
        },
      }
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          font: {
            size: 12,
            weight: '600',
          }
        },
        display: true,
        grid: {
          display: true,
          color: '#504E54',
          lineWidth: 0.5,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        scaleLabel: {
          display: true,
          fontSize: 20
        },
      },
      x: {
        ticks: {
          beginAtZero: true,
          font: {
            size: 12,
            weight: '600',
          },
          callback: function (value, index, values) {
            if (dataSelect.value == 'data2') {
              return Number((value / 10000));
            } else {
              return value;
            }
          }
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

if (dataSelect.value == 'data1') {
  let title01 = '<div class="title01">(₹ lakhs)</div>'
  $('.chart-title').html(title01);
}

// Event listener for select dropdown change
dataSelect.addEventListener('change', function () {
  // Get the selected value
  const selectedValue = dataSelect.value;

  // Update the chart data and labels based on the selected value
  if (selectedValue === 'data1') {
    datasets = [
      {
        label: '2023',
        data: [29.63, 22.54, 17.01, 12.29],
        backgroundColor: '#37749B',
      },
      {
        label: '2022',
        data: [30.48, 23.53, 17.62, 12.68],
        backgroundColor: '#549EA3',
      },
      {
        label: '2021',
        data: [25.49, 19.63, 14.78, 10.77],
        backgroundColor: '#89C597',
      },
      {
        label: '2020',
        data: [24.49, 19.61, 14.71, 10.64],
        backgroundColor: '#BEE296',
      }
    ];

    let title01 = '<div class="notes">(₹ lakhs)</div>'
    $('.chart-title').html(title01);
    chart.data.labels = labels;
  } else if (selectedValue === 'data2') {
    datasets = [
      {
        label: '2023',
        data: [1920761, 1770344, 1442614, 1147003],
        backgroundColor: '#37749B',
      },
      {
        label: '2022',
        data: [1843200, 1729309, 1424389, 1146232],
        backgroundColor: '#549EA3',
      },
      {
        label: '2021',
        data: [1855900, 1688737, 1397622, 1110082],
        backgroundColor: '#89C597',
      },
      {
        label: '2020',
        data: [1802000, 1640249, 1338963, 1069016],
        backgroundColor: '#BEE296',
      },
    ];
    let title02 = '<div class="notes"> (₹ lakhs)<p>Note: Average course fees include tuition fee+ other fees </p>    </div>'
    $('.chart-title').html(title02);
    chart.data.labels = labels;
  } else if (selectedValue === 'data3') {
    datasets = [
      {
        label: '2022-23',
        data: [2.3, 2, 2, 1.6],
        backgroundColor: '#37749B',
      },
      {
        label: '2021-22',
        data: [2.1, 1.9, 1.9, 1.6],
        backgroundColor: '#549EA3',
      },
      {
        label: '2020-21',
        data: [2.2, 2.1, 2, 1.6],
        backgroundColor: '#89C597',
      },
      {
        label: '2019-20',
        data: [2.1, 2.3, 2, 1.7],
        backgroundColor: '#BEE296',
      }
    ];
    let title03 = '<div class="notes"><p>Note: Figures are the number of male students enrolled per female student</p></div>'
    $('.chart-title').html(title03);
    chart.data.labels = labels;
  } else if (selectedValue === 'data4') {
    datasets = [
      {
        label: '2023',
        data: [438, 373, 286, 233],
        backgroundColor: '#37749B',
      },
      {
        label: '2022',
        data: [423, 377, 291, 240],
        backgroundColor: '#549EA3',
      },
      {
        label: '2021',
        data: [397, 369, 285, 235],
        backgroundColor: '#89C597',
      },
      {
        label: '2020',
        data: [413, 340, 264, 226],
        backgroundColor: '#BEE296',
      }
    ];
    let title04 = '<div class="notes">No. of students</div>'
    chart.data.labels = labels;
    $('.chart-title').html(title04);
  } else if (selectedValue === 'data5') {
    datasets = [
      {
        label: '2023',
        data: [1.27, 1.03, 0.86, 0.92],
        backgroundColor: '#37749B',
      },
      {
        label: '2022',
        data: [1.36, 1.05, 0.89, 0.9],
        backgroundColor: '#549EA3',
      },
      {
        label: '2021',
        data: [1.16, 0.9, 0.86, 0.78],
        backgroundColor: '#89C597',
      },
      {
        label: '2020',
        data: [1.2, 0.95, 0.81, 0.84],
        backgroundColor: '#BEE296',
      }
    ];
    chart.data.labels = labels;
    let title05 = ' <div class="notes">figures in times<p>Note: ROI is calculated as average annual domestic salary/Course fees (Tuition fee + Other fees) for the entire course</p></div>'
    $('.chart-title').html(title05);
    chart.data.labels = labelsRatio
  }

  // Update the chart with the new data and labels
  chart.data.datasets = datasets;
  // plugins: [marginBt];
  chart.update();

});
function formatCurrency(val) {

  return splice(val);
}