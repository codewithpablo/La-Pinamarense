"use client";

import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Package, Tag, Zap, ShoppingBag, ListPlus } from 'lucide-react'; 

// Lista de categorías FIJA y original
const initialOption = { 
    value: "all", 
    label: "Todos", 
    icon: ListPlus 
}; 

const categories = [
    initialOption,
    // NOTA: Usé "combos" en minúsculas porque así se filtraba antes.
    // Si tu filtro en Store.tsx espera mayúsculas, ajusta los valores.
    { value: "combos", label: "Combos", icon: Package },
    { value: "promos", label: "Promos", icon: Tag },
    { value: "ofertas", label: "Ofertas", icon: Zap },
    { value: "productos", label: "Productos", icon: ShoppingBag },
];

interface CategorySelectProps {
    value: string; 
    onValueChange: (value: string) => void; 
    // *** PROP categories ELIMINADO ***
}

export default function CategorySelect({ value, onValueChange }: CategorySelectProps) {
    
    // Buscar la opción seleccionada de la lista FIJA
    const selectedItem = categories.find(item => item.value === value) || initialOption;
    const SelectedIcon = selectedItem.icon;

    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4">
                    <SelectedIcon className="h-4 w-4 text-green-700" />
                    <SelectValue placeholder="Selecciona una categoría">
                        <span className="text-green-800">{selectedItem.label}</span>
                    </SelectValue>
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-green-900">Categoría de Producto</SelectLabel>
                    {/* Mapear la lista de categorías FIJA */}
                    {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                            <div className="flex items-center gap-2">
                                <category.icon className="h-4 w-4" /> <span className="text-green-800">{category.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}