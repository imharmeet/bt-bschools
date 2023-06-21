// AOS.init();
// 

// 
Chart.defaults.font.family = "Open Sans"

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


// Performance Chart
// var ctx04 = document.getElementById('myChart04').getContext('2d');
// Add margin below the labels
// const marginBt = {
//   beforeInit(chart) {
//     const originalFit = chart.legend.fit;
//     chart.legend.fit = function fit() {
//       originalFit.bind(chart.legend)();
//       this.height += 15;
//     }
//   }
// }
// var myChart04 = new Chart(ctx04, {
//   type: 'bar',
//   data: {
//     labels: ["Top 10", "Top 25", "Top 50", "Top 100"],
//     datasets: [{
//       label: '2023',
//       data: ['1920761', '1843200', '1855900', '1802000'],
//       backgroundColor: '#37749B',
//       borderColor: '#fff',
//       borderWidth: 1,
//       categoryPercentage: .7,
//       barPercentage: 1,
//     },
//     {
//       label: '2022',
//       data: ['1770344', '1729309', '1688737', '1640249'],
//       backgroundColor: '#549EA3',
//       borderColor: '#fff',
//       borderWidth: 1,
//       categoryPercentage: .7,
//       barPercentage: 1,

//     },
//     {
//       label: '2021',
//       data: ['1442614', '1424389', '1397622', '1338963'],
//       backgroundColor: '#89C597',
//       borderColor: '#fff',
//       borderWidth: 1,
//       categoryPercentage: .7,
//       barPercentage: 1,

//     },
//     {
//       label: '2020',
//       data: ['1147003', '1146232', '1110082', '1069016'],
//       backgroundColor: '#BEE296',
//       borderColor: '#fff',
//       borderWidth: 1,
//       categoryPercentage: .7,
//       barPercentage: 1,

//     }]
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     indexAxis: 'y',
//     plugins: {
//       datalabels: {
//         anchor: 'end',
//         align: 'top',
//         color: '#1F1C24',
//         formatter: function (value) {
//           return Math.round(value) + '%';
//         },
//         font: {
//           weight: 'bold',
//           size: 14,
//         }
//       },
//       legend: {
//         display: true,
//         position: 'top',
//         padding: 30,
//         labels: {
//           color: '#555359',
//           usePointStyle: true,
//           padding: 30,
//           font: {
//             size: 14,
//             weight: 400,
//           }
//         },
//       }
//     },
//     tension: .3,
//     scales: {
//       y: {
//         ticks: {
//           beginAtZero: true,
//         },
//         display: true,
//         grid: {
//           display: true,
//           color: '#504E54',
//           lineWidth: 0.5,
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//         font: {
//           size: 14,
//           weight: 600,
//         },
//         scaleLabel: {
//           display: true,
//           fontSize: 20
//         },
//       },
//       x: {
//         ticks: {
//           beginAtZero: true,
//         },
//         display: true,
//         grid: {
//           borderColor: 'white',
//           color: 'rgba(0, 0, 0, 0.1)',
//           lineWidth: 0.5,
//         }
//       }

//     }
//   },
//   plugins: [marginBt]
// });

// const salary = document.getElementById('DataType');
// salary.addEventListener('change', salaryData);
// function salaryData() {
//   myChart04.data.datasets[0].data = salary.value.split(',');
//   myChart04.update();
// }




// Get the select dropdown element
let dataSelect = document.getElementById('data-select');
// Set up initial chart data and labels
let datasets = [
  {
    label: '2023',
    data: [1920761, 1843200, 1855900, 1802000],
    backgroundColor: '#37749B',
  },
  {
    label: '2022',
    data: [1770344, 1729309, 1688737, 1640249],
    backgroundColor: '#549EA3',
  },
  {
    label: '2021',
    data: [1442614, 1424389, 1397622, 1338963],
    backgroundColor: '#89C597',
  },
  {
    label: '2020',
    data: [1147003, 1146232, 1110082, 1069016],
    backgroundColor: '#BEE296',
  }
];
let labels = ["Top 10", "Top 25", "Top 50", "Top 100"];

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
      title: {
        display: true,
        position: 'bottom',
        //text: '(₹ lakhs)',
        align: 'end',
        font: {
          weight: 'normal',
          size: 14,
        }
      },
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
        }
      },
      legend: {
        display: true,
        position: 'top',
        padding: 30,
        labels: {
          color: '#7D7B80',
          usePointStyle: true,
          padding: 20,
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
  }
});

if(dataSelect.value=='data1'){
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
        label: '2020',
        data: [1920761, 1843200, 1855900, 1802000],
        backgroundColor: '#37749B',
      },
      {
        label: '2021',
        data: [1770344, 1729309, 1688737, 1640249],
        backgroundColor: '#549EA3',
      },
      {
        label: '2022',
        data: [1442614, 1424389, 1397622, 1338963],
        backgroundColor: '#89C597',
      },
      {
        label: '2023',
        data: [1147003, 1146232, 1110082, 1069016],
        backgroundColor: '#BEE296',
      }
    ];
    
    
  } else if (selectedValue === 'data2') {
    datasets = [
      {
        label: '2023',
        data: [29.63, 30.48, 25.49, 24.49],
        backgroundColor: '#37749B',
      },
      {
        label: '2022',
        data: [22.54, 23.53, 19.63, 19.61],
        backgroundColor: '#549EA3',
      },
      {
        label: '2021',
        data: [17.01, 17.62, 14.78, 14.71],
        backgroundColor: '#89C597',
      },
      {
        label: '2020',
        data: [12.29, 12.68, 10.77, 10.64],
        backgroundColor: '#BEE296',
      }
    ];
   
  } else if (selectedValue === 'data3') {
    datasets = [
      {
        label: '2022-23',
        data: [2.3, 2.1, 2.2, 2.1],
        backgroundColor: '#37749B',
      },
      {
        label: '2021-22',
        data: [2, 1.9, 2.1, 2.3],
        backgroundColor: '#549EA3',
      },
      {
        label: '2020-21',
        data: [2, 1.9, 2, 2],
        backgroundColor: '#89C597',
      },
      {
        label: '2019-20',
        data: [1.6, 1.6, 1.6, 1.7],
        backgroundColor: '#BEE296',
      }
    ];
  } else if (selectedValue === 'data4') {
    datasets = [
      {
        label: '2023',
        data: [438, 423, 397, 413],
        backgroundColor: '#37749B',
      },
      {
        label: '2022',
        data: [373, 377, 369, 340],
        backgroundColor: '#549EA3',
      },
      {
        label: '2021',
        data: [286, 291, 285, 264],
        backgroundColor: '#89C597',
      },
      {
        label: '2020',
        data: [233, 240, 235, 226],
        backgroundColor: '#BEE296',
      }
    ];
  }
  if(dataSelect.value=='data1'){
    let title01 = '<div class="notes">(₹ lakhs)</div>'
    $('.chart-title').html(title01);
  }
  if(dataSelect.value=='data2'){
    let title02 = '<div class="notes"> (₹ lakhs)<p>Note: Average course fees include tuition fee+ other fees </p>    </div>'
    $('.chart-title').html(title02);
  }
  if(dataSelect.value=='data3'){
    let title03 = '<div class="notes"><p>Note: Figures are the number of male students enrolled per female student</p></div>'
    $('.chart-title').html(title03);
  }
  if(dataSelect.value=='data4'){
    let title04 = '<div class="notes">No. of students</div>'
    $('.chart-title').html(title04);
  }
  if(dataSelect.value=='data5'){
    let title05 = ' <div class="notes">figures in times<p>Note: ROI is calculated as average annual domestic salary/Course fees (Tuition fee + Other fees) for the entire course</p></div>'
    $('.chart-title').html(title05);
  }
  // Update the chart with the new data and labels
  chart.data.datasets = datasets;
  chart.data.labels = labels;
  chart.update();
  plugins: [marginBt];
});
