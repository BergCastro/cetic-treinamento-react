import React from "react";
import Box from "../../components/Box";
import PostItem from "../../components/PostItem";
import RoundButton from "../../components/RoundButton";
import InputSearch from "../../components/InputSearch";

import { Container, Posts, Filters } from "./styles";

const Home = () => {
  return (
    <>
      <Container>
        <Posts>
          <h2>Posts</h2>
          <hr />

          <PostItem
            title="Post 1"
            author="Lindemberg"
            datePost="23 de setembro de 2020"
          />

          <PostItem
            title="Post 2"
            author="Lindemberg"
            datePost="23 de setembro de 2020"
          />

          <PostItem
            title="Post 3"
            author="Lindemberg"
            datePost="23 de setembro de 2020"
          />

          <PostItem
            title="Post 4"
            author="Lindemberg"
            datePost="23 de setembro de 2020"
          />

          <PostItem
            title="Post 5"
            author="Lindemberg"
            datePost="23 de setembro de 2020"
          />
        </Posts>

        <Filters>
          <Box title="Pesquisar">
            <InputSearch />
          </Box>

          <Box title="Categorias">
            <div>
              <ul>
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">Javascript</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">React</a>
                </li>
              </ul>
            </div>
          </Box>
        </Filters>
      </Container>

      <RoundButton onClick={() => alert("Adicionar um post")}>+</RoundButton>
    </>
  );
};

export default Home;
