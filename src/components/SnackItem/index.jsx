import styles from "./SnackItem.module.css";

// eslint-disable-next-line react/prop-types
export default function SnackItem({ name, imgUrl, description, price }) {
  return (
    <li className={styles.snack}>
      <img className={styles.img} src={imgUrl} alt={name} />
      <div className={styles.infosContainer}>
        <div className={styles.nameAndPriceContainer}>
          <h2 className={styles.title}>{name}</h2>
          <h2 className={styles.title}>R$ {price}</h2>
        </div>
        <div className={styles.descriptionAndButtonContainer}>
          <p className={styles.description}>{description}</p>
          <button className={styles.button}>Adicionar ao carrinho</button>
        </div>
      </div>
    </li>
  );
}
