import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
    </div>
  );
};
