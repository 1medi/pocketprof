import { Pie } from "react-chartjs-2"

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

export default function PieChart(){
  const [chartData, setChartData] = useState({
    datasets: []
  })
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Red", "Green", "Blue", "Porple", "Yellow"],
      datasets: [
        {
          label: "# of Votes",
          data: [10, 20, 30, 40, 50],
          borderColor: ['rgba(53, 162, 135, 0.4',
          'rgba(63, 62, 235, 0.4',
          'rgba(83, 12, 235, 0.4',
          'rgba(93, 102, 235, 0.4',
          'rgba(103, 222, 235, 0.4'
        ],
          backgroundColor: ['#780000',
          '#648767',
          '#669BBC',
          '#AB87FF',
          '#ffba08'
        ],
        borderWidth: 1
        }
      ]
    })

    setChartOptions({
      plugins: {
        legend:{
          position: 'top'
        },
        title: {
          display: true,
          text: "Different Colors of Pie"
        }
      },
      maintainAspectRatio: true,
      responsive: true
    })
  }, [])
  return(
    <>
    <Pie data={chartData} options={chartOptions} style={{width: "200px", height:"100px"}}/>
    </>
  )
}
