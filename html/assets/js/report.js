function changeName(name) {
    if(name === 'G'){
        name = 'Govt.'
    }else{
        name ='Pvt.'}
    return name;
 }
async function reportInit() {
  const data = await d3.csv("assets/data/report.csv");
  const rankSVG = await d3.xml('assets/img/rank.svg');
  const data2023 = data.filter(d => d.year === '2023');
  const dataYears = [...new Set(data.map(d => +d.year))].sort();
  
  const rankDIV = d3.select('#report-chart #rank-svg').node().append(rankSVG.documentElement);

  const schoolNames = [...new Set(data2023.map(d => d.institute))];

    const select1 = $("#select1-report-chart").select2({
        data: schoolNames,
        placeholder: 'Search School  ',

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
    selectedBankData.sort((a, b) => a.year - b.year);
    const latestYearData = selectedBankData[selectedBankData.length - 1];
    d3.select('#report-chart g text#rank').select('tspan').text(latestYearData.rank);
    d3.select('#report-chart #school-rating-year').html(`Rank FY'${latestYearData.year.slice(2)}`);
    d3.select('#report-chart #school-report-sector').text(changeName(latestYearData.sector));
    d3.select('#report-chart #school-report-state').text(latestYearData.state);
    d3.select('#report-chart #school-report-zone').text(latestYearData.zone);
    d3.select('#report-chart #school-rating-score').text(latestYearData.score)
    const selectedSchoolLearning = selectedBankData.map(d => d.learning_exp)
    const selectedLivingExp = selectedBankData.map(d => d.living_exp)
    const selectedPlacement = selectedBankData.map(d => d.placement_score)
    const selectedSelection = selectedBankData.map(d => d.selection_process)
    const selectedFuture = selectedBankData.map(d => d.future)
    
    // learning_exp living_exp placement_score score selection_process
    // console.log(selectedBankData)
    // d3.select('.over-year').append('canvas').attr('id', `over-years-chart-${latestYearData.rank}`)
    // var ctx03 = document.getElementById(`over-years-chart-${latestYearData.rank}`).getContext('2d');
    // d3.select('.over-year').append('canvas').attr('id', 'over-years-chart')
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
    labels: dataYears,
    datasets: [{
      backgroundColor: '#419195',
      borderColor: 'rgb(255, 255, 255)',
      label: 'Learning (250)',
      fill: true,
      data: selectedSchoolLearning,
      pointHoverRadius: 10,
      spanGaps: true,
    }, {
      backgroundColor: '#A1D0BE',
      borderColor: 'rgb(255, 255, 255)',
      label: 'Living (150)',
      fill: true,
      data: selectedLivingExp,
      spanGaps: true,

    }, {
      backgroundColor: '#E6D8AC',
      borderColor: 'rgb(255, 255, 255)',
      label: 'Placement (250)',
      fill: true,
      data: selectedPlacement,
      spanGaps: true,

    }, {
      backgroundColor: '#E29E37',
      borderColor: 'rgb(255, 255, 255)',
      label: 'Selection (150)',
      fill: true,
      data: selectedSelection,
      spanGaps: true,

    }, {
      backgroundColor: '#A02F1F',
      borderColor: 'rgb(255, 255, 255)',
      label: 'Future (200)',
      fill: true,
      data: selectedFuture,
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
myChart03.update();

  }
}

reportInit();


 
