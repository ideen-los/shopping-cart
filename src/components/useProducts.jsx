import { useEffect, useState } from "react";
import { getRequestWithNativeFetch } from "./GetRequestWithNativeFetch";

export const useProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = await getRequestWithNativeFetch(
          "https://fakestoreapi.com/products"
        );

        console.log(productData);
        setData(productData);
      } catch (error) {
        setError(error);
        return;
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  return { loading, data, error };
};
