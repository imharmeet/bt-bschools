
async function reportInit() {
  const data = await d3.csv("assets/data/report.csv");
  const rankXML = await d3.xml('assets/img/rank.svg');
  const rankDIV = d3.select('#report-chart #rank-svg').node().append(rankXML.documentElement);
  const data2022 = data.filter(d => d.year === '2022');
  const schoolNames = [...new Set(data2022.map(d => d.institute))];

  // create 2 select2 dropdowns
  const select1 = $("#select1-report-chart").select2({
    data: schoolNames,
    placeholder: 'Search School  ',

  });


  let institute = schoolNames[0];
  // add listener to select1
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
    d3.select('#report-chart #school-report-sector').text(latestYearData.sector);
    d3.select('#report-chart #school-report-state').text(latestYearData.state);
    d3.select('#report-chart #school-report-zone').text(latestYearData.zone);
    d3.select('#report-chart #school-rating-score').text(latestYearData.score);

  }

}

reportInit();


async function rankingInit() {
  const rankingData = await d3.csv("assets/data/report.csv");
  const table = d3.select('.ranking-data .ranking-data-wrapper').append('table').attr('id', 'ranking-table').attr('class', 'full-width')
  const thead = table.append('thead')
  const tbody = table.append('tbody')
  thead.append('tr').append('th')
  const rows = tbody.append('tr').append('td')

  let itemsPerPage = 5;
  let sym = [];
  $('#ranking-table').DataTable({
    responsive: true,
    processing: true,
    bInfo: false,
    "ordering": false,
    "bLengthChange": false,
    scrollX: true,
    'pageLength': itemsPerPage,
    language: {
      searchPlaceholder: "Search here",
      search: "",
      paginate: {
        next: '<img src="assets/img/right-arrow.png" class="arrow right">',
        previous: '<img src="assets/img/right-arrow.png" class="arrow left">',
      },
    },
    data: rankingData,
    columns: [
      {
        render: (data, type, row) => {
          return `<div class="school-detail"><div class="d-flex ai-center jc-space-b"><div class="d-flex ai-center"><svg class="rank" width="52" height="33" viewBox="0 0 52 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_221_6253)"><path d="M0 0.5V32.6104H51.791L42.8895 16.5552L51.791 0.5H0Z" fill="#D3C375"/><path d="M0 28.8757V29.6225H50.1726L49.5039 28.8757H0Z" fill="white"/>
          <path d="M0 4.23308H49.506L50.1726 3.48633H0V4.23308Z" fill="white"/>
          <text transform="translate(19.7129 7.40234)" fill="#1F1C24" stroke-width="0.5" xml:space="preserve" style="white-space: pre" font-family="Open Sans" font-size="14" font-weight="bold" letter-spacing="0.01em"><tspan x="-1.76913" y="14.4312">${row.rank}</tspan></text>
          </g><defs><clipPath id="clip0_221_6253"><rect width="51.791" height="32.1104" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg><h5>${row.institute}</h5></div><span class="badge">${row.sector}</span></div><div class="progress"><div class="d-flex jc-space-b"><p>Overall Score (1,000)</p><p class="score">${row.score}</p></div><div class="progress-wrapper"><div class="progress-bar" style="width:${row.score}"></div></div></div></div> `
        }
      },
    ],
  });
}

rankingInit()     