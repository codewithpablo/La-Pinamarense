import React from 'react'
import SalesTable from '@/components/mine/tables/SalesTable'
import DoughnutChart from '@/components/mine/charts/DounughtChart'
import AdminTabs from '@/components/mine/tabs/AdminTabs'
import Investments from '@/components/mine/charts/Investments'
import PaymentsCardCarrousel from '@/components/mine/sliders/PaymentCardCarrousel'
import VentasLineChart from '@/components/mine/charts/VentasLineChart'

const Dashboard = () => {
  return (
    <div className=' lg:grid grid-cols-6 grid-rows-10 gap-3     h-full  w-full'>
        <div className='flex flex-col  lg:flex-row  lg:justify-between lg:items-center  col-span-4 row-span-3 rounded-2xl py-5 p-12 border  bg-gray-50 '>
              <DoughnutChart />
        </div >

       
        <div className=' col-span-2  row-span-10 rounded-2xl  overflow-y-scroll hideScrollbar '>
              <PaymentsCardCarrousel />
            <div className=''>
              <Investments />
            </div>
        </div>
        <div className=' lg:flex-col col-span-4 rounded-2xl row-span-7 '>
            <VentasLineChart />
        </div>
       
    </div>
  )
}

export default Dashboard