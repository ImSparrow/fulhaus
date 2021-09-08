import "./ProductOverlay.scss";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cartSlice";
const ProductOverlay = (props) => {
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(cartAction.add({ product: props.product }));
  };
  return (
    <div className="product-overlay">
      <div className="product-overlay__top">
        <h2>{props.product.title}</h2>
        <h3>{props.product.vendor}</h3>
      </div>
      <div className="product-overlay__bottom">
        <button onClick={addHandler}> + Add to Cart</button>
        <h3>${props.product.price}</h3>
      </div>
    </div>
  );
};

export default ProductOverlay;
