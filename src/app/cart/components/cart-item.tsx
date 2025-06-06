"use client";

import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/store/use-cart";
import { Product } from "../../../../types";

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
  const { removeItem } = useCart();
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
         priority
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={() => removeItem(data.id)}
            icon={<X size={15} />}
          />
        </div>

        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:grap-x-6">
          <p className="text-lg font-semibold text-black">{data.name}</p>
        </div>

        <div className="mt-1 flex text-sm">
          <p className="text-gray-500">{data.color.name} </p>
          <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name} </p>
        </div>

        <Currency value={data?.price}/>
      </div>
    </li>
  );
};

export default CartItem;
