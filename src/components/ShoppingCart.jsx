import { Product } from "./Product";
import styles from "./ShoppingCart.module.scss";

export const ShoppingCart = ({ data, productsInCart, setProductsInCart }) => {
  console.log(productsInCart);

  return (
    <div className={styles.shoppingCart}>
      {productsInCart.length !== 0 ? (
        <Product
          data={data}
          productsInCart={productsInCart}
          setProductsInCart={setProductsInCart}
          onlyshowCartItems={true}
          variant="cart"
        />
      ) : (
        "Nothing here"
      )}
    </div>
  );
};
