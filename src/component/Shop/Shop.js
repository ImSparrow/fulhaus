import "./shop.scss";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import Product from "./Product";
const Shop = () => {
  const gather = useFetch();
  const { request, products } = gather;
  useEffect(() => {
    request();
  }, [request]);
  return (
    <div className="shop-container">
      {products.map((product) => {
        return <Product product={product} key={product.id}></Product>;
      })}
    </div>
  );
};

export default Shop;
