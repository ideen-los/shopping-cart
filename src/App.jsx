import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { ShoppingPage } from "./components/ShoppingPage";
import { Home } from "./components/Home";
import { ShoppingCart } from "./components/ShoppingCart";
import { useProducts } from "./components/useProducts";
import { useState } from "react";

function App() {
  const { loading, data, error } = useProducts();
  const [productsInCart, setProductsInCart] = useState([]);

  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="shop"
            element={
              <ShoppingPage
                data={data}
                error={error}
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
              />
            }
          />
          <Route
            path="shop/cart"
            element={
              <ShoppingCart
                data={data}
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
