import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './styles/main.scss';


function Chart({priorYear, currentYear}) {
    const options = {
        chart: {
            type: 'column',
            height: '200px',
            style: {
                fontFamily: 'Signika'
            }
        },
        title: null,
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    crop: false,
                    overflow: 'none'
                }
            }
        },
        xAxis: {
            categories: [
                'Last year',
                'This year',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Energy used (kwh)'
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: { enabled: false },
        series: [
            {
                data: [priorYear, currentYear],
                color: '#cfcfcf',
            }
        ]
    };
    
    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Chart;