import React from "react";

import "./styles.css";

// const styles = {
//   container: {
//     background: "#ddd",
//   },
// };

const Box = ({ title, children }) => {
  return (
    <div className="box__container">
      <h5 className="box__title">{title}</h5>

      <div className="box__content">{children}</div>
    </div>
  );
};

export default Box;
