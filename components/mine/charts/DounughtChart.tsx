

"use client"

import { TooltipItem } from 'chart.js';

import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from 'chart.js'
import CountUp from 'react-countup'

ChartJS.register(ArcElement, Tooltip)

const billeteras = [
  { nombre: 'Mercado Pago', saldo: 1500000 },
  { nombre: 'Naranja X', saldo: 1200000 },
  { nombre: 'PayPal', saldo: 950000 },
  { nombre: 'Stripe', saldo: 800000 },
  { nombre: 'Google Pay', saldo: 600000 },
]

const totalSaldo = billeteras.reduce((acc, b) => acc + b.saldo, 0)
const totalCuentas = billeteras.length

const formatoLabel = (valor: number) => {
  if (valor >= 1000000) return (valor / 1000000).toFixed(1) + 'M'
  if (valor >= 1000) return (valor / 1000).toFixed(1) + 'K'
  return valor.toFixed(2)
}

const data = {
  labels: billeteras.map(b => b.nombre),
  datasets: [
    {
      data: billeteras.map(b => b.saldo),
      backgroundColor: [
        '#bbf7d0', '#86efac', '#4ade80', '#16a34a', '#065f46',
        '#2dd4bf', '#34d399', '#10b981', '#6ee7b7', '#047857',
      ],
      borderColor: '#ffffff',
      borderWidth: 0,
    },
  ],
}

const options = {
  cutout: '0%',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
              label: function (tooltipItem: TooltipItem<'doughnut'>) {
        const billetera = billeteras[tooltipItem.dataIndex];
        return `${billetera.nombre}: $${formatoLabel(billetera.saldo)}`;
      }
      },
    },
    legend: { display: false },
  },
}

const DoughnutChartBilleteras = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center   gap-5">
      <div className="flex justify-center mx-auto w-36 h-36">
        <Doughnut data={data} options={options} />
      </div>

      <div className=" w-fit mx-auto space-y-2 text-sm">
        <div className='text-green-600 text-bold text-2xl'>
          Hola, Waldemar
        </div>
        <div>
          <span className="font-medium">Total de cuentas asociadas:</span>{' '}
          <span className='font-bold'>{totalCuentas}</span>
        </div>
        <div>
          <span className="font-medium ">Total acumulado:</span>{' '}
          <br />
          <span className='font-bold text-3xl text-green-700'>
            $<CountUp
            end={totalSaldo}
            duration={2}
            separator="."
            decimal=","
            decimals={2}
          />
          </span>
        </div>
      </div>
    </div>
  )
}

export default DoughnutChartBilleteras
