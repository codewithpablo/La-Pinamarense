import React from 'react'
import Image from 'next/image'
import { AuthForm } from '@/components/mine/forms/AuthForm'

const SignIn = () => {
  return (
    <div className="flex justify-center lg:flex-row  h-[100dvh] overflow-hidden w-full">
           <div className="hidden relative  lg:flex  flex-1 h-[100%]">
                 <Image src="/promos.jpg" alt="" fill  className=" object-cover"/>
           </div>
                

            <div className="flex-1 h-[100dvh]">
                <AuthForm 
                    type="sign-in"
                    title='Iniciar sesion'
                />
            </div>
    </div>
  )
}

export default SignIn