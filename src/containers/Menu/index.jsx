import Logo from "../../assets/Logo_Burguer-Boss.png";
import styles from "./Menu.module.css";
import snacksData from "../../db.json";
import SnackItem from "../../components/SnackItem";

export default function Menu() {
  const snacks = snacksData.snacks;
  return (
      <main className={styles.main}>
        <img className={styles.logo} src={Logo} alt="Logo Burguer Boss" />
        <h2 className={styles.title}>Lanches</h2>
        <ul className={styles.menu}>
          {snacks.map(({ name, description, image, price }) => (
            <SnackItem
              key={name}
              name={name}
              description={description}
              imgUrl={image}
              price={price}
            />
          ))}
        </ul>
      </main>
  );
}
