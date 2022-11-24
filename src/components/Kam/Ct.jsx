import React, { useState } from 'react';
import './chart.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const Cht = ()=>{

    const [Options,setOptions]=useState(
        {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Last Six Month',
              },
            },
          }
    )
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const [Data,setData]=useState(
        {
            labels,
            datasets: [
              {
                fill: true,
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(255, 0, 0)',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
              },
              {
                fill: true,
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
          }
    )
    return(
        <div className="Apex">
        <Line options={Options} data={Data}/>
        </div>
    )
}

export default Cht;