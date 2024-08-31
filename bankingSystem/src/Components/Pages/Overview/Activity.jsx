import React from 'react';
import { Bar } from 'react-chartjs-2';

// const data = {
//     labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//     datasets: [
//       {
//         label: 'Deposit',
//         data: [400, 300, 200, 400, 200, 400, 300],
//         backgroundColor: 'rgba(54, 162, 235, 0.5)',
//       },
//       {
//         label: 'Withdraw',
//         data: [500, 400, 300, 500, 100, 500, 400],
//         backgroundColor: 'rgba(54, 162, 235, 1)',
//       },
//     ],
// }

const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'Sample Data',
        data: [10, 20, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
const MyBarChart = () => (
    <div>
      <Bar data={data} options={options} />
    </div>
);

export default MyBarChart