import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import ProductSearcher from "../searchers/ProductSearcher";
import CategorySelect from "../select/CategorySelect";
const products = [
  {
    id: 206,
    name: "Arroz Largo Fino 1kg",
    category: "Almacén",
    price: 1.5,
    rating: "2024-05-10 10:32",
    orderNumber: "A001",
    quantity: 2,
  },
  {
    id: 207,
    name: "Fideos Spaghetti 500g",
    category: "Almacén",
    price: 1.0,
    rating: "2024-05-10 11:12",
    orderNumber: "A002",
    quantity: 1,
  },
  {
    id: 208,
    name: "Aceite de Girasol 1L",
    category: "Aceites",
    price: 2.7,
    rating: "2024-05-10 12:10",
    orderNumber: "A003",
    quantity: 3,
  },
  {
    id: 209,
    name: "Azúcar Blanca 1kg",
    category: "Almacén",
    price: 1.1,
    rating: "2024-05-10 13:45",
    orderNumber: "A004",
    quantity: 2,
  },
  {
    id: 210,
    name: "Tomates Redondos",
    category: "Verduras",
    price: 2.3,
    rating: "2024-05-10 14:00",
    orderNumber: "A005",
    quantity: 1,
  },
  {
    id: 211,
    name: "Papas Blancas",
    category: "Verduras",
    price: 1.8,
    rating: "2024-05-10 14:25",
    orderNumber: "A006",
    quantity: 5,
  },
  {
    id: 212,
    name: "Queso Cremoso",
    category: "Lácteos",
    price: 4.9,
    rating: "2024-05-10 15:10",
    orderNumber: "A007",
    quantity: 1,
  },
  {
    id: 213,
    name: "Yogur Bebible Frutilla",
    category: "Lácteos",
    price: 1.3,
    rating: "2024-05-10 16:20",
    orderNumber: "A008",
    quantity: 2,
  },
  {
    id: 214,
    name: "Galletitas de Chocolate",
    category: "Snacks",
    price: 1.6,
    rating: "2024-05-10 17:40",
    orderNumber: "A009",
    quantity: 4,
  },
  {
    id: 215,
    name: "Agua Mineral 2L",
    category: "Bebidas",
    price: 1.0,
    rating: "2024-05-10 18:00",
    orderNumber: "A010",
    quantity: 6,
  },
];

export default function SalesTable() {
  return (
    <div className="w-full h-full overflow-y-scroll overflow-x-auto hideScrollbar">
      <div className="w-full border rounded-2xl overflow-hidden text-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead colSpan={6} className="  w-full p-5 text-white text-center">
                {/* Product Searcher va aca */}
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="bg-gray-200 font-bold">Pedido</TableHead>
              <TableHead className="bg-gray-200 font-bold">Producto</TableHead>
              <TableHead className="bg-gray-200 font-bold">Categoría</TableHead>
              <TableHead className="bg-gray-200 font-bold">Precio</TableHead>
              <TableHead className="bg-gray-200 font-bold">Fecha</TableHead>
              <TableHead className="bg-gray-200 font-bold">Cantidad</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                {/* Extraemos el número del pedido, eliminando el prefijo "A" */}
                <TableCell className="py-3">{product.orderNumber.replace('A', '')}</TableCell>
                <TableCell className="py-3">{product.name}</TableCell>
                <TableCell className="py-3">{product.category}</TableCell>
                <TableCell className="py-3">${product.price.toFixed(2)}</TableCell>
                {/* Acortamos la fecha */}
                <TableCell className="py-3">
                  {new Date(product.rating).toLocaleDateString("es-AR")}
                </TableCell>
                <TableCell className="py-3">{product.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}