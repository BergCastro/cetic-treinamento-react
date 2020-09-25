import React from "react";

import { Container, Content, Title } from "./styles";

const Box = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default Box;
