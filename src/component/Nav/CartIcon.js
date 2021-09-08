import "./nav-item.scss";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cartSlice";
const CartIcon = () => {
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(cartAction.toggle());
  };
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Button onClick={cartHandler} title="CART"></Button>
        </li>
      </ul>
    </nav>
  );
};

export default CartIcon;
