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
import {
  AppleIcon,
  BananaIcon,
  CherryIcon,
  CitrusIcon,
  GrapeIcon,
} from "lucide-react";

const fruits = [
  { value: "apple", label: "Pizzas", icon: AppleIcon },
  { value: "banana", label: "Gaseosas", icon: BananaIcon },
  { value: "cherry", label: "Helados", icon: CherryIcon },
  { value: "grapes", label: "Jugos", icon: GrapeIcon },
  { value: "citrus", label: "Leches", icon: CitrusIcon },
];

export default function CategorySelect() {
  const [value, setValue] = React.useState("apple");

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[150px]">
        <div className="flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4">
          <SelectValue placeholder="Select a fruit" className="placeholder:text-black"/>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-green-900">Producto</SelectLabel>
          {fruits.map((fruit) => (
            <SelectItem key={fruit.value} value={fruit.value}>
              <div className="flex items-center gap-2">
                <fruit.icon className="h-4 w-4" /> <span className="text-green-800 ">{fruit.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
