"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CustomCard from "../cards/CustomCard";
import useEmblaCarousel from "embla-carousel-react";
const categorias = [
  {
    nombre: "Fiambres",
    descripcion: "Fiambres de calidad: jamón, salami, queso y mucho más.",
    imagen: "/fiambres.jpg",
  },
  {
    nombre: "Picadas",
    descripcion: "Selección perfecta para tu picada: embutidos, quesos, aceitunas y más.",
    imagen: "/picadas.webp",
  },
  {
    nombre: "Combos",
    descripcion: "Combos irresistibles para todas las ocasiones: ideal para regalar o disfrutar.",
    imagen: "/combos.jpg",
  },
  {
    nombre: "Ofertas",
    descripcion: "Ofertas especiales para que aproveches al máximo tus compras.",
    imagen: "/ofertas.jpg",
  },
  {
    nombre: "Promos",
    descripcion: "Promociones exclusivas: no te pierdas nuestras ofertas de temporada.",
    imagen: "/promos.jpg",
  },
];

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  React.useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Cambia la cada 3 segundos

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="lg:mx-auto w-full lg:w-xs my-10 rounded-3xl overflow-hidden ">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {categorias.map((categoria, index) => (
            <div key={index} className="w-[300px] bg-green-500 rounded-3xl  mx-5 flex-shrink-0">
              <Card className="shadow-lg bg-transparent border-none p-0 m-0">
                <CardContent className="px-0 mx-0 flex justify-center">
                  <CustomCard
                    nombre={categoria.nombre}
                    descripcion={categoria.descripcion}
                    imagen={categoria.imagen}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
