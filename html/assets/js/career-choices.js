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
    maintainAspectRatio: true,
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