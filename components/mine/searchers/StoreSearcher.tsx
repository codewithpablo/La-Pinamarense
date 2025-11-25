// StoreSearcher.tsx (Revertido)

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategorySelect from "../select/CategorySelect";
import { Search } from 'lucide-react';

interface StoreSearcherProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedCategory: string; 
    onCategoryChange: (value: string) => void; 
    // *** PROP categories ELIMINADO ***
}

const StoreSearcher: React.FC<StoreSearcherProps> = ({ 
    searchTerm, 
    onSearchChange, 
    selectedCategory, 
    onCategoryChange,
    // *** categories ELIMINADO de la desestructuración ***
}) => {
    return (
        <div className='flex flex-col lg:flex-row lg:items-center w-full gap-2'>
            <Input 
                type="text" 
                placeholder="Combos, productos u ofertas" 
                className="w-full lg:w-[250px] placeholder:text-green-900"
                value={searchTerm} 
                onChange={onSearchChange} 
            />
            <div className='flex items-center gap-2'>
                <CategorySelect 
                    value={selectedCategory} 
                    onValueChange={onCategoryChange} 
                    // *** PROP categories ELIMINADO de CategorySelect ***
                />
                
                <Button 
                    className="hidden lg:flex justify-center items-center size-[45px] bg-green-800 rounded-full hover:bg-green-900 lg:w-[150px]"
                >
                    <span className=''>Buscar</span>
                    <Search />
                </Button>
            </div>
        </div>
    );
}

export default StoreSearcher;