import React from "react";

import { Container, Input, Button } from "./styles";

const InputSearch = ({ onChange, onClick }) => {
  return (
    <Container>
      <Input type="text" placeholder="Pesquise..." onChange={onChange} />
      <Button type="button" onChange={onClick}>
        Ir
      </Button>
    </Container>
  );
};

export default InputSearch;
