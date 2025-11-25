"use client";

import React, { useState } from "react";
import Image from "next/image";

/* ------------------------------------------------------
   FUNCIÓN COMPLETA getBadgeData
-------------------------------------------------------*/
const getBadgeData = (category: string, productName: string) => {
    const lowerCategory = category.toLowerCase();
    const lowerName = productName.toLowerCase();
    
    let text: string;
    let colorStyle: string;
    
    if (lowerName.includes("vip")) {
        text = "VIP";
        colorStyle = "bg-yellow-500 text-gray-900 shadow-xl shadow-yellow-500/50";
    } 
    else if (lowerCategory === "combos") {
        text = "COMÚN";
        colorStyle = "bg-gray-200 text-gray-700 shadow-md shadow-gray-400/50";
    } 
    else {
        const baseText = category.toUpperCase().replace("COMBO", "").replace("S", "").trim();
        text = baseText;
        colorStyle = "bg-cyan-700/80 text-white shadow-md shadow-cyan-700/50";

        if (lowerCategory.includes("v-power")) {
            colorStyle = "bg-red-700/80 text-white shadow-md shadow-red-700/50";
        } else if (lowerCategory.includes("locos")) {
            colorStyle = "bg-purple-700/80 text-white shadow-md shadow-purple-700/50";
        }
    }
    
    return { text, colorStyle };
};


/* ------------------------------------------------------
   PROPS TIPADAS PARA EL MODAL
-------------------------------------------------------*/
interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    productName: string;
    category: string;
    description: string;
    price: string;
}

/* ------------------------------------------------------
   MODAL TIPADO CORRECTAMENTE
-------------------------------------------------------*/
const ProductModal: React.FC<ProductModalProps> = ({
    isOpen,
    onClose,
    imageUrl,
    productName,
    category,
    description,
    price,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-5 max-w-md w-full shadow-xl">

                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                    <Image src={imageUrl} alt={productName} fill className="object-cover" />
                </div>

                <h2 className="text-xl font-bold mt-3">{productName}</h2>
                <p className="text-sm text-gray-500">Categoría: {category}</p>

                <p className="text-sm mt-2 text-gray-700">{description}</p>

                <p className="text-2xl font-bold text-green-700 mt-3">${price}</p>

                <button
                    className="w-full mt-5 bg-red-500 text-white rounded-xl py-2 font-semibold hover:bg-red-600 transition-all"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};


/* ------------------------------------------------------
   PRODUCT CARD
-------------------------------------------------------*/
interface ProductCardProps {
    imageUrl: string;
    productName: string;
    category: string;
    description: string; 
    price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl,
    productName,
    category,
    description, 
    price,
}) => {

    const { text: badgeText, colorStyle: badgeStyle } = getBadgeData(category, productName);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="max-w-sm border bg-gray-50 rounded-2xl shadow-xl overflow-hidden transition-all hover:scale-105">

                <div className="relative h-32 w-full">
                    <Image
                        src={imageUrl}
                        alt={productName}
                        fill
                        className="object-cover"
                    />

                    <div 
                        className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest ${badgeStyle}`}
                    >
                        {badgeText}
                    </div>
                </div>

                <div className="p-5 flex flex-col justify-between h-52 space-y-2">
                    <div>
                        <h2 className="lg:text-lg font-semibold">{productName}</h2>
                        <p className="text-sm text-gray-700 font-medium">Categoría: {category}</p>
                        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
                    </div>

                    <p className="lg:text-xl font-bold text-green-700">${price}</p>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="w-full mt-2 bg-green-600 text-white rounded-xl py-2 text-sm font-semibold hover:bg-green-700 transition-all shadow-md"
                    >
                        Ver más
                    </button>
                </div>
            </div>

            <ProductModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                imageUrl={imageUrl}
                productName={productName}
                category={category}
                description={description}
                price={price}
            />
        </>
    );
};

export default ProductCard;
