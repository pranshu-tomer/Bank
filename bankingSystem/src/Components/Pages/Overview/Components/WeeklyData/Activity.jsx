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
        borderRadius : 50,
        barThickness : 12,
      },
      {
        label: 'Withdraw',
        data: [500, 400, 300, 500, 100, 500, 400],
        backgroundColor: 'rgba(144, 159, 211, 1)',
        borderRadius : 50,
        barThickness : 12,
      },
    ],
}


const options = {
    scales: {
      y: {
        beginAtZero: true,
      }
    },
    plugins: {
      legend: {
          display: true,
          position: 'top',
          labels: {
              color: 'rgb(140,140,140)',
              boxWidth : 12,
              boxHeight: 12,
              useBorderRadius: true,
              borderRadius: 6,
          }
      }
    }
};
  
function Activity(){

  return (
    <div className='bg-white rounded-xl w-full h-[250px] mt-3 py-3 flex justify-center items-center'>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default Activity