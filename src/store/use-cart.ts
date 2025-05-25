import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { Product } from "../../types";
import toast from "react-hot-toast";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        addItem: (data: Product) =>
          set((state) => {
            const exist = state.items.find((item) => item.id === data.id);

            if (exist) {
              toast("Item already in cart.");
              return { items: state.items };
            } else {
              toast.success("Item added to cart.")  
              return { items: [...state.items, data] };
            }
          }),
        removeItem: (id: string) =>
          set((state) => {
            toast.success("Item removed from cart");
            return {
              items: state.items.filter((item) => item.id !== id),
            };
          }),
        removeAll: () =>
          set(() => ({
            items: [],
          })),
      }),
      { name: "Item-Store" }
    )
  )
);

export default useCart;
