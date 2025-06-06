"use client";

import Container from "@/components/ui/container";
import useCart from "@/store/use-cart";
import React from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";
import { Suspense } from "react";

const CartPage = () => {
  const cart = useCart();

  return (
    <Suspense fallback={<div>Loading cart summary...</div>}>
      <div className="bg-white">
        <Container>
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
            <div className="my-12 lg:grid lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                {cart.items.length === 0 && <p>No items added to cart</p>}
                <ul>
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              </div>
            </div>
            <Summary />
          </div>
        </Container>
      </div>
    </Suspense>
  );
};

export default CartPage;
