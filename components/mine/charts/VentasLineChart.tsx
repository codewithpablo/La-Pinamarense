// components/VentasBarChart.tsx
'use client'

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
)

const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const data: ChartData<'bar'> = {
  labels,
  datasets: [
    {
      label: 'Ventas (miles $)',
      data: [200, 350, 400, 600, 800, 1100, 950],
      backgroundColor: '#6bb05f',
      borderRadius: 6,
      maxBarThickness: 20,
    },
  ],
}

const options: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const val = context.parsed.y
          return ` $${val}K`
        },
      },
    },
  },
  scales: {

    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => `$${value}K`,
      },
    },
  },
}

const VentasBarChart = () => {
  return (
    <div className="p-4 bg-gray-50 border h-full  rounded-2xl shadow-md w-full">
      <h2 className='text-center text-light text-green-800'>Ventas diarias</h2>
      <Bar data={data} options={options} />
    </div>
  )
}

export default VentasBarChart
