import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],
  addProduct: (product) =>
    set((state) => {
      const productAlreadyInCart = state.cart.some(
        (p) => p.name === product.name
      );

      if (productAlreadyInCart) {
        return {
          cart: state.cart.map((p) =>
            p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }

      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  increaseQuantity: (name) =>
    set((state) => {
      return {
        cart: state.cart.map((p) =>
          p.name === name ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    }),
  decreaseQuantity: (name) =>
    set((state) => {
      return {
        cart: state.cart
          .map((p) =>
            p.name === name ? { ...p, quantity: p.quantity - 1 } : p
          )
          .filter((product) => product.quantity > 0),
      };
    }),
}));

export default useCart;
