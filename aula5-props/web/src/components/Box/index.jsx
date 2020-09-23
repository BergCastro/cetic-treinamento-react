import React from "react";

const Box = () => {
  return (
    <div>
      <h5>Pesquisar</h5>

      <div>
        <input type="text" placeholder="Search for..." />
        <span>
          <button type="button">Ir!</button>
        </span>
      </div>
    </div>
  );
};

export default Box;
