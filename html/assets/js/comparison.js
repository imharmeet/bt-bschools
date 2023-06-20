Chart.defaults.font.family = "Open Sans"
// const ctx = document.getElementById('myChart');
const ids = ['option-1', 'option-2', 'option-3'];



// const myChart = new Chart(ctx, config);

const colorMap = {
  'option-1': '#E29E37',
  'option-2': '#419195',
  'option-3': '#A02F1F'
}
// load data
async function compareInit() {

  const data = await d3.csv("assets/data/report.csv");
  const dataYears = [...new Set(data.map(d => +d.year))].sort();

  data.forEach((d, index) => {
    d.id = index.toString();
  });

  ids.forEach(id => {
    $(`#${id}`).select2({
      theme: "bootstrap-5",
      width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
      placeholder: $(this).data('placeholder'),
      selectionCssClass: 'select2--small',
      dropdownCssClass: 'select2--small',
      data: data.map(d => {
        // create html string with a colored rectangle and school name
        const htmlString = `
            <div class="">
            <div style="position: absolute; left: 15px; top: 11px; width: 14px !important; height: 14px !important;border:1px solid #ffffff; border-radius: 50%; background-color: ${colorMap[id]};"></div>
            <div>${d.institute} </div>
        </div>`;

        return {
          id: d.id,
          text: d.institute,
          html: htmlString
        }
      }),
      templateSelection: function (data) {
        return $(data.html);
      },

    });
  });
  ids.forEach((id, index) => {
    $(`#${id}`).val(index.toString()).trigger('change');
  });



  // console.log(data)
$('.comparison-card select').on('change', function () {

  const selected = $(this).val();
  const selectedSchool = data.filter(d => d.institute === institute);
  // console.log(selectedSchool)
  // const selectedSchoolName = selectedSchool.institute;
  // const selectedSchoolRankings = selectedSchool.map(d => d.score)
  
  // get other selected schools
  // const selectedSchoolLearning = selectedSchool.map(d => d.score)
  
  const otherSelected = ids.filter(d => d != selected).map(d => $(`#${d}`).val());
  const otherSelectedSchools = data.filter(d => otherSelected.includes(d.id));
  
  // const otherSelectedSchoolsRankings = otherSelectedSchools.map((otherSelectedSchool) => {
  //   return {
  //     name: otherSelectedSchool.institute,
  //     rankings: Object.keys(otherSelectedSchool).filter(d => d.includes('rank')).map(d => {
  //       return {
  //         year: d.split('_')[0],
  //         rank: otherSelectedSchool[d]
  //       }
  //     })
  //   }
  // });

    // get other selected schools
    // const selectedSchoolLearning = selectedSchool.map(d => d.score)

    const otherSelected = ids.filter(d => d != selected).map(d => $(`#${d}`).val());
    const otherSelectedSchools = data.filter(d => otherSelected.includes(d.id));

    // const otherSelectedSchoolsRankings = otherSelectedSchools.map((otherSelectedSchool) => {
    //   return {
    //     name: otherSelectedSchool.institute,
    //     rankings: Object.keys(otherSelectedSchool).filter(d => d.includes('rank')).map(d => {
    //       return {
    //         year: d.split('_')[0],
    //         rank: otherSelectedSchool[d]
    //       }
    //     })
    //   }
    // });

    const updatedConfigScale = {
      scales: {
        x: {
          reverse: true,
          ticks: {
            font: {
              size: 15,
            }
          }
        },
        y: {
          type: 'linear',
          ticks: {
            stepSize: 1,
            min: 1,
            font: {
              size: 14,
            }

          },
          reverse: true,
        },

      }
    };

    // myChart.options.scales = updatedConfigScale.scales;

    // upd ate chart data
    // myChart.data.datasets = [...otherSelectedSchoolsRankings.map((d, index) => {
    //   return {
    //     label: d.name,
    //     data: d.rankings.map(d => d.rank),
    //     fill: false,
    //     borderColor: colorMap['option-' + (index + 1)],
    //     borderWidth: 6,
    //     backgroundColor: colorMap['option-' + (index + 1)],
    //   }
    // })];


    // myChart.data.labels = Object.keys(otherSelectedSchools[0]).filter((d) => d.includes('rank')).map(d => d.split('_')[1]);
    // myChart.options.plugins.legend.labels.usePointStyle = true;
    // myChart.update();

  });





  const filters = [
    {
      text: 'Overall',
      count: 1000,
      // color: 'grey',
      // score_id: 'overall_score'
    },
    {
      text: 'Learning',
      count: 250,
      // score_id: 'learning_experience_score'
    },
    {
      text: 'Living',
      count: 150,
      // score_id: 'living_experience_score'
    },
    {
      text: 'Placement',
      count: 250,
      // score_id: 'placement_performance_score'
    },
    {
      text: 'Selection',
      count: 150,
      // score_id: 'selection_process_governance_establishment_score'
    },
    {
      text: 'Future',
      count: 200,
      // score_id: 'future_orientation_score'
    },

  ];

  const defaultFilter = filters[0];

  // create bootstrap badge for each filter in class .filters
  d3.select('.filters')
    .selectAll('div')
    .data(filters)
    .enter()
    .append('div')
    .attr('class', function (d) {
      return d.score_id + ' badge-parent p-0';
    })
    .on('click', function (event, d) {
      d3.selectAll('.badge-parent')
        .classed('active', false);
      d3.select(this)
        .classed('active', true);
      // generateTable(year, d);
    })
    // .classed('active', d => d.score_id === defaultFilter.score_id)
    .style('width', 'auto')
    .append('div')
    .style('font-size', '14px')
    .attr('class', 'badge py-2')
    .style('background-color', d => d.color)
    .text(d => d.text)
    .append('span')
    .attr('class', 'ms-2')
    .text(function (d) {
      if (d.count) {
        return '(' + d.count + ')'
      }
    });




  var ctx03 = document.getElementById('comparision-chart').getContext('2d');

  const colors = {
    yellow: {
      default: "rgba(226, 158, 55, 1)",
      half: "rgba(226, 158, 55, 0.2)",
      zero: "rgba(226, 158, 55, 0)"
    },
    blue: {
      default: "rgba(65, 145, 149, 1)",
      half: "rgba(65, 145, 149, 0.2)",
      zero: "rgba(65, 145, 149, 0)"
    },
    red: {
      default: "rgba(160, 47, 31, 1)",
      half: "rgba(160, 47, 31, 0.2)",
      zero: "rgba(160, 47, 31, 0)"

    },
  };


  var gradient = ctx03.createLinearGradient(0, 0, 0, 1000);
  gradient.addColorStop(0, colors.yellow.default);
  gradient.addColorStop(0.25, colors.yellow.zero);
  gradient.addColorStop(1, colors.yellow.zero);

  var gradient1 = ctx03.createLinearGradient(0, 0, 0, 1000);
  gradient1.addColorStop(0, colors.blue.default);
  gradient1.addColorStop(0.25, colors.blue.zero);
  gradient1.addColorStop(1, colors.blue.zero);


  var gradient2 = ctx03.createLinearGradient(0, 0, 0, 1000);
  gradient2.addColorStop(0, colors.red.default);
  gradient2.addColorStop(0.25, colors.red.zero);
  gradient2.addColorStop(1, colors.red.zero);



  var myChart02 = new Chart(ctx03, {
    type: 'line',
    data: {
      labels: dataYears,
      datasets: [{
        backgroundColor: gradient2,
        borderColor: '#A02F1F',
        label: 'Enterpreneurship',
        fill: true,
        data: [899.9, 890.1, 897.0, 827.0, 867.0, 837.0],
        spanGaps: true,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#A02F1F'
      },
      {
        backgroundColor: gradient1,
        borderColor: '#419195',
        label: 'Family Business',
        fill: true,
        data: [711, 794.8, 789.6, 775, 773.1, 767.0],
        spanGaps: true,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#419195'
      },
      {
        backgroundColor: gradient,
        borderColor: '#E29E37',
        label: 'Family Business',
        fill: true,
        data: [600, 794.8, 675.6, 550, 773.1, 676.0],
        spanGaps: true,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#E29E37'
      },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        title: {
          padding: 27,
          display: true,
          text: 'Overall Score',
          align: 'start',
          font: {
            weight: 400,
            size: 14,
          },
          // family:'Open Sans'
        },
        legend: {
          display: false,
        }
      },
      tension: 0.1,
      scales: {
        y: {
          ticks: {
            beginAtZero: true,

          },
          display: true,
          grid: {
            display: true,
            color: '#F5F4F5',
            lineWidth: 0.5,
          },
          font: {
            size: 14,
            weight: 600,

          },

          scaleLabel: {
            display: true,
            fontSize: 20,
            family: 'Open Sans',
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
            color: '#F5F4F5',
            lineWidth: 0.5,
          }
        }

      }
    }
  });

}
compareInit()