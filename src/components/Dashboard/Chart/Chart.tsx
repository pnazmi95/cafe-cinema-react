import React from 'react';
import { Chart } from 'react-google-charts';

const MyChart: React.FunctionComponent = (): JSX.Element => {
  const data = [
    ['Day', 'time (hour) '],
    ['Saturday', 2],
    ['Sunday', 2.5],
    ['Monday', 4],
    ['Tuesday', 0],
    ['Wednesday', 3],
    ['Thursday', 2],
    ['Friday', 10], 
  ];

  const options = {
    title: 'Your latest activities on the site',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Activity time',
      minValue: 0,
    },
    vAxis: {
      title: 'Days',
    },
  };

  return <Chart chartType="BarChart" data={data} options={options} />;
};

export default MyChart;
