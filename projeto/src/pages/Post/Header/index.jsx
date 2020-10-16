import React from "react";


import { Container, Title, DatePost, Author } from "./styles";

const HeaderPost = ({ post  }) => {
  
  return (
    <Container>  
      <Title>{post.title}</Title>
      <Author>{`Por: ${post.author}`}</Author>
      <DatePost>{`Postado em: ${new Date(post.datePost).toLocaleDateString('pt-br')}`}</DatePost>
      <hr />   
    </Container>
  );
};

export default HeaderPost;
