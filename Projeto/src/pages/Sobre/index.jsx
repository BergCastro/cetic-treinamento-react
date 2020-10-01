import React, { useState } from "react";
import Box from "../../components/Box";
import PostItem from "../../components/PostItem";
import RoundButton from "../../components/RoundButton";
import InputSearch from "../../components/InputSearch";

import { Container, Posts, Filters } from "./styles";

function Button() {
  const [count, setCount] = useState(1);
  return (
    <>
      <p>{count}</p>
      <br />
      <p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <button onClick={() => setCount(count - 1)}>Diminuir</button>
      </p>
      <p>{count}</p>
    </>
  );
}

const Sobre = () => {
  return (
    <>
      <Container>
        <Button />
      </Container>
    </>
  );
};

export default Sobre;
