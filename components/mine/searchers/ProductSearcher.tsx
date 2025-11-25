// ./components/mine/searchers/ProductSearcher.tsx (CÓDIGO CORREGIDO)

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategorySelect from "../select/CategorySelect"; // Importación correcta
import React from 'react';

// Definimos la interfaz de las propiedades que ProductSearcher debe recibir
interface ProductSearcherProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedCategory: string; // Valor actual de la categoría
    onCategoryChange: (value: string) => void; // Función para actualizar la categoría
}

export default function ProductSearcher({
    searchTerm,
    onSearchChange,
    selectedCategory,
    onCategoryChange
}: ProductSearcherProps) {
    
    return (
        <div className="flex w-full gap-2 items-center">
            
            {/* Input de Búsqueda */}
            <Input 
                type="text" 
                placeholder="Busque uno o varios productos" 
                className="flex-grow placeholder:text-green-900"
                value={searchTerm} // Conectamos el estado de búsqueda
                onChange={onSearchChange} // Conectamos la función de cambio
            />
            
            {/* 🔴 EL SELECTOR DE CATEGORÍA CORREGIDO 🔴 */}
            <CategorySelect 
                value={selectedCategory}        // Pasamos el valor actual
                onValueChange={onCategoryChange} // Pasamos el handler de cambio
            />
            
            {/* Eliminé las llamadas duplicadas a <CategorySelect /> */}
            
            <Button className="bg-green-800 rounded-full hover:bg-green-900 w-[150px] shrink-0">
                Buscar
            </Button>
        </div>
    );
}