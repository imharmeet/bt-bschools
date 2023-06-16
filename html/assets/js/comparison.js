const ctx = document.getElementById('myChart');
const ids = ['option-1', 'option-2', 'option-3'];

const config = {
  type: 'line',
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Overall Score',
        align: 'start',
        font: {
          weight: 400,
          size: 14,
        }
      },
    },

    layout: {
      padding: {
        left: 0,
        right: 40,
        top: 0,
        bottom: 0
      }
    },

  }
};

const myChart = new Chart(ctx, config);

const colorMap = {
  'option-1': '#E29E37',
  'option-2': '#419195',
  'option-3': '#A02F1F'
}
let data;
// load data
d3.csv('assets/data/comparison.csv').then((csvdata) => {
  data = csvdata;
  // create id for each school with name 
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
      // placeholder: '<img src="https://akm-img-a-in.tosshub.com/businesstoday/resource//best-bank-awards/assets/search.svg" alt="">',
      data: data.map(d => {
        // create html string with a colored rectangle and school name
        const htmlString = ` <div class="">
                            <div style="position: absolute; left: 15px; top: 11px; width: 14px !important; height: 14px !important;border:1px solid #ffffff; border-radius: 50%; background-color: ${colorMap[id]};"></div>
                            <div>${d.institute_name}</div>
                        </div>
                    `;

        return {
          id: d.id,
          text: d.institute_name,
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
});


$('.comparison-card select').on('change', function () {

  const selected = $(this).val();
  const selectedSchool = data.find(d => d.id == selected);
  const selectedSchoolName = selectedSchool.institute_name;
  const selectedSchoolRankings = Object.keys(selectedSchool).filter(d => d.includes('rank')).map(d => {
    return {
      year: d.split('_')[0],
      rank: selectedSchool[d]
    }
  });

  // get other selected schools
  const otherSelected = ids.filter(d => d != selected).map(d => $(`#${d}`).val());
  const otherSelectedSchools = data.filter(d => otherSelected.includes(d.id));

  const otherSelectedSchoolsRankings = otherSelectedSchools.map((otherSelectedSchool) => {
    return {
      name: otherSelectedSchool.institute_name,
      rankings: Object.keys(otherSelectedSchool).filter(d => d.includes('rank')).map(d => {
        return {
          year: d.split('_')[0],
          rank: otherSelectedSchool[d]
        }
      })
    }
  });

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
            size: 15,
          }

        },
        reverse: true,
      },

    }
  };

  myChart.options.scales = updatedConfigScale.scales;

  // upd ate chart data
  myChart.data.datasets = [...otherSelectedSchoolsRankings.map((d, index) => {
    return {
      label: d.name,
      data: d.rankings.map(d => d.rank),
      fill: false,
      borderColor: colorMap['option-' + (index + 1)],
      borderWidth: 6,
      backgroundColor: colorMap['option-' + (index + 1)],
    }
  })];


  myChart.data.labels = Object.keys(otherSelectedSchools[0]).filter((d) => d.includes('rank')).map(d => d.split('_')[1]);
  myChart.options.plugins.legend.labels.usePointStyle = true;
  myChart.update();

});


function generateStackBarChart(row, width) {
  const dataset = [
    {
      id: 'learning_experience_score',
      value: +(row.learning_experience_score),
    },
    {
      id: 'living_experience_score',
      value: +(row.living_experience_score),
    },
    {
      id: 'placement_performance_score',
      value: +(row.placement_performance_score),
    },
    {
      id: 'selection_process_governance_establishment_score',
      value: +(row.selection_process_governance_establishment_score),
    },
    {
      id: 'future_orientation_score',
      value: +(row.future_orientation_score),
    },
  ];

  return svg.node();
}