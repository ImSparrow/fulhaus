import { useState, useCallback } from "react";

const useFetch = () => {
  const [products, setProducts] = useState([]);

  const request = useCallback(async (database) => {
    try {
      const response = await fetch(
        "https://main-api.fulhaus.com/fulhaus-tech-test/get-products"
      );
      if (!response.ok) {
        throw new Error("Error occurred while fetching");
      }
      const data = await response.json();
      let updatedProducts = [];
      for (const key in data) {
        updatedProducts.push({
          id: data[key]._id,
          image: data[key].imageURLs[0], // Getting the first image only
          title: data[key].itemName,
          price: data[key].MSRP,
          vendor: data[key].vendorName,
          amount: 1,
        });
      }

      setProducts(updatedProducts);
    } catch (error) {}
  }, []);

  return {
    request,
    products,
  };
};

export default useFetch;
