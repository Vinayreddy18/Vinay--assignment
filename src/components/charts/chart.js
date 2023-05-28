import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { faker } from '@faker-js/faker';
import './chart.css';

Chart.register(CategoryScale);

function chart() {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const labels1 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
  ];

  const sortedData = labels
    .map(() => faker.datatype.number({ min: -100, max: 100 }))
    .sort((a, b) => a - b);
  const sortedData1 = labels1
    .map(() => faker.datatype.number({ min: -100, max: 100 }))
    .sort((a, b) => a - b);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: sortedData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: sortedData1,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    <div className="chart-container">
      <Line options={options} data={data} height={'100%'} />
    </div>
  );
}

export default chart;
