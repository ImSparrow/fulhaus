import "./button.scss";
const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
