import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Pencil, Trash2, Plus, Minus } from "lucide-react";
const products = [
  {
    id: "P001",
    name: "Jamón cocido",
    brand: "Paladini",
    category: "Fiambres",
    stock: 15,
    netContent: "200g",
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$3,200.00",
    paymentMethod: "Efectivo",
  },
  {
    id: "P002",
    name: "Queso cremoso",
    brand: "La Serenísima",
    category: "Lácteos",
    stock: 10,
    netContent: "300g",
    invoice: "INV002",
    paymentStatus: "Paid",
    totalAmount: "$4,500.00",
    paymentMethod: "Débito",
  },
  {
    id: "P003",
    name: "Salame",
    brand: "Campo Austral",
    category: "Fiambres",
    stock: 8,
    netContent: "250g",
    invoice: "INV003",
    paymentStatus: "Pending",
    totalAmount: "$2,700.00",
    paymentMethod: "Mercado Pago",
  },
  {
    id: "P004",
    name: "Galletitas surtidas",
    brand: "Bagley",
    category: "Almacén",
    stock: 25,
    netContent: "400g",
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$1,200.00",
    paymentMethod: "Crédito",
  },
  {
    id: "P005",
    name: "Coca-Cola 1.5L",
    brand: "Coca-Cola",
    category: "Bebidas",
    stock: 30,
    netContent: "1.5L",
    invoice: "INV005",
    paymentStatus: "Unpaid",
    totalAmount: "$2,100.00",
    paymentMethod: "Efectivo",
  },
  {
    id: "P006",
    name: "Pan lactal",
    brand: "Fargo",
    category: "Panificados",
    stock: 12,
    netContent: "600g",
    invoice: "INV006",
    paymentStatus: "Paid",
    totalAmount: "$950.00",
    paymentMethod: "Débito",
  },
  {
    id: "P007",
    name: "Yogur bebible",
    brand: "Ser",
    category: "Lácteos",
    stock: 18,
    netContent: "900ml",
    invoice: "INV007",
    paymentStatus: "Pending",
    totalAmount: "$1,100.00",
    paymentMethod: "Mercado Pago",
  },
  {
    id: "P008",
    name: "Alfajor triple",
    brand: "Jorgito",
    category: "Kiosco",
    stock: 40,
    netContent: "70g",
    invoice: "INV008",
    paymentStatus: "Paid",
    totalAmount: "$1,800.00",
    paymentMethod: "Efectivo",
  },
  {
    id: "P009",
    name: "Manteca 200g",
    brand: "La Serenísima",
    category: "Lácteos",
    stock: 6,
    netContent: "200g",
    invoice: "INV009",
    paymentStatus: "Unpaid",
    totalAmount: "$800.00",
    paymentMethod: "Débito",
  },
  {
    id: "P010",
    name: "Cerveza 1L",
    brand: "Quilmes",
    category: "Bebidas",
    stock: 20,
    netContent: "1L",
    invoice: "INV010",
    paymentStatus: "Paid",
    totalAmount: "$2,400.00",
    paymentMethod: "Efectivo",
  },
];

export default function ProductsTable() {
  return (
    <Table className="my-10">
      <TableHeader>
        <TableRow>
          <TableHead>Producto</TableHead>
          <TableHead>Contenido Neto</TableHead>

          <TableHead>Marca</TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead className="text-center">Precio</TableHead>
          <TableHead className=" text-center">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
  {products.map((product) => (
    <TableRow key={product.invoice} className="space-y-3">
      <TableCell className="flex items-center gap-3">
        <img
          src={`/promos.jpg`}
          alt={product.name}
          className="size-[30px] rounded-full object-cover"
        />
        <span>{product.name}</span>
      </TableCell>
      <TableCell>{product.netContent}</TableCell>
      <TableCell>{product.brand}</TableCell>
      <TableCell>{product.category}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell className="text-center">{product.totalAmount}</TableCell>
      <TableCell className="flex text-center justify-center gap-4 flex-wrap">
        <button className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition">
          <Pencil className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition">
          <Trash2 className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition">
          <Plus className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-full bg-yellow-100 text-yellow-500 hover:bg-yellow-200 transition">
          <Minus className="w-4 h-4" />
        </button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
      
    </Table>
  );
}
