
async function reportInit() {
  const data = await d3.csv("assets/data/report.csv");
  const rankSVG = await d3.xml('https://akm-img-a-in.tosshub.com/businesstoday/resource/bt-schools/2023/assets/img/rank.svg');
  const data2024 = data.filter(d => d.year === '2024');
  // const dataYears = [...new Set(data.map(d => +d.year))].sort();
  const dataYears = [...new Set(data.map(d => +d.year))]
  const rankDIV = d3.select('#report-chart #rank-svg').node().append(rankSVG.documentElement);

  const schoolNames = [...new Set(data2024.map(d => d.institute))];
  const select1 = $("#select1-report-chart").select2({
    data: schoolNames,
    placeholder: 'Indian Institute of Management Calcutta',

  });


  let institute = schoolNames[0];
  select1.on('select2:select', function (e) {
    const selectData = e.params.data;
    institute = selectData.text;
    drawChart();
  });


  drawChart();

  async function drawChart() {

    const selectedBankData = data.filter(d => d.institute === institute);
    d3.select('#report-chart .school-name').text(institute);
    const latestYearData = selectedBankData.filter((d) => d.year === '2024');
    const selectedSector = latestYearData.map(d => d.sector);
    d3.select('#report-chart g text#rank').select('tspan').text(latestYearData.map(d => d.rank));
    d3.select('#report-chart #school-report-sector').text(changeNameReport(selectedSector.toString()));
    d3.select('#report-chart #school-report-state').text(latestYearData.map(d => d.state));
    d3.select('#report-chart #school-report-zone').text(latestYearData.map(d => d.zone));
    d3.select('#report-chart #school-rating-score').text(latestYearData.map(d => d.score))
    const selectedSchoolLearning = selectedBankData.map(d => d.learning_exp)
    const selectedLivingExp = selectedBankData.map(d => d.living_exp)
    const selectedPlacement = selectedBankData.map(d => d.placement_score)
    const selectedSelection = selectedBankData.map(d => d.selection_process)
    const selectedFuture = selectedBankData.map(d => d.future)
    function changeNameReport(name) {
      if (name === 'G') {
        name = 'Government'
      } else {
        name = 'Private'
      }
      return name;
    }
    var ctx03 = document.getElementById('over-years-chart').getContext('2d');

    let chartStatus = Chart.getChart("over-years-chart"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    var gradient = ctx03.createLinearGradient(0, 10, 0, 1000);
    gradient.addColorStop(0, '#6DB49B');
    gradient.addColorStop(1, 'Transparent');

    var gradient1 = ctx03.createLinearGradient(0, 0, 0, 1000);
    gradient1.addColorStop(0, '#FCDA29');
    gradient1.addColorStop(1, 'Transparent');

    // Add margin below the labels
    const marginBottom = {
      beforeInit(chart) {
        const originalFit = chart.legend.fit;
        chart.legend.fit = function fit() {
          originalFit.bind(chart.legend)();
          this.height += 30;
        }
      }
    }
    var myChart03 = new Chart(ctx03, {
      type: 'line',
      data: {
        labels: dataYears,
        datasets: [{
          backgroundColor: '#419195',
          borderColor: 'rgb(255, 255, 255)',
          label: 'Placement (250)',
          fill: true,
          data: selectedSchoolLearning,
          pointHoverRadius: 6,
          pointRadius: 4,
          spanGaps: true,
        }, {
          backgroundColor: '#A1D0BE',
          borderColor: 'rgb(255, 255, 255)',
          label: 'Learning (250)',
          fill: true,
          data: selectedLivingExp,
          pointHoverRadius: 6,
          pointRadius: 4,
          spanGaps: true,

        }, {
          backgroundColor: '#E6D8AC',
          borderColor: 'rgb(255, 255, 255)',
          label: 'Living (150)',
          fill: true,
          data: selectedPlacement,
          pointHoverRadius: 6,
          pointRadius: 4,
          spanGaps: true,

        }, {
          backgroundColor: '#E29E37',
          borderColor: 'rgb(255, 255, 255)',
          label: 'Selection (150)',
          fill: true,
          data: selectedSelection,
          pointHoverRadius: 6,
          pointRadius: 4,
          spanGaps: true,

        }, {
          backgroundColor: '#A02F1F',
          borderColor: 'rgb(255, 255, 255)',
          label: 'Future (200)',
          fill: true,
          data: selectedFuture,
          pointHoverRadius: 6,
          pointRadius: 4,
          spanGaps: true,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          showAllTooltips: true
        },

        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#1F1C24',
            font: {
              weight: 'bold',
              size: 14,
            }
          },
          legend: {
            display: true,
            position: 'top',
            align: "start",
            padding: 0,
            labels: {
              color: '#555359',
              usePointStyle: true,
              padding: 26,
              font: {
                size: 13,
                weight: 400,
              }
            },
          }
        },
        tension: .3,
        scales: {
          y: {
            max: 1000,
            beginAtZero: true,
            ticks: {
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
            offset: true,
            reverse: true,
            ticks: {
              beginAtZero: true,
              font: {
                size: 12,
                weight: '600',
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
      plugins: [marginBottom],
    });
    myChart03.update();

  }
}

reportInit();