// src/components/mine/store/Store.tsx

"use client";

import React from 'react';
import { useState, useMemo } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion'; 

import ProductCard from '@/components/mine/cards/ProductCard'; 
import StoreSearcher from '@/components/mine/searchers/StoreSearcher'; 
import Logo from '@/components/mine/logos/Logo';

// Importamos componentes de UI necesarios
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; 
import { Car } from "lucide-react"; 

// --- DEFINICIONES DE CONSTANTES ---

const ALL_CATEGORIES_VALUE = "all"; 
const CATEGORY_COMBOS_VALUE = "Combos"; 
const COMBO_VIP_VALUE = "vip";        
const COMBO_GENERAL_VALUE = "general"; 

// --- RUTAS DE IMAGENES ACTUALIZADAS CON LOS NOMBRES DE ARCHIVO REALES ---
// (Asumiendo que estos archivos están en la carpeta public/)
const FIAMBRES_IMAGE = "/fiambres.jpg"; 
const VPOWER_IMAGE = "/combos.jpg";
const LOCOS_IMAGE = "/combo-super-pancho.jpg";
const PIZZA_IMAGE = "/patitas.png";
const PANCHO_IMAGE = "/picada.jpg";


export interface Product {
    id: number;
    imageUrl: string;
    productName: string;
    category: string;
    description: string;
    price: string;
}

// ===================================================================
// 1. ARRAY DE PRODUCTOS CON RUTAS DE IMAGENES ACTUALIZADAS
// ===================================================================
export const products: Product[] = [
    // --- COMBOS INIGUALABLES (Categoría: Combos) - USAN FIAMBRES_IMAGE ---
    { id: 1, imageUrl: FIAMBRES_IMAGE, productName: "Combo 1", category: "Combos", description: "1 pan de miga + 10 fetas de barra + 10 fetas de paleta", price: "4000" },
    { id: 2, imageUrl: FIAMBRES_IMAGE, productName: "Combo 1 VIP", category: "Combos", description: "1 pan de miga + 10 fetas de barra + 10 fetas de paleta coc.", price: "4200" }, 
    { id: 3, imageUrl: FIAMBRES_IMAGE, productName: "Combo 1 VIP 1", category: "Combos", description: "1 pan de miga + 10 fetas de barra + 10 fetas de milán", price: "4500" }, 
    { id: 4, imageUrl: FIAMBRES_IMAGE, productName: "Combo 1 VIP 2", category: "Combos", description: "1 pan de miga + 10 fetas de barra + 5 fetas de cocida + 8 fetas de milán", price: "4500" }, 
    { id: 5, imageUrl: FIAMBRES_IMAGE, productName: "Combo 2", category: "Combos", description: "2 pre-pizzas + 150 grs. de paleta + 300 grs. de cremoso", price: "3700" },
    { id: 6, imageUrl: FIAMBRES_IMAGE, productName: "Combo 2 VIP", category: "Combos", description: "2 pre-pizzas + 150 grs. de paleta coc. + 300 grs. de muzzarella", price: "4700" }, 
    { id: 7, imageUrl: FIAMBRES_IMAGE, productName: "Combo 2 VIP 1", category: "Combos", description: "2 pre-pizzas + 300 grs. de cremoso + 150 grs. de paleta coc.", price: "4000" }, 
    { id: 8, imageUrl: FIAMBRES_IMAGE, productName: "Combo 3", category: "Combos", description: "400 grs. barra + 400 grs. paleta", price: "5500" },
    { id: 9, imageUrl: FIAMBRES_IMAGE, productName: "Combo 3 VIP", category: "Combos", description: "400 grs. barra + 400 grs. paleta cocida", price: "6500" },
    { id: 10, imageUrl: FIAMBRES_IMAGE, productName: "Combo 4", category: "Combos", description: "1 doc. pan p/ panchos + 1 doc. salchichas + 1 mostaza o ketchup", price: "3700" },
    { id: 11, imageUrl: FIAMBRES_IMAGE, productName: "Combo 4 VIP", category: "Combos", description: "2 pan p/ panchos x6 + 2 salchichas esp. x6 + 1 mostaza o ketchup", price: "4500" },
    { id: 12, imageUrl: FIAMBRES_IMAGE, productName: "Combo 5", category: "Combos", description: "2 paq. hamburg. + 4 pan p/ hamburg. + 4 fetas de paleta + 4 fetas de barra", price: "3600" },
    { id: 13, imageUrl: FIAMBRES_IMAGE, productName: "Combo 5 VIP", category: "Combos", description: "2 pack hamburg. + 4 pan p/ hamburg. + 4 fetas de paleta coc. + 4 fetas de barra", price: "4000" },
    { id: 14, imageUrl: FIAMBRES_IMAGE, productName: "Combo 6", category: "Combos", description: "1 pascualina + 200 grs. cremoso + 200 grs. paleta", price: "3300" },
    { id: 15, imageUrl: FIAMBRES_IMAGE, productName: "Combo 6 VIP", category: "Combos", description: "1 pascualina + 200 grs. cremoso + 200 grs. paleta cocida", price: "3500" },
    { id: 16, imageUrl: FIAMBRES_IMAGE, productName: "Combo 7", category: "Combos", description: "2 doc. tapa p/ emp. h/f + 250 grs. paleta + 200 grs. cremoso", price: "4500" },
    { id: 17, imageUrl: FIAMBRES_IMAGE, productName: "Combo 7 VIP", category: "Combos", description: "2 doc. tapa p/ emp. h/f + 250 grs. paleta cocida + 200 grs. cremoso", price: "4200" },
    { id: 18, imageUrl: FIAMBRES_IMAGE, productName: "Combo 8", category: "Combos", description: "400 grs. muzzarella + 300 grs. paleta cocida", price: "5800" },
    { id: 19, imageUrl: FIAMBRES_IMAGE, productName: "Combo 9", category: "Combos", description: "300 grs. milán + 300 grs. barra", price: "5400" },
    { id: 20, imageUrl: FIAMBRES_IMAGE, productName: "Combo 10", category: "Combos", description: "400 grs. cremoso + 400 grs. paleta", price: "4500" },
    { id: 21, imageUrl: FIAMBRES_IMAGE, productName: "Combo 10 VIP", category: "Combos", description: "400 grs. cremoso + 400 grs. paleta cocida", price: "5000" },
    { id: 22, imageUrl: FIAMBRES_IMAGE, productName: "Combo 11", category: "Combos", description: "1 pan lactal + 10 fetas de barra + 10 fetas de paleta", price: "4200" },
    { id: 23, imageUrl: FIAMBRES_IMAGE, productName: "Combo 11 VIP", category: "Combos", description: "1 pan lactal + 10 fetas de barra + 10 fetas de paleta cocida", price: "4500" },
    { id: 24, imageUrl: FIAMBRES_IMAGE, productName: "Combo 12", category: "Combos", description: "200 grs. jamón + 300 grs. milán + 300 grs. barra", price: "5900" },
    
    // --- COMBOS 200 GRS - USAN FIAMBRES_IMAGE ---
    { id: 101, imageUrl: FIAMBRES_IMAGE, productName: "Combo 1 (200 GRS)", category: "Combos 200 GRS", description: "200 grs. paleta cocida + 200 grs. queso barra", price: "3500" },
    { id: 102, imageUrl: FIAMBRES_IMAGE, productName: "Combo 2 (200 GRS)", category: "Combos 200 GRS", description: "200 grs. jamón cocido + 200 grs. queso barra", price: "4000" },
    { id: 103, imageUrl: FIAMBRES_IMAGE, productName: "Combo 3 (200 GRS)", category: "Combos 200 GRS", description: "200 grs. milán + 200 grs. queso barra", price: "3700" },
    { id: 104, imageUrl: FIAMBRES_IMAGE, productName: "Combo 4 (200 GRS)", category: "Combos 200 GRS", description: "200 grs. paleta cocida + 200 grs. cremoso", price: "2800" },
    { id: 105, imageUrl: FIAMBRES_IMAGE, productName: "Combo 5 (200 GRS)", category: "Combos 200 GRS", description: "200 grs. mortadela lario + 200 grs. queso barra", price: "3400" },
    { id: 106, imageUrl: FIAMBRES_IMAGE, productName: "Combo 6 (200 GRS)", category: "Combos 200 GRS", description: "200 grs. paleta cocida + 200 grs. muzzarella", price: "3400" },

    // --- COMBOS V-POWER - USAN VPOWER_IMAGE ---
    { id: 201, imageUrl: VPOWER_IMAGE, productName: "V-Power 1", category: "Combos V-POWER", description: "1 pan de miga + 10 fetas de barra noal + 10 fetas de jamón", price: "6000" },
    { id: 202, imageUrl: VPOWER_IMAGE, productName: "V-Power 2", category: "Combos V-POWER", description: "1 pan lactal + 10 fetas de barra noal + 10 fetas de jamón lario", price: "6000" },
    { id: 203, imageUrl: VPOWER_IMAGE, productName: "V-Power 3", category: "Combos V-POWER", description: "400 grs. de barra noal + 400 grs. de jamón lario", price: "8500" },
    { id: 204, imageUrl: VPOWER_IMAGE, productName: "V-Power 4", category: "Combos V-POWER", description: "1 pascualina + 200 grs. cremoso noal + 200 grs. jamón lario", price: "5000" },
    { id: 205, imageUrl: VPOWER_IMAGE, productName: "V-Power 5", category: "Combos V-POWER", description: "2 doc. de tapas criollas + 250 grs. de jamón lario + 200 grs. de crem. noal", price: "6200" },
    { id: 206, imageUrl: VPOWER_IMAGE, productName: "V-Power 6", category: "Combos V-POWER", description: "400 grs. de cremoso noal + 400 grs. de jamón lario", price: "7600" },
    { id: 207, imageUrl: VPOWER_IMAGE, productName: "V-Power 7", category: "Combos V-POWER", description: "200 grs. milán lario + 200 grs. de barra noal", price: "5900" },
    { id: 208, imageUrl: VPOWER_IMAGE, productName: "V-Power 8", category: "Combos V-POWER", description: "200 grs. mortadela paladini + 200 grs. de barra noal", price: "4000" },
    { id: 209, imageUrl: VPOWER_IMAGE, productName: "V-Power 9", category: "Combos V-POWER", description: "2 paq. hamb. friar fiesta + 4 panes de hamburguesa + 4 fetas de barra y pal", price: "5600" },
    { id: 210, imageUrl: VPOWER_IMAGE, productName: "V-Power 10", category: "Combos V-POWER", description: "200 grs. jamón lario + 200 grs. barra noal", price: "4500" },
    { id: 211, imageUrl: VPOWER_IMAGE, productName: "V-Power 11", category: "Combos V-POWER", description: "1 doc. salchichas palad. + 1 ketchup o mostaza + 1 doc. pan de pancho", price: "7000" },
    { id: 212, imageUrl: VPOWER_IMAGE, productName: "V-Power 12", category: "Combos V-POWER", description: "1 pascualina + 200 grs. barra noal + 200 grs. jamón lario", price: "5500" },

    // --- COMBOS LOCOS - USAN LOCOS_IMAGE ---
    { id: 301, imageUrl: LOCOS_IMAGE, productName: "Combo Loco 1", category: "Combos LOCOS", description: "100 grs. paleta cocida + 100 grs. queso barra + 100 grs. milán", price: "2500" },
    { id: 302, imageUrl: LOCOS_IMAGE, productName: "Combo Loco 2", category: "Combos LOCOS", description: "100 grs. salchichón + 100 grs. queso barra + 100 grs. mortadela", price: "2500" },
    { id: 303, imageUrl: LOCOS_IMAGE, productName: "Combo Loco 3", category: "Combos LOCOS", description: "100 grs. morcillón + 100 grs. queso barra + 100 grs. mortadela", price: "2500" },

    // --- COMBOS GRANDES - USAN FIAMBRES_IMAGE ---
    { id: 401, imageUrl: FIAMBRES_IMAGE, productName: "Combo 1 (GRANDE)", category: "Combos GRANDES", description: "1 pan de miga grande + 1 kg de queso barra + 1 kg de paleta cocida", price: "22000" },
    { id: 402, imageUrl: FIAMBRES_IMAGE, productName: "Combo 2 (GRANDE)", category: "Combos GRANDES", description: "1 pan de miga grande + 1 kg de queso barra + 1 kg de paleta sadw.", price: "19500" },
    { id: 403, imageUrl: FIAMBRES_IMAGE, productName: "Combo 3 (GRANDE)", category: "Combos GRANDES", description: "1 pan de miga grande + 1 kg de queso barra + 1 kg de jamón coc.", price: "24000" },
    { id: 404, imageUrl: FIAMBRES_IMAGE, productName: "Combo 4 (GRANDE)", category: "Combos GRANDES", description: "1 kg de queso barra + 1 kg de paleta sadw.", price: "13000" },
    { id: 405, imageUrl: FIAMBRES_IMAGE, productName: "Combo 5 (GRANDE)", category: "Combos GRANDES", description: "1 kg de queso barra + 1 kg de paleta cocida", price: "15600" },
    { id: 406, imageUrl: FIAMBRES_IMAGE, productName: "Combo 6 (GRANDE)", category: "Combos GRANDES", description: "1 kg de queso barra + 1 kg de jamón cocido", price: "17000" },

    // --- COMBOS INDIVIDUALES TEMÁTICOS ---
    { id: 501, imageUrl: FIAMBRES_IMAGE, productName: "Combo Pernil", category: "Combo PERNIL", description: "12 panes de pernil + 150 grs de paleta cocida + 150 grs de queso barra", price: "2900" },
    // Usa PIZZA_IMAGE
    { id: 502, imageUrl: PIZZA_IMAGE, productName: "Combo Pizzeta", category: "Combo PIZZETA", description: "24 pizzetas + 200 grs de muzzarella + 100 grs de paleta cocida", price: "3600" },
    // Usan PIZZA_IMAGE
    { id: 503, imageUrl: PIZZA_IMAGE, productName: "Combo Mega Fiesta 1", category: "Combo MEGA FIESTA", description: "1 pieza de muzzarella x 3 kg + 30 pre-pizzas + 500 grs de paleta rallada...", price: "49999" },
    { id: 504, imageUrl: PIZZA_IMAGE, productName: "Combo Mega Fiesta 2", category: "Combo MEGA FIESTA", description: "1 pieza de cremoso noal x 4 kg + 30 pre-pizzas + 500 grs de paleta rallada...", price: "49999" },
    { id: 505, imageUrl: FIAMBRES_IMAGE, productName: "Combo Juntada", category: "Combo JUNTADA", description: "6 packs de hamb + 12 panes de hamb + 12 fetas de paleta + 12 fetas de queso...", price: "9000" },
    // Usa PANCHO_IMAGE
    { id: 506, imageUrl: PANCHO_IMAGE, productName: "Combo Super Pancho", category: "Combo SUPER PANCHO", description: "12 salchichas XL + 12 panes de pancho XL", price: "7000" },
];

// --- OPCIONES PARA EL SELECT DE SUB-CATEGORÍA (Combos) ---
const comboTypeOptions = [
    { name: "Todos los Combos", value: ALL_CATEGORIES_VALUE }, 
    { name: "Combos Generales", value: COMBO_GENERAL_VALUE },
    { name: "Combos VIP", value: COMBO_VIP_VALUE },
];

// --- VARIANTES DE ANIMACIÓN (Sin cambios) ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25, 
            delayChildren: 0.3     
        }
    }
};

const itemVariants = {
    hidden: { 
        y: 60, opacity: 0, scale: 0.8, rotateX: 10
    },
    visible: { 
        y: 0, opacity: 1, scale: 1, rotateX: 0,
        transition: {
            type: "spring", damping: 10, stiffness: 120, restDelta: 0.001 
        }
    },
    exit: { 
        opacity: 0, scale: 0.7, y: -30, rotateX: -10,
        transition: { duration: 0.2 }
    }
};


const Store = () => {
    // ESTADOS
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES_VALUE); 
    const [selectedComboType, setSelectedComboType] = useState(ALL_CATEGORIES_VALUE);
    
    // HANDLERS
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    
    const handleCategoryChange = (categoryValue: string) => {
        setSelectedCategory(categoryValue); 
        setSearchTerm(''); 
        setSelectedComboType(ALL_CATEGORIES_VALUE);
    };

    const handleComboTypeChange = (comboTypeValue: string) => {
        setSelectedComboType(comboTypeValue);
    };

    // LÓGICA DE FILTRADO
    const filteredProducts = useMemo(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const selectedCategoryLower = selectedCategory.toLowerCase();
        
        return products.filter(product => {
            const productCategoryLower = product.category.toLowerCase();
            const productNameLower = product.productName.toLowerCase();
            const productDescriptionLower = product.description.toLowerCase();
            
            let categoryMatch = true;
            let searchMatch = true;

            // 1. FILTRO DE CATEGORÍA
            if (selectedCategory !== ALL_CATEGORIES_VALUE) {
                
                if (selectedCategory === CATEGORY_COMBOS_VALUE) {
                    // Si se selecciona "Combos" (la principal), agrupamos
                    // cualquier categoría que contenga la palabra 'combo'
                    categoryMatch = productCategoryLower.includes(selectedCategoryLower);
                } else {
                    // Para el resto de categorías, aplicamos un filtro basado en la inclusión.
                    categoryMatch = productCategoryLower.includes(selectedCategoryLower);
                }
            }
            
            if (!categoryMatch) return false;

            // 2. FILTRO POR TÉRMINO DE BÚSQUEDA (si existe)
            if (lowerCaseSearchTerm) {
                searchMatch = (
                    productNameLower.includes(lowerCaseSearchTerm) ||
                    productDescriptionLower.includes(lowerCaseSearchTerm)
                );
            }
            
            if (!searchMatch) return false;

            // 3. FILTRO ADICIONAL DE SUB-COMBOS (VIP/General)
            // SÓLO aplica a la categoría principal "Combos"
            if (product.category === CATEGORY_COMBOS_VALUE && selectedComboType !== ALL_CATEGORIES_VALUE) {
                
                const isVip = productNameLower.includes("vip") || productDescriptionLower.includes("vip");
                
                if (selectedComboType === COMBO_VIP_VALUE) {
                    return isVip; 
                } else if (selectedComboType === COMBO_GENERAL_VALUE) {
                    return !isVip; 
                }
            } 
            
            return true;
        });
    }, [searchTerm, selectedCategory, selectedComboType]); 

    // Variable para saber si debemos mostrar el Select de sub-combos
    const showComboSubSelect = selectedCategory === CATEGORY_COMBOS_VALUE;

    return ( 
        <div className='flex flex-col gap-5'>
            
            <div className='flex-1'>
                <div className='lg:hidden justify-between items-center mb-5'>
                    <Logo />
                </div>

                {/* ------------------------------------- */}
                {/* 1. CONTENEDOR DE FILTROS SUPERIORES */}
                {/* ------------------------------------- */}
                <div className='flex flex-col md:flex-row gap-3 items-center mb-6'>
                    
                    {/* Buscador y Categoría Principal (Manejado por StoreSearcher) */}
                    <div className='flex-1 w-full'>
                        <StoreSearcher 
                            searchTerm={searchTerm} 
                            onSearchChange={handleSearchChange} 
                            selectedCategory={selectedCategory} 
                            onCategoryChange={handleCategoryChange}
                        />
                    </div>

                    {/* SELECT CONDICIONAL DE COMBOS (Sub-categoría) */}
                    <AnimatePresence>
                    {showComboSubSelect && (
                             <motion.div
                                 key="combo-select" 
                                 initial={{ width: 0, opacity: 0, x: 20 }}
                                 animate={{ width: "auto", opacity: 1, x: 0 }}
                                 exit={{ width: 0, opacity: 0, x: 20 }}
                                 transition={{ duration: 0.3 }}
                                 className="shrink-0 w-full md:w-56 overflow-hidden" 
                             >
                                 <Select onValueChange={handleComboTypeChange} defaultValue={ALL_CATEGORIES_VALUE} value={selectedComboType}>
                                     <SelectTrigger className="w-full text-base">
                                         <Car className="h-4 w-4 mr-2 text-green-600"/>
                                         <SelectValue placeholder="Selecciona el tipo de Combo" />
                                     </SelectTrigger>
                                     <SelectContent>
                                         {comboTypeOptions.map(option => (
                                             <SelectItem key={option.value} value={option.value}>
                                                 {option.name}
                                             </SelectItem>
                                         ))}
                                     </SelectContent>
                                 </Select>
                             </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                
                {/* ------------------------------------- */}
                {/* 2. VISUALIZACIÓN DE PRODUCTOS (ANIMADA ESCALONADA) */}
                {/* ------------------------------------- */}
                <motion.div
                    key={selectedCategory + searchTerm + selectedComboType} 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='grid-cols-2 py-5 lg:grid-cols-4 grid gap-2 lg:gap-2 '
                >
                    <AnimatePresence>
                        { filteredProducts.map( (product)=>(
                            <motion.div
                                key={product.id} 
                                initial="hidden" 
                                animate="visible"
                                exit="exit" 
                                layout 
                            >
                                <ProductCard
                                    imageUrl={product.imageUrl} 
                                    productName={product.productName} 
                                    description={product.description} 
                                    category={product.category}      
                                    price={product.price} 
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredProducts.length === 0 && (
                        <p className="col-span-full text-center text-gray-500 mt-10">
                            No se encontraron productos que coincidan con los filtros.
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default Store;