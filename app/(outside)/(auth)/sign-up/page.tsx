import React from 'react'
import Image from 'next/image'
import { AuthForm } from '@/components/mine/forms/AuthForm'

const SignUp = () => {
  return (
    <div className="flex h-[100dvh]">
           <div className="relative flex-1 h-[100%]">
                 <Image src="/ofertas.jpg" alt="" fill  className=" object-cover"/>
           </div>
                

            <div className="flex-1 h-[100%]">
                 <AuthForm 
                    type="sign-up"
                    title='"Crear cuenta nueva"'
                />
            </div>
    </div>
  )
}

export default SignUp