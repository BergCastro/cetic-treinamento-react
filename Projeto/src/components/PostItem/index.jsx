import React from "react";
import { Container, Title, Details } from "./styles";

const PostItem = ({ title, author, datePost }) => {
  return (
    <Container>
      <Title className="post__title">{title}</Title>
      <Details className="post__details">
        <span>{`Por: ${author}`}</span>
        <span>{`Postado em: ${datePost}`}</span>
      </Details>
    </Container>
  );
};

export default PostItem;
