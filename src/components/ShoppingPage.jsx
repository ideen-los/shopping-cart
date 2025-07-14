import styles from "./ShoppingPage.module.scss";
import { Product } from "./Product";
import { Link } from "react-router-dom";

export const ShoppingPage = ({
  data,
  error,
  productsInCart = [""],
  setProductsInCart,
}) => {
  if (!data) return "Loading...";
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <div className={styles.shoppingCart}>
        Products in cart:{" "}
        <span className={styles.amount}>
          {productsInCart.length > 0 ? productsInCart.length : "0"}
        </span>
        <Link to="cart" className={styles.button}>
          Checkout
        </Link>
      </div>
      <div className={styles.productContainer}>
        <Product
          data={data}
          productsInCart={productsInCart}
          setProductsInCart={setProductsInCart}
        />
      </div>
    </>
  );
};
