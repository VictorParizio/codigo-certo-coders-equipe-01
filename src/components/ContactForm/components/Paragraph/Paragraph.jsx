/* eslint-disable react/prop-types */
import "./Paragraph.css";

const Paragraph = ({ children }) => {
  return (
    <div>
      <p className="paragraph">{children}</p>
    </div>
  );
};

export default Paragraph;
