import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategorySelect from "../select/CategorySelect";

export default function ProductSearcher() {
  return (
    <div className="flex w-full  gap-2">
      
        <Input type="email" placeholder="Busque uno o varios productos" className="w-[250px] placeholder:text-green-900"/>
        <CategorySelect />
        <CategorySelect />
        <CategorySelect />
      <Button className="bg-green-800 rounded-full hover:bg-green-900 w-[150px]">Buscar</Button>
    </div>
  );
}
