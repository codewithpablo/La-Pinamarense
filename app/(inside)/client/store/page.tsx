import React from 'react'
import ProductCard from '@/components/mine/cards/ProductCard';
import StoreSearcher from '@/components/mine/searchers/StoreSearcher';
import Logo from '@/components/mine/logos/Logo';
import MobileMenu from '@/components/mine/menu/LogOutMenu';
// types/Product.ts
export interface Product {
  id: number;
  imageUrl: string;
  productName: string;
  brand: string;
  category: string;
  netContent: string;
  price: string;
}


export const products: Product[] = [
  {
    id: 1,
    imageUrl: "/promos.jpg",
    productName: "Gaseosa",
    brand: "Coca-Cola",
    category: "Bebidas",
    netContent: "500ml",
    price: "1800",
  },
  {
    id: 2,
    imageUrl: "/ravioles.jpg",
    productName: "Ravioles",
    brand: "La Italiana",
    category: "Pastas",
    netContent: "500g",
    price: "2500",
  },
  {
    id: 3,
    imageUrl: "/combo-super-pancho.jpg",
    productName: "Super Panchos",
    brand: "Fargo",
    category: "Combos",
    netContent: "12 unidades",
    price: "7000",
  },
  {
    id: 4,
    imageUrl: "/ice-cream.jpg",
    productName: "Helados",
    brand: "Frigor",
    category: "Postres",
    netContent: "1KG",
    price: "9000",
  },
  {
    id: 5,
    imageUrl: "/dulce-de-leche.jpg",
    productName: "Dulce de leche",
    brand: "Ser",
    category: "Untable",
    netContent: "300g",
    price: "2700",
  },
  {
    id: 5,
    imageUrl: "/pizza.jpg",
    productName: "3 Pizzas",
    brand: "Muzzarela",
    category: "Pre-Horno",
    netContent: "250g",
    price: "12000",
  },
  {
    id: 5,
    imageUrl: "/patitas.png",
    productName: "Patitas de pollo",
    brand: "Swift",
    category: "Comestibles",
    netContent: "300g",
    price: "3500",
  },
  {
    id: 5,
    imageUrl: "/picada.jpg",
    productName: "Picada",
    brand: "Sin marca",
    category: "Promos",
    netContent: "1KG",
    price: "2400",
  },
];

const Store = () => {
  return ( 
    <div className='   '>
            <div className='flex lg:hidden justify-between items-center  mb-5'>
              <Logo />
              <MobileMenu />
            </div>
           <StoreSearcher />
        <div className='grid-cols-2 lg:py-10 lg:pr-5 lg:grid-cols-4 grid gap-2 lg:gap-2 '>
        
        { products.map(  (product)=>(
            <ProductCard
                imageUrl={product.imageUrl}
                productName={product.productName}
                brand={product.brand}
                category={product.category}
                netContent={product.netContent}
                price={product.price}
              />
        ))}
    </div>
    </div>
  )
}

export default Store