import styles from './DrinkItem.module.css';

const DrinkItem = ({ name, description, image, price }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>R$ {price}</p>
        <button className='button--add'>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default DrinkItem;