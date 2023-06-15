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
        const htmlString = `
                                      <div class="">
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

  // select first, second and third option by default
  ids.forEach((id, index) => {
    $(`#${id}`).val(index.toString()).trigger('change');
  });
});


$('select').on('change', function () {
  // get selected schools in all 3 seelcts

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

// window.mobileCheck = function () {
//   let check = false;
//   (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
//   return check;
// };

// const years = [
//   '2023',
//   '2022',
//   '2021',
//   '2020',
//   '2019',
//   '2018',
//   '2017',
//   '2016',
// ]

// let year;

// create radio button for each year with year with label
// const divs = d3.selectAll('.years')
//   .selectAll('div')
//   .data(years)
//   .enter()
//   .append('div')
//   .style('width', 'auto')
//   .attr('class', 'radio-buttons')
//   .append('div')
//   .attr('class', 'form-check');

// divs.append('input')
//   .attr('class', 'form-check-input')
//   .attr('type', 'radio')
//   .attr('name', 'year')
//   .attr('id', d => 'year' + d)
//   .attr('value', d => d)
//   .on('change', function (event) {
//     year = event.target.value;
//     if (year !== '2022') {
//       d3.select('.roi_score').classed('d-none', true);
//     } else {
//       d3.select('.roi_score').classed('d-none', false);
//     }

//     generateTable(year)
//   });

// divs.append('label')
//   .attr('class', 'form-check-label')
//   .attr('for', d => 'year' + d)
//   .text(d => d);


// const filters = [
//   {
//     text: 'Overall',
//     count: 1000,
//     color: 'grey',
//     score_id: 'overall_score'
//   },
//   {
//     text: 'Learning',
//     count: 250,
//     color: '#699ab4',
//     score_id: 'learning_experience_score'
//   },
//   {
//     text: 'Living',
//     count: 150,
//     color: '#724a9b',
//     score_id: 'living_experience_score'
//   },
//   {
//     text: 'Placement',
//     count: 250,
//     color: '#d6c300',
//     score_id: 'placement_performance_score'
//   },
//   {
//     text: 'Selection',
//     count: 150,
//     color: '#f28c30',
//     score_id: 'selection_process_governance_establishment_score'
//   },
//   {
//     text: 'Future',
//     count: 200,
//     color: '#f93f81',
//     score_id: 'future_orientation_score'
//   },
//   {
//     text: 'ROI',
//     color: '#96ad7f',
//     score_id: 'roi_score'
//   }
// ];

// const defaultFilter = filters[0];

// create bootstrap badge for each filter in class .filters
// d3.select('.filters')
//   .selectAll('div')
//   .data(filters)
//   .enter()
//   .append('div')
//   .attr('class', function (d) {
//     return d.score_id + ' badge-parent p-0';
//   })
//   .on('click', function (event, d) {
//     d3.selectAll('.badge-parent')
//       .classed('active', false);
//     d3.select(this)
//       .classed('active', true);
//     generateTable(year, d);
//   })
//   .classed('active', d => d.score_id === defaultFilter.score_id)
//   .style('width', 'auto')
//   .append('div')
//   .style('font-size', '15px')
//   .attr('class', 'badge py-2')
//   .style('background-color', d => d.color)
//   .text(d => d.text)
//   .append('span')
//   .attr('class', 'text-white ms-2')
//   .text(function (d) {
//     if (d.count) {
//       return d.count;
//     } else {
//     }
//   });

// $(document).ready(function () {
//   $('#year2022').click();
// });

// function generateTable(year, filter = defaultFilter) {
//   d3.csv(`https://akm-img-a-in.tosshub.com/businesstoday/resource/best-bschools-2022/data/${year}.csv`).then((data) => {
//     const yearData = {
//       data
//     };


//     // delete all content inside .draw-table
//     d3.select('.draw-table').selectAll('*').remove();

//     d3.select('.draw-table')
//       .append('table')
//       .attr('id', 'example')
//       .attr('class', 'full-width')
//       .append('thead')
//       .append('tr')
//       .selectAll('th')
//       .data(['Rank', 'Name', 'Score', ''])
//       .enter()
//       .append('th')
//       .text(d => d);

//     const scoreColumn = filter.score_id;
//     const rankColumn = filter.score_id.replace('score', 'rank');


//     if (filter.score_id === 'roi_score') {
//       // remove data items where roi_score is empty string
//       yearData.data = yearData.data.filter(d => d.roi_score !== '');
//     }

//     // pass data to datatable
//     $('#example').DataTable({
//       responsive: true,
//       "bLengthChange": false,
//       scrollX: true,
//       language: {
//         searchPlaceholder: "Search for schools",
//         search: "",
//         "info": ""
//       },
//       data: yearData.data,
//       drawCallback: function (settings) {
//         // mobileCheck

//         if (!mobileCheck()) {
//           return;
//         }

//         var api = this.api();
//         var rows = api.rows({ page: 'current' }).nodes();
//         var last = null;

//         api
//           .column(1, { page: 'current' })
//           .data()
//           .each(function (group, i) {
//             if (last !== group) {
//               // get row where name is equal to group
//               const row = data.find(d => d.institute_name === group);

//               // const d3Node = generateStackBarChart(row, window.innerWidth);
//               const d3Node = generateStackBarChart(row, 330);

//               // convert to html string
//               const htmlString = d3Node.outerHTML;

//               $(rows)
//                 .eq(i)
//                 .after('<tr class="group"><td colspan="4">' + htmlString + '</td></tr>');

//               last = group;
//             }
//           });
//       },
//       columns: [
//         { data: rankColumn },
//         { data: 'institute_name' },
//         { data: scoreColumn },
//         {
//           className: 'dt-body-left',
//           render: (data, type, row) => {
//             if (mobileCheck()) {
//               return '';
//             }

//             const d3Node = generateStackBarChart(row, 400);

//             // convert to html string
//             const htmlString = d3Node.outerHTML;
//             return `${htmlString}`;
//           },
//         },
//       ],
//     });
//   })
// }

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

  // const data = dataset.map(d => d.value);
  // create rect for each data element with text inside it
  // const svg = d3.create('svg')
  //   .attr('width', width)
  //   .attr('height', 30)
  //   .attr('viewBox', [0, 0, width, 30])

  // const x = d3.scaleLinear()
  //   .domain([0, 1000])
  //   .range([0, width - 50]);


  // svg.append('g')
  //   .selectAll('rect')
  //   .data(dataset)
  //   .join('rect')
  //   .attr('x', (d, i) => x(d3.sum(data.slice(0, i))))
  //   .attr('y', 0)
  //   .attr('height', 30)
  //   .attr('width', d => x(d.value))
  //   .attr('fill', (d, index) => {
  //     return filters.find(f => f.score_id === d.id).color;
  //   });

  // get ending x position of last rect
  // const lastRect = svg.select('rect:last-child');
  // const lastRectX = +lastRect.attr('x');
  // const lastRectWidth = +lastRect.attr('width');


  // append circle at end
  // const pencil = svg.append('g')
  //   .attr('transform', `translate(${(lastRectX + lastRectWidth)}, -2)`)

  // pencil.append('polygon')
  //   .attr('points', '0 34.41 0 0 51.01 17.2')
  //   .attr('fill', '#EFC8AD');

  // pencil.append('polygon')
  //   .attr('points', '39.52 21.08 51.01 17.2 39.52 13.33')
  //   .attr('fill', '#47484C');

  // if (+row['overall_score'] > 400) {

  //   svg.append('g')
  //     .selectAll('text')
  //     .data(dataset)
  //     .join('text')
  //     .attr('x', (d, i) => x(d3.sum(data.slice(0, i))) + x(d.value) / 2)
  //     .attr('y', 20)
  //     .attr('text-anchor', 'middle')
  //     .attr('font-size', '12px')
  //     .attr('fill', 'white')
  //     .text(d => d.value);
  // }


  return svg.node();
}