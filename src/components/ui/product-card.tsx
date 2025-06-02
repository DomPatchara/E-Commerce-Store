"use client";

import React, { MouseEventHandler } from "react";
import { Product } from "../../../types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModel from "@/store/use-preview-model";
import useCart from "@/store/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {


  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const previewModal = usePreviewModel();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation(); // stop navigation to product page

    previewModal.onOpen(data);
  };

  const Cart = useCart();

  const addToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    Cart.addItem(data);
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/**Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          priority
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
          className="object-cover rounded-md aspect-square"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/** Hover action */}
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={addToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      {/**Desciption */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>

        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      {/**Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
