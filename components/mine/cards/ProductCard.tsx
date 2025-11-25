// src/components/mine/cards/ProductCard.tsx

import React from "react";
import Image from "next/image";

interface ProductCardProps {
    imageUrl: string;
    productName: string;
    category: string;
    description: string; 
    price: string;
}

// Lógica de color y texto para el Badge (Basado en la categoría REAL)
const getBadgeData = (category: string, productName: string) => {
    const lowerCategory = category.toLowerCase();
    const lowerName = productName.toLowerCase();
    
    let text: string;
    let colorStyle: string;
    
    // 1. VIP (Prioridad alta: si el nombre lo dice, es VIP)
    if (lowerName.includes("vip")) {
        text = "VIP";
        colorStyle = 'bg-yellow-500 text-gray-900 shadow-xl shadow-yellow-500/50';
    } 
    // 2. COMBOS PUROS (COMÚN)
    // Solo si la categoría es EXACTAMENTE "Combos" (la principal) y no es VIP.
    else if (lowerCategory === 'combos') {
        text = "COMÚN";
        colorStyle = 'bg-gray-200 text-gray-700 shadow-md shadow-gray-400/50';
    }
    // 3. RESTO DE CATEGORÍAS ESPECÍFICAS (V-POWER, LOCOS, PERNIL, etc.)
    else {
        // Usa el nombre de la categoría, limpiando "Combo(s)"
        let baseText = category.toUpperCase().replace('COMBO', '').replace('S', '').trim();
        
        text = baseText;
        colorStyle = 'bg-cyan-700/80 text-white shadow-md shadow-cyan-700/50'; 
        
        // Ajustes de color para categorías específicas, si se desea diferenciarlas
        if (lowerCategory.includes('v-power')) {
            colorStyle = 'bg-red-700/80 text-white shadow-md shadow-red-700/50';
        } else if (lowerCategory.includes('locos')) {
            colorStyle = 'bg-purple-700/80 text-white shadow-md shadow-purple-700/50';
        }
    }
    
    return { text, colorStyle };
};


const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl,
    productName,
    category,
    description, 
    price,
}) => {
    
    // Obtener datos del badge
    const { text: badgeText, colorStyle: badgeStyle } = getBadgeData(category, productName);

    return (
        <div className="max-w-sm border bg-gray-50 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
            
            {/* -------------------- */}
            {/* Contenedor de Imagen y Badge */}
            {/* -------------------- */}
            <div className="relative h-32 w-full">
                <Image
                    src={imageUrl}
                    alt={productName}
                    fill
                    className="object-cover"
                />
                
                {/* EL BADGE/ETIQUETA DINÁMICA */}
                <div 
                    // CAMBIO 1: Eliminado 'transform -rotate-3' para que no esté inclinado.
                    // CAMBIO 2: Cambiado 'font-black' por 'font-medium' para una fuente más delgada.
                    className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest ${badgeStyle}`}
                    style={{ lineHeight: '1rem', zIndex: 10 }} 
                >
                    {badgeText}
                </div>
            </div>

            <div className="p-5 flex flex-col justify-between h-40 space-y-1">
                <div className="">
                    <h2 className="flex lg:text-lg font-semibold ">{productName}</h2>
                    
                    {/* Renderizamos el nombre real de la subcategoría del combo (opcional, para contexto) */}
                    <p className="text-sm text-gray-700 font-medium ">Categoría: {category}</p>
                    
                    {/* Renderizamos la descripción del combo */}
                    <p className="text-xs text-gray-500 line-clamp-2 "> {description}</p>
                    
                </div>
                <p className="lg:text-xl font-bold text-green-700 ">${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;