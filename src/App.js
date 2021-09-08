import Titlepage from "./component/Intro/Titlepage";
import Navbar from "./component/Nav/Navbar";
import Shop from "./component/Shop/Shop";
import { useSelector } from "react-redux";
import Cart from "./component/Cart/Cart";
import { motion, AnimatePresence } from "framer-motion";
import "./App.scss";
function App() {
  const cartDisplay = useSelector((state) => state.cart.display);
  return (
    <>
      <Navbar />
      <AnimatePresence>
        {cartDisplay && (
          <motion.div
            className="animation"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Cart></Cart>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="body-section">
        <Titlepage></Titlepage>
        <Shop></Shop>
      </div>
    </>
  );
}

export default App;
