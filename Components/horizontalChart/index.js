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
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Goals Achieved",
          data: [10, 2, 3 ,12, 15,1,3, 5 ,7 ,12 , 14, 12],
          borderColor: 'rgba(53, 162, 135, 0.4',
          backgroundColor: '#53239B'
        },
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
          text: ["Goal Report","Intermediate Violin"],
          align: 'start'
        }
      },
      maintainAspectRatio: true,
      responsive: true
    })
  }, [])
  return(
    <>
    <Bar data={chartData} options={chartOptions} style={{width: "300px", height:"400px"}}/>
    </>
  )
}
