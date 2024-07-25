import styles from "./CartItem.module.css";

// eslint-disable-next-line react/prop-types
export default function CartItem({ quantity, name, price }) {
  return (
    <li className={styles.itemContainer}>
      <div className={styles.quantityContainer}>
        <button className={styles.quantityButton}>+</button>
        <b>{quantity}</b>
        <button className={styles.quantityButton}>-</button>
      </div>
      <div className={styles.infoContainer}>
        <h3>{name}</h3>
        <b>R$ {price}</b>
      </div>
    </li>
  );
}
