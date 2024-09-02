import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';

const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [400, 300, 200, 400, 200, 400, 300],
        backgroundColor: 'rgba(48, 77, 163, 1)',
      },
      {
        label: 'Withdraw',
        data: [500, 400, 300, 500, 100, 500, 400],
        backgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
}


const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
};
  
function Activity(){

  return (
    <div className='bg-white rounded-xl w-[50%] h-[50%] px-5 py-3'>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default Activity