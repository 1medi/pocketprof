import { Doughnut } from "react-chartjs-2"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import { useEffect, useState } from "react"

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
)

export default function GoalChart1(){
  const [chartData, setChartData] = useState({
    datasets: []
  })
  const [chartOptions, setChartOptions] = useState({
    maintainAspectRatio: true,
    responsive: true
  });

  useEffect(() => {
    setChartData({
      labels: ["Completed", "In Progress"],
      datasets: [
        {
          data: [11, 2],
          borderColor: ['rgba(53, 162, 135, 0.4',
          'rgba(63, 62, 235, 0.4',
        ],
          backgroundColor: ['#53239B',
          '#CCE3FB'
        ],
        borderWidth: .5
        }
      ]
    })

    setChartOptions({
      plugins: {
        legend:{
          display: false
        }
      },
      maintainAspectRatio: true,
      responsive: true
    })
  }, [])
  return(
    <>
    <Doughnut data={chartData} options={chartOptions}/>
    </>
  )
}
