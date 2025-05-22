import React from 'react'
import Image from 'next/image'
import { Trash2, Plus, Minus } from "lucide-react";
import CheckoutForm from '@/components/mine/forms/CheckoutForm';
import PaymentTabs from '@/components/mine/tabs/PaymentTabs';

import { products } from '../store/page'
import PaymentCard from '@/components/mine/cards/PaymentCard';

const Cart = () => {
  return (
   <div className='flex'>
       <div className='flex flex-col gap-5 py-10 pr-10  w-1/2 h-[100%] overflow-hidden hideScrollbar '>
        <h1 className='text-bold text-green-800  text-center'>Productos agregados al carrito</h1>
        { products.map( (product)=>(
            <div className='flex gap-3' key={product.id}>
              <div className='flex justify-between w-full overflow-hidden bg-gray-50 border shadow-lg rounded-2xl h-32 '>
                  <div className='relative w-2/6'>
                        <Image
                        src={product.imageUrl}
                        fill
                        alt=''
                        className='object-cover'
                    />
                  </div>
                  <div className=' px-5  w-full flex items-center'>
                    <div className='flex justify-between w-full'>
                      <p className=''>{product.productName} <br />{product.brand}</p>
                      <p className=''>{product.netContent}</p>
                      <p className=' text-bold text-xl text-green-500'>${product.price}</p>
                    </div>
                    
            
                  </div>
            </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                      <button className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition">
                      <Plus className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-yellow-100 text-yellow-500 hover:bg-yellow-200 transition">
                      <Minus className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    </div>
            </div>
        ))}
    </div>

    <div className='h-[100dvh]  flex-1 sticky top-0 right-0 flex items-center  '>
        <div className=' p-5  shadow-xl bg-gray-100 rounded-3xl border h-[90%] w-[80%]  overflow-y-scroll hideScrollbar'>
            <div className='  w-fit mx-auto'>
              <PaymentTabs />
            </div>
            <div className='relative mb-20 z-50 flex justify-center'>
                  <PaymentCard />
            </div>
           <CheckoutForm />

        </div>
    </div>
   </div>
  )
}

export default Cart