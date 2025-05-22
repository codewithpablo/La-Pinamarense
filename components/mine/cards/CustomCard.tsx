import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCartIcon,
  InfoIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import Image from "next/image";

// Definimos las props que va a recibir
interface CustomCardProps {
  nombre: string;
  descripcion: string;
  imagen: string;
}

export default function CustomCard({ nombre, descripcion, imagen }: CustomCardProps) {
  return (
    <Card className="rounded-3xl  shadow-none p-0 overflow-hidden  w-full">
      <CardContent className="p-0 m-0">
        <Image
          src={imagen}
          alt={nombre}
          height={100}
          width={300}
          className="w-full h-80 object-cover object-center rounded-tr-3xl rounded-tl-3xl"
        />
        <div className=" h-32 py-4 px-6">
          <h2 className="font-semibold text-lg">{nombre}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {descripcion}
          </p>
        </div>
      </CardContent>
   
    </Card>
  );
}
