import React from "react";

import "./styles.css";

// const styles = {
//   container: {
//     background: "#ddd",
//   },
// };

const InputSearch = ({ onChange, onClick }) => {
  return (
    <div className="input__container">
      <input
        className="input__element"
        type="text"
        placeholder="Search for..."
        onChange={onChange}
      />
      <button className="input__button" type="button" onChange={onClick}>
        Ir!
      </button>
    </div>
  );
};

export default InputSearch;
