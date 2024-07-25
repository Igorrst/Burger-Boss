import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import cartIcon from "../../assets/Cart.png";
import CartItem from "../../components/CartItem";
import useCart from "../../store/useCart";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useCart((state) => state.cart);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  function getTotalPrice() {
    return cart.reduce(
      (acc, product) =>
        (acc += +product.price.split(",").join(".") * product.quantity),
      0
    );
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  useEffect(() => {
    if (cart.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [cart]);

  return (
    <>
      {cart.length > 0 && (
        <button className={styles.cartButton} onClick={toggleCart}>
          <img
            src={cartIcon}
            alt="Carrinho de Compras"
            className={styles.cartIcon}
          />
        </button>
      )}
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={toggleCart}
      ></div>
      <div className={`${styles.cartSidebar} ${isOpen ? styles.open : ""}`}>
        <h2>Pedidos</h2>
        <ul className={styles.cartSidebarContent}>
          {cart.map(({ quantity, name, price }) => (
            <CartItem
              key={name}
              quantity={quantity}
              name={name}
              price={price}
            />
          ))}
          {cart.length > 0 && (
            <div className={styles.finalizeOrderContainer}>
              <h3>Total: {formatCurrency(getTotalPrice())}</h3>
              <button className="button--add">Finalizar pedido</button>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Cart;
