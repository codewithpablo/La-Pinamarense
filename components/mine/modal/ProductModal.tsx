"use client";

import React from "react";
import Image from "next/image";

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    productName: string;
    category: string;
    description: string;
    price: string;
}

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
        <div className="fixed inset-0  backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-5 max-w-md w-full shadow-xl animate-fadeIn">
                
                {/* Imagen */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                    <Image src={imageUrl} alt={productName} fill className="object-cover" />
                </div>

                {/* Info */}
                <h2 className="text-xl font-bold mt-3">{productName}</h2>
                <p className="text-sm text-gray-500">Categoría: {category}</p>

                <p className="text-sm mt-2 text-gray-700">{description}</p>

                <p className="text-2xl font-bold text-green-700 mt-3">${price}</p>

                {/* Botón cerrar */}
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

export default ProductModal;
