import styles from "./HorizontalChart.module.css"
import { Bar } from "react-chartjs-2"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { useEffect, useState } from "react"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function HorizontalChart(){
  const [chartData, setChartData] = useState({
    datasets: []
  })
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Data 1",
          data: [10, 2, 30 ,50, 60],
          borderColor: 'rgb(53, 162, 235, 0.4)',
          backgroundColor: 'rgba(0, 162, 235, 0.4'
        },
        {
          label: "Data 2",
          data: [30, 10, 50 ,60, 20],
          borderColor: 'rgb(53, 162, 235, 0.4)',
          backgroundColor: 'rgba(255, 162, 235, 0.4'
        },
        {
          label: "Data 3",
          data: [50, 60, 10 ,30, 50],
          borderColor: 'rgb(53, 162, 235, 0.4)',
          backgroundColor: 'rgba(100, 162, 235, 0.4'
        }
      ]
    })

    setChartOptions({
      indexAxis: 'y',
      plugins: {
        legend:{
          position: 'top'
        },
        title: {
          display: true,
          text: "Daily Revenue"
        }
      },
      maintainAspectRatio: true,
      responsive: true
    })
  }, [])
  return(
    <>
    <Bar data={chartData} options={chartOptions} style={{width: "300px", height:"200px"}}/>
    </>
  )
}
