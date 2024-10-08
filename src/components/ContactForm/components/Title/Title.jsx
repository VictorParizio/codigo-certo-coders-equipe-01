/* eslint-disable react/prop-types */
import "./Title.css";

const Title = ({ children }) => {
  return (
    <div>
      <h2 className="title">{children}</h2>
    </div>
  );
};

export default Title;
