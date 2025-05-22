'use client'  // Esto es necesario para que el código se ejecute solo en el cliente

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'  // Usamos usePathname de next/navigation
import {
  Home,
  BarChart,
  Bell,
  PieChart,
  Heart,
  Wallet,
  LogOut,
} from 'lucide-react'

const menuItems = [
  { icon: <Home size={18} />, label: 'Tablero', href: '/admin/dashboard' },
  { icon: <BarChart size={18} />, label: 'Clientes', href: '/admin/customers' },
  { icon: <Bell size={18} />, label: 'Pedidos', href: '/admin/orders' },
  { icon: <PieChart size={18} />, label: 'Productos', href: '/admin/products' },
  { icon: <Heart size={18} />, label: 'Empleados', href: '/admin/employees' },
  { icon: <Wallet size={18} />, label: 'Billeteras', href: '/admin/wallets' },
  { icon: <LogOut size={18} />, label: 'Cerrar sesión', href: '/' },
]

const AdminSidebar = () => {
  const pathname = usePathname()  // Capturamos la URL actual usando usePathname()

  return (
    <div className="w-full h-full flex flex-col justify-between px-4 py-6">
      <div className="space-y-4">
        {menuItems.map((item) => (
            <Link href={item.href} key={item.label}
              className={`flex items-center space-x-2 px-2 py-2 rounded-md text-sm ${
                pathname === item.href
                  ? 'bg-green-900 text-white'
                  : 'text-black'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AdminSidebar
