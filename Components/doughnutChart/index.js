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

export default function PieChart(){
  const [chartData, setChartData] = useState({
    datasets: []
  })
  const [chartOptions, setChartOptions] = useState({
    maintainAspectRatio: true,
    responsive: false,
    width: 10,
    height: 10
  });

  useEffect(() => {
    setChartData({
      labels: [],
      datasets: [
        {
          label: "Goals Completed",
          data: [24, 6],
          borderColor: ['rgba(53, 162, 135, 0.4',
          'rgba(63, 62, 235, 0.4',
        ],
          backgroundColor: ['#780000',
          '#648767'
        ],
        borderWidth: 1
        }
      ]
    })

    setChartOptions({
      maintainAspectRatio: true,
      responsive: false,
      width: 5,
      height: 5
    })
  }, [])
  return(
    <>
    <Doughnut data={chartData} options={chartOptions}/>
    </>
  )
}
