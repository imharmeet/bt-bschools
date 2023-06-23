Chart.defaults.font.family = "Open Sans"
const comparisonTabs = [
    {
        name: 'Overall (1,000)',
        field: 'score',
        selected: true,
        maxValue: 1000,
        text: 'Overall Score'
    },
    {
        name: 'Placement (250)',
        field: 'placement_score',
        selected: false,
        maxValue: 250,
        text: 'Placement Performance Score'
    },
    {
        name: 'Learning (250)',
        field: 'learning_exp',
        selected: false,
        maxValue: 250,
        text: 'Learning Experience Score'
    },
    {
        name: 'Living (150)',
        field: 'living_exp',
        selected: false,
        maxValue: 150,
        text: 'Living Experience Score'
    },

    {
        name: 'Selection (150)',
        field: 'selection_process',
        selected: false,
        maxValue: 150,
        text: 'Selection Process, Governance & Establishment Score'
    },
    {
        name: 'Future (200)',
        field: 'future',
        selected: false,
        maxValue: 200,
        text: 'Future Orientation Score'
    },

];

async function comparisonInit() {
    const data = await d3.csv("https://akm-img-a-in.tosshub.com/businesstoday/resource/bt-schools/2023/assets/data/report.csv");

    const dataWhereYear2023 = data.filter(d => d.year === '2023');
    // get list of bank names
    const bankNames = dataWhereYear2023.map(d => d.institute);

    // create 3 select2 dropdowns
    const select1 = $("#select1-comparison-chart").select2({
        data: bankNames,
        placeholder: "Select a institute",
        theme: "bootstrap-5",
        width: '100%',
        templateSelection: function (item) {
            return getSelectionTemplate(item, '#E29E37');
        }
    });

    const select2 = $("#select2-comparison-chart").select2({
        data: bankNames,
        placeholder: "Select a institute",
        theme: "bootstrap-5",
        width: '100%',
        templateSelection: function (item) {
            return getSelectionTemplate(item, '#419195');
        }
    });

    const select3 = $("#select3-comparison-chart").select2({
        data: bankNames,
        placeholder: "Select a instie",
        theme: "bootstrap-5",
        width: '100%',
        templateSelection: function (item) {
            return getSelectionTemplate(item, '#A02F1F');
        }

    });
    let bank1, bank2, bank3, myChart;
    // add listener to select1
    select1.on('select2:select', function (e) {
        const selectData = e.params.data;
        const bankName = selectData.text;
        const bankData = data.filter(d => d.institute === bankName)[0];
        bank1 = bankData;
        drawChart();
    });

    // add listener to select2
    select2.on('select2:select', function (e) {
        const selectData = e.params.data;
        const bankName = selectData.text;
        const bankData = data.filter(d => d.institute === bankName)[0];
        bank2 = bankData;
        drawChart();
    });

    // add listener to select3
    select3.on('select2:select', function (e) {
        const selectData = e.params.data;
        const bankName = selectData.text;
        const bankData = data.filter(d => d.institute === bankName)[0];
        bank3 = bankData;
        drawChart();
    });



    // create radio buttons for each tab
    // <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
    // <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>
    const menu = d3.select('#comparison-chart .menu');
    const menuItems = menu.selectAll('div')
        .data(comparisonTabs)
        .join('div')
        .attr('class', d => d.selected ? 'badge-active' : 'badge')
        .text(d => d.name)
        .on('click', function (event, d) {
            // remove selected class from all tabs
            comparisonTabs.forEach(tab => tab.selected = false);
            // add selected class to current tab
            d.selected = true;

            // remove selected class from all menu items
            menuItems.classed('badge-active', false);
            menuItems.classed('badge', true);

            // add selected class to current menu item
            d3.select(this).classed('badge-active', true);
            d3.select(this).classed('badge', false);

            // redraw chart
            drawChart();
        });

    // institute1 = first institute in the list
    bank1 = data[0];
    // institute2 = second institute in the list
    bank2 = data[6];
    // institute3 = third institute in the list
    bank3 = data[7];

    // trigger select 
    select1.val(bank1.institute).trigger('change');
    select2.val(bank2.institute).trigger('change');
    select3.val(bank3.institute).trigger('change');

    drawChart();

    function drawChart() {

        if (!bank1 || !bank2 || !bank3) return;

        // destroy myChart if it exists
        if (myChart) myChart.destroy();

        bank1AllYears = _.where(data, { institute: bank1.institute });
        bank2AllYears = _.where(data, { institute: bank2.institute });
        bank3AllYears = _.where(data, { institute: bank3.institute });


        bank1GroupedByYears = _.groupBy(bank1AllYears, 'year');
        bank2GroupedByYears = _.groupBy(bank2AllYears, 'year');
        bank3GroupedByYears = _.groupBy(bank3AllYears, 'year');
        // get selected tab
        const selectedTab = comparisonTabs.filter(d => d.selected)[0];

        const years = _.uniq(data.map(d => +d.year));
        // ascending order
        years.sort((a, b) => a - b);
        // if (bank1AllYears[0].group_def.toString().toLowerCase() !== bank1AllYears[0].group_type.toString().toLowerCase()) {
        //     d3.select('#comparison-chart #select1-comparison-help').text(bank1AllYears[0].group_def);
        // } else {
        //     d3.select('#comparison-chart #select1-comparison-help').text('');
        // }

        // if (bank2AllYears[0].group_def.toLowerCase() !== bank2AllYears[0].group_type.toLowerCase()) {
        //     d3.select('#comparison-chart #select2-comparison-help').text(bank2AllYears[0].group_def);
        // } else {
        //     d3.select('#comparison-chart #select2-comparison-help').text('');
        // }

        const commonYears = _.intersection(bank1AllYears.map(d => d.year), bank2AllYears.map(d => d.year), bank3AllYears.map(d => d.year));

        // // sort common years
        commonYears.sort((a, b) => a - b);

        let bank1Data = commonYears.map(year => {
            return {
                year,
                value: formatValue(bank1GroupedByYears[year][0][selectedTab.field])
            }
        });

        let bank2Data = commonYears.map(year => {
            return {
                year,
                value: formatValue(bank2GroupedByYears[year][0][selectedTab.field])
            }
        });

        let bank3Data = commonYears.map(year => {
            return {
                year,
                value: formatValue(bank3GroupedByYears[year][0][selectedTab.field])
            }
        });

        // draw chart
        const ctx = document.getElementById('myChart').getContext('2d');

        // const colors = {
        //     yellow: {
        //         default: "rgba(226, 158, 55, 1)",
        //         half: "rgba(226, 158, 55, 0.2)",
        //         zero: "rgba(226, 158, 55, 0)"
        //     },
        //     blue: {
        //         default: "rgba(65, 145, 149, 1)",
        //         half: "rgba(65, 145, 149, 0.2)",
        //         zero: "rgba(65, 145, 149, 0)"
        //     },
        //     red: {
        //         default: "rgba(160, 47, 31, 1)",
        //         half: "rgba(160, 47, 31, 0.2)",
        //         zero: "rgba(160, 47, 31, 0)"

        //     },
        // };


        const colors = {
            grey: {
                default: "rgba(199, 199, 199, 0.32)",
                zero: "rgba(255, 255, 255, 0)"
            },
        };


        var gradient = ctx.createLinearGradient(0, 0, 0, 1000);
        gradient.addColorStop(0, colors.grey.default);
        gradient.addColorStop(0.25, colors.grey.zero);
        gradient.addColorStop(1, colors.grey.zero);

        console.log(selectedTab.selected)




        let bankDataSet = [{
            label: bank1.institute,
            data: bank1Data.map(d => d.value),
            backgroundColor: gradient,
            borderColor: '#F0B32F',
            spanGaps: true,
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: '#F0B32F',
            fill: true,

        },
        {
            label: bank2.institute,
            data: bank2Data.map(d => d.value),
            backgroundColor: gradient,
            borderColor: '#419195',
            fill: true,
            spanGaps: true,
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: '#419195'

        },
        {
            label: bank3.institute,
            data: bank3Data.map(d => d.value),
            backgroundColor: gradient,
            borderColor: '#A02F1F',
            fill: true,
            spanGaps: true,
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: '#A02F1F'

        },


        ];
        // Reverse the chart if value is high
        // if (bank1Data[0].value > bank2Data[0].value) {
        //     bankDataSet = bankDataSet.reverse();
        // }


        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: commonYears,
                datasets: bankDataSet
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                tension: 0.1,
                legend: {
                    labels: {
                        color: '#F5F4F5'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        color: '#7D7B80',
                        max: selectedTab.maxValue,
                        grid: {
                            display: true,
                            color: '#F5F4F5',
                            lineWidth: 0.5,
                        },
                        scaleLabel: {
                            display: true,
                            fontSize: 15,
                        },
                        stacked: false,
                        display: true,
                        ticks: {
                            crossAlign: "far",
                            color: "#7D7B80",
                            font: {
                                size: '14px',
                                weight: '600'
                            },
                            // callback: function (value, index, values) {
                            //     const valueType = selectedTab.type;
                            //     if (valueType === 'amount') {
                            //         // convert to locale currency
                            //         return formatCurrency(value);
                            //     } else if (valueType == 'percentage') {
                            //         return formatPercentage(value);
                            //     }
                            // }
                        }
                    },
                    x: {
                        ticks: {
                            grid: {
                                borderColor: '#F5F4F5',
                                color: '#F5F4F5',
                                lineWidth: 0.5,
                            },
                            font: {
                                color: '#7D7B80',
                                size: '14px',
                                weight: '600'

                            },
                            callback: function (value, index, values) {
                                // convert 2022 to FY'22
                                return commonYears[value].toString();
                            }
                        }
                    },
                },
                // hide legend
                plugins: {
                    title: {
                        padding: 27,
                        display: true,
                        text: selectedTab.text,
                        align: 'start',
                        font: {
                            weight: 400,
                            size: 14,
                        },
                        // family:'Open Sans'
                    },
                    legend: {
                        display: false
                    }
                },
            }
        });
    }



    function getSelectionTemplate(item, boxClass) {

        // get the bank data from all data
        const bankData = data.filter(d => d.institute === item.text)[0];

        if (!bankData) return item.text;
        // get group
        const group = bankData.group_type;

        // create a new div element
        const $item = $(
            `<div class=""><div style="position: absolute; left: 15px; top: 11px; width: 14px !important; height: 14px !important;border:1px solid #ffffff; border-radius: 50%; background-color: ${boxClass};"></div>
          <div>${item.text} </div></div>`
        );
        return $item;

    }
}

function formatValue(val) {
    // remove comma and percentage signs
    return parseFloat(val.replace(/,/g, '').replace('%', ''));
}



function formatPercentage(val) {
    return (val / 100).toLocaleString('en-IN', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
}


comparisonInit();