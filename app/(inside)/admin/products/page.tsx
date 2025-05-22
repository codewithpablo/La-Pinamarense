import React from 'react'
import ProductsTable from '@/components/mine/tables/ProductsTable'
import ProductSearcher from '@/components/mine/searchers/ProductSearcher'

const Products = () => {
  return (
    <div className='h-full overflow-y-scroll hideScrollbar '>
        <h1 className='text-green-800 py-5 text-center'>Agrega, elimina, añade o extrae productos, promos, ofertas o combos</h1>
        <ProductSearcher />
        <ProductsTable />
    </div>
  )
}

export default Products