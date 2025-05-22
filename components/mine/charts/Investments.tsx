"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

const categories = [
  { name: "Promos", value: 40, className: "[&>div]:bg-green-500" },
  { name: "Combos", value: 25, className: "[&>div]:bg-blue-500" },
  { name: "Limpieza", value: 30, className: "[&>div]:bg-yellow-500" },
  { name: "Higiene personal", value: 20, className: "[&>div]:bg-rose-500" },
  { name: "Lacteos", value: 15, className: "[&>div]:bg-purple-500" },
  { name: "Alcohol", value: 10, className: "[&>div]:bg-cyan-500" },
  { name: "Gaseosas", value: 12, className: "[&>div]:bg-pink-500" },
  { name: "Jugos saborizados", value: 18, className: "[&>div]:bg-red-500" },
  { name: "Galletitas", value: 8, className: "[&>div]:bg-indigo-500" },
  { name: "Otros", value: 5, className: "[&>div]:bg-orange-500" },
];

export default function Investments() {
  return (
    <div className="w-full flex flex-col items-center gap-6 py-10">
      <h3 className="text-light text-sm text-green-700 pt-10 text-center">Analisis de ventas del dia de hoy 
        <br />
        <span className="font-bold">11 de Mayo del 2025</span>
      </h3>
      {categories.map((category) => (
        <div key={category.name} className="w-[60%] flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">
            {category.name} - {category.value}%
          </span>
          <Progress value={category.value} className={category.className} />
        </div>
      ))}
    </div>
  );
}


