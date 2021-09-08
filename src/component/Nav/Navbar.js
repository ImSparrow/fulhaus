import CartIcon from "./CartIcon";

import "./nav.scss";
const Navbar = () => {
  return (
    <header className="main-header">
      <div className="main-header__title">
        <h1>Fülhaus Shop</h1>
      </div>
      <CartIcon></CartIcon>
    </header>
  );
};
export default Navbar;
