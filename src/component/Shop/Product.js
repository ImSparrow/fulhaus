import "./Product.scss";
import { useState } from "react";
import ProductOverlay from "./ProductOverlay";
const Product = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseEnterHandler = () => {
    setIsVisible(true);
  };
  const mouseLeaveHandler = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div
        className="product-container"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <img src={props.product.image} alt={props.product.title}></img>
        {isVisible && <ProductOverlay product={props.product}></ProductOverlay>}
      </div>
    </>
  );
};

export default Product;
