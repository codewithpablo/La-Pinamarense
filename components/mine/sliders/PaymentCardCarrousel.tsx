"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import PaymentCard from "../cards/PaymentCard";

// Lista de billeteras virtuales
const virtualWallets = [
  "Stripe",
  "Revolut",
  "PayPal",
  "Apple Pay",
  "Google Pay",
  "Venmo",
  "N26",
  "Wise",
  "Skrill",
  "Neteller",
  "Curve",
  "Klarna",
  "Chime",
  "Coinbase",
];

export default function PaymentsCardCarrousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="p-0 m-0">
      <Carousel setApi={setApi} className="p-0">
        <CarouselContent>
          {virtualWallets.map( () => (
            <CarouselItem key={count}>
              <Card className="shadow-none border-none">
                <CardContent className="flex items-center py-5 px-0 m-0">
                  <div className="relative z-50">
                    <PaymentCard  />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      
      </Carousel>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        {virtualWallets[current]} {/* Muestra el nombre de la billetera actual */}
      </div>
      
    </div>
  );
}
