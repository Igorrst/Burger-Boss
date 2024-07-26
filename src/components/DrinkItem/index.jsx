import useCart from '../../store/useCart';
import styles from './DrinkItem.module.css';

const DrinkItem = ({ name, description, image, price }) => {
  const addToCart = useCart((state) => state.addProduct);
  return (
    <div className={`${styles.card} ${styles.noSelect}`} >
      <img src={image} alt={name} className={styles.image} draggable="false" />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>R$ {price}</p>
        <button className='button--add' onClick={() => addToCart({ name, description, image, price })}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default DrinkItem;