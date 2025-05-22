import React from 'react'
import SalesTable from '@/components/mine/tables/SalesTable'
import DoughnutChart from '@/components/mine/charts/DounughtChart'
import AdminTabs from '@/components/mine/tabs/AdminTabs'
import PaymentCard from '@/components/mine/cards/PaymentCard'
import Investments from '@/components/mine/charts/Investments'
import PaymentsCardCarrousel from '@/components/mine/sliders/PaymentCardCarrousel'

const Dashboard = () => {
  return (
    <div className=' lg:grid grid-cols-6 grid-rows-8 gap-3     h-full  w-full'>
        <div className='flex flex-col  lg:flex-row  lg:justify-between lg:items-center  col-span-4 row-span-3 rounded-2xl py-5 p-12 border  bg-gray-50 '>
              <DoughnutChart />
             <div className='flex relative lg:bottom-6 lg:h-fit '>
               <AdminTabs />
             </div>
        </div >

       
        <div className=' col-span-2  row-span-8 rounded-2xl  overflow-y-scroll hideScrollbar'>
              <PaymentsCardCarrousel />
            <div className=''>
              <Investments />
            </div>
        </div>
        <div className=' hidden lg:flex  col-span-4 rounded-2xl row-span-5 '>
            <SalesTable />
        </div>
       
    </div>
  )
}

export default Dashboard