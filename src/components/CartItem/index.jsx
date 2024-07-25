import useCart from "../../store/useCart";
import styles from "./CartItem.module.css";

// eslint-disable-next-line react/prop-types
export default function CartItem({ quantity, name, price }) {
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);

  return (
    <li className={styles.itemContainer}>
      <div className={styles.quantityContainer}>
        <button
          onClick={() => increaseQuantity(name)}
          className={styles.quantityButton}
        >
          +
        </button>
        <b>{quantity}</b>
        <button
          onClick={() => decreaseQuantity(name)}
          className={styles.quantityButton}
        >
          -
        </button>
      </div>
      <div className={styles.infoContainer}>
        <h3>{name}</h3>
        <b>R$ {price}</b>
      </div>
    </li>
  );
}
