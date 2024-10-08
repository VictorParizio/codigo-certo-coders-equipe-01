/* eslint-disable react/prop-types */
import Paragraph from "../Paragraph/Paragraph";
import "./Button.css";

const Button = ({ children, widthButton }) => {
  return (
    <button className={widthButton ? "button-large" : "button-default"}>
      <Paragraph className="button-default">{children}</Paragraph>
    </button>
  );
};

export default Button;
