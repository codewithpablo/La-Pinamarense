import React from "react";

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  brand: string;
  category: string;
  netContent: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  productName,
  brand,
  category,
  netContent,
  price,
}) => {
  return (
    <div className="max-w-sm border bg-gray-50   rounded-2xl shadow-xl overflow-hidden  transform transition-all hover:scale-105 duration-300">
      <img
        src={imageUrl}
        alt={productName}
        className="w-full h-32 object-cover"
      />
      <div className="p-5 flex flex-col  justify-between h-40  space-y-1">
        <div className="">
          <h2 className="flex lg:text-lg font-semibold ">{productName}</h2>
            <p className="text-sm ">{brand}</p>
            <p className="text-sm ">{category}</p>
            <p className="text-sm "> {netContent}</p>
        </div>
        <p className="lg:text-xl font-bold text-green-700 ">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
