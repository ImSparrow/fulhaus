import { useSelector } from "react-redux";
import "./Cart.scss";
import CartItem from "./CartItem";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const items = cart.items;
  return (
    <div className="cart-container">
      {items.map((item, index) => {
        return <CartItem key={index} product={item}></CartItem>;
      })}
      <div className="checkout-container">
        <div className="cart-container__price">
          <div>
            <h3>Total:</h3>
          </div>
          <div>
            <h3>${cart.price}</h3>
          </div>
        </div>
        <div className="cart-container__checkout-button">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
