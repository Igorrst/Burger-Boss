import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],
  addProduct: (product) => set((state) => ({ cart: [...state.cart, product] })),
}));

export default useCart;
