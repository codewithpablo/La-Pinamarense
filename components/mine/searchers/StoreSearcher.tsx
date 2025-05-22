import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategorySelect from "../select/CategorySelect";
import { Search } from 'lucide-react';


const StoreSearcher = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full  gap-2 mb-5'>
         <Input type="email" placeholder="Combos, productos u ofertas" className="w-full lg:w-[250px] placeholder:text-green-900"/>
        <div className='flex items-center gap-2'>
          <CategorySelect />
        <CategorySelect />
        <Button className=" hidden lg:flex justify-center items-center  size-[45px] bg-green-800 rounded-full hover:bg-green-900 lg:w-[150px]">
        <span className=''>Buscar</span>
      </Button>
        <Search />

        </div>
      
      
    </div>
  )
}

export default StoreSearcher