import styles from './DrinkList.module.css';
import DrinkItem from '../../components/DrinkItem';
import drinksData from '../../db.json';

const DrinkList = () => {
  const { drinks } = drinksData;

  return (
    <div className={styles.drinkListContainer}>
      <h2 className={styles.title}>Bebidas</h2>
      <div className={styles.drinkListWrapper}>
      <div className={styles.drinkList}>
        {drinks.map(drink => (
          <DrinkItem key={drink.name} name={drink.name} description={drink.description} image={drink.image} price={drink.price} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default DrinkList;