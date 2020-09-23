import React from 'react';

function Box({ title, children }) {
  return (
    <>
      <div>{title}</div>
      <div>{children}</div>
    </>
  );
}

export default Box;
