import "./CartItem.scss";
import CloseIcon from "../../assets/closeIcon.svg";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cartSlice";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartAction.remove({ product: { id: props.product.id } }));
  };
  return (
    <div className="cart-item">
      <div className="cart-item_image-container">
        <img src={props.product.image} alt={props.product.title}></img>
      </div>
      <div className="cart-item_information">
        <div className="cart-item_top">
          <h2>{props.product.title}</h2>
          <h3>{props.product.vendor}</h3>
          <p>Qty:{props.product.amount}</p>
        </div>
        <div className="cart-item_bot">
          <h3>${props.product.price}</h3>
        </div>
      </div>
      <div className="cart-item_remove" onClick={removeHandler}>
        <img src={CloseIcon}></img>
      </div>
    </div>
  );
};

export default CartItem;
