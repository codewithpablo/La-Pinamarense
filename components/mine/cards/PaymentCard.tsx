import Image from 'next/image'
import React from 'react'

const PaymentCard = () => {
  return (
    <div className='relative flex  items-center my-5'>
        <div className=' flex bg-green-800  text-white text-[14px] h-[200px] w-[300px] rounded-2xl  m-3 overflow-hidden'>
                <div className='flex-1 flex flex-col justify-between pl-5 py-5'>
                   <div className='flex flex-col '>
                     <h2>Naranja X</h2>
                     <h3 className='text-bold text-lg'>$15.234.894</h3>
                   </div>
                   <div className='flex justify-between'>
                        <h2 className='flex gap-3 justify-between text-[12px]'>
                          <span>1234</span>
                          <span>5678</span>
                          <span>9101</span>
                          <span>9876</span>
                        </h2>
                   </div>
                </div>

                <div className=' h-full flex-1 flex justify-center items-start py-9'>
                      <Image src="/payment-sign.svg" width={20} height={20} className='object-contain' alt=''/>
                </div>
        </div>
        <div className='flex absolute -z-10 -rotate-12 bg-green-400 left-5 top-10 mb-20  text-white text-[14px] h-[200px] w-[300px] rounded-2xl  m-3 p-5 '>
                <div className='flex flex-col justify-between'>
                   <div className='flex flex-col '>
                     <h2>Naranja X</h2>
                     <h3>$15.234.894</h3>
                   </div>
                   <div className='flex justify-between'>
                        <h2>La Pinamarense</h2>
                   </div>
                </div>
        </div>
        
    </div>
  )
}

export default PaymentCard