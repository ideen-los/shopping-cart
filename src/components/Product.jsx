import { Fragment, useState } from "react";
import styles from "./Product.module.scss";

export const Product = ({
  data,
  productsInCart = [""],
  setProductsInCart,
  onlyshowCartItems = false,
  variant = "default",
}) => {
  const [loadedImages, setLoadedImages] = useState([]);
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => [...prev, id]);
  };

  const addOrRemoveProductFromCart = (id) => {
    setProductsInCart((prev) =>
      prev.includes(id) ? prev.filter((prevId) => prevId != id) : [...prev, id]
    );
  };

  const increaseAmountOfProduct = (id) => {
    setProductsInCart((prev) => [...prev, id]);
  };

  const decreaseAmountOfProduct = (id) => {
    setProductsInCart((prev) => {
      const index = prev.indexOf(id);

      if (index === -1) return prev;

      const newCart = [...prev];
      newCart.splice(index, 1);

      return newCart;
    });
  };

  // Check if to show all products or only the cart
  const filteredData = onlyshowCartItems
    ? data.filter((product) => productsInCart.includes(product.id))
    : data;

  return filteredData.map((product) => {
    let isInCart = productsInCart.includes(product.id);
    let amountInCart = productsInCart.filter((id) => id === product.id).length;

    return (
      <Fragment key={product.id}>
        {/* Wrapper */}
        <div
          className={`${styles.product} ${
            isInCart ? styles.inCart : styles.notInCart
          } ${variant === "cart" ? styles.productCart : null}`}
        >
          {/* Product title */}
          <h4>{product.title}</h4>

          {/* Product image - hide as long its not loaded */}
          <img
            src={product.image}
            onLoad={() => handleImageLoad(product.id)}
            style={{
              display: loadedImages.includes(product.id) ? "block" : "none",
            }}
          />

          {/* Skeleton loader */}
          {!loadedImages.includes(product.id) && (
            <div className={styles.skeletonImage}>Loading image ...</div>
          )}

          {/* Price */}
          <div className="price">€{product.price}</div>

          {/* Show button if its not the cart page */}

          <>
            <button onClick={() => addOrRemoveProductFromCart(product.id)}>
              {isInCart ? "Remove from cart" : "Add to cart"}
            </button>

            <div className={styles.numberOfItems}>
              <button onClick={() => decreaseAmountOfProduct(product.id)}>
                -
              </button>
              <input type="text" name="" id="" value={amountInCart} />
              <button onClick={() => increaseAmountOfProduct(product.id)}>
                +
              </button>
            </div>
          </>
        </div>
      </Fragment>
    );
  });
};
