import "./titlepage.scss";
import heroImage from "../../assets/hero.jpg";
import Cta from "./Cta";
const Titlepage = () => {
  return (
    <div className="main-cover">
      <div className="image-container">
        <img src={heroImage} alt="hero" />
      </div>
      <Cta></Cta>
    </div>
  );
};

export default Titlepage;
