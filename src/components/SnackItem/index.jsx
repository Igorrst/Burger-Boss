import styles from "./SnackItem.module.css";

// eslint-disable-next-line react/prop-types
export default function SnackItem({ name, imgUrl, description, price }) {
  return (
    <li className={styles.snack}>
      <img className={styles.img} src={imgUrl} alt={name} />
      <div className={styles.nameAndDescriptionContainer}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.priceAndButtonContainer}>
        <h2 className={styles.title}>R$ {price}</h2>
        <button className={styles.button}>Adicionar ao carrinho</button>
      </div>
    </li>
  );
}
