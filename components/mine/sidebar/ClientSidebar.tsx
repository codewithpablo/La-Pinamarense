import React from 'react'
import Link from 'next/link'

import {
  Home,
  BarChart,
  LogOut,
} from "lucide-react"

const menuItems = [
  { icon: <Home size={18} />, label: "Tienda", href: "/client/store",active: true},
  { icon: <BarChart size={18} />, label: "Carrito",  href: "/client/cart"},
  { icon: <LogOut size={18} />, label: "Cerrar sesion",href: "/"},
]



const ClientSidebar = () => {
   

  return (
           <div className=" w-full   h-full flex flex-col justify-between px-4 py-6">
      <div className="space-y-4">
        {menuItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
              className={
                        "flex items-center space-x-2 px-2 py-2 rounded-md text-sm " +
                        (item.active ? "bg-green-900 text-white" : "text-black")
                        }
              >
              <span>{item.icon}</span>
            <span>{item.label}</span>
              </Link>
          
        ))}
      </div>

      
    </div>
  )
}

export default ClientSidebar