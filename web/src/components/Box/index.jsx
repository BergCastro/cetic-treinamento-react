import React from 'react';

function Box(props) {
  return (
    <div>
      <table>
        <tr>
          <td>{props.titulo}</td>
        </tr>
        <tr>
          <td>{props.conteudo}</td>
        </tr>
      </table>
    </div>
  );
}

export default Box;
