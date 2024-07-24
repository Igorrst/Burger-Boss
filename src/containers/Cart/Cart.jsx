import { useState } from 'react';
import styles from './Cart.module.css';
import cartIcon from '../../assets/Cart.png';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.cartButton} onClick={toggleCart}>
        <img src={cartIcon} alt="Carrinho de Compras" className={styles.cartIcon} />
      </button>
      <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`} onClick={toggleCart}></div>
      <div className={`${styles.cartSidebar} ${isOpen ? styles.open : ''}`}>
        <h2>Pedidos</h2>
        <div className={styles.cartSidebarContent}>
          {}
        </div>
      </div>
    </>
  );
};

export default Cart;