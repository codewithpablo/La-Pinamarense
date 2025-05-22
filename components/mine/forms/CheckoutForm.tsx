import * as React from "react";
import PaymentTabs from "../tabs/PaymentTabs";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CheckoutForm() {
  return (
    <Card className="w-[350px] bg-transparent border-none shadow-none">
      <CardHeader className="text-center">
        <CardTitle>Tarjeta de debito</CardTitle>
        <CardDescription>
          <span >Ingresa los datos de tu tarjeta para poder efectuar el pago</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Numero de tarjeta</Label>
              <Input id="name" placeholder="1234 1234 1234 1234" />
            </div>
            <div className="flex gap-3">
              <div className="flex-1 flex flex-col space-y-1.5">
              <Label htmlFor="name">Fecha de expiracion</Label>
              <Input id="name" placeholder="04/26" />
            </div>
            <div className="flex-1 flex flex-col space-y-1.5">
              <Label htmlFor="name">CVV</Label>
              <Input id="name" placeholder="04/26" />
            </div>
            
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">Pagar</Button>
      </CardFooter>
    </Card>
  );
}
