import React, { useState, useEffect } from "react";
import Box from "../../components/Box";
import PostItem from "../../components/PostItem";
import RoundButton from "../../components/RoundButton";
import InputSearch from "../../components/InputSearch";
import Modal from '../../components/Modal';

import api from "../../services/api";
import { Container, Posts, Filters } from "./styles";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const categories = ["HTML", "Jabascript", "CSS", "React"];

  useEffect(() => {
    async function loadPosts() {
      const { data } = await api.get("/posts");

      setPosts(data);
    }

    loadPosts();
  }, []);

  return (
    <>
      <Container>
        <Posts>
          <h2>Posts</h2>
          <hr />

          {posts.map((post, index) => (
            <PostItem
              key={index}
              title={post.title}
              author={post.author}
              datePost={new Date(post.datePost).toLocaleDateString('pt-br')}
            />
          ))}
        </Posts>

        <Filters>
          <Box title="Pesquisar">
            <InputSearch />
          </Box>

          <Box title="Categorias">
            <div>
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="">{category}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Box>
        </Filters>
      </Container>
      <RoundButton onClick={() => alert("Adicionar um post")}>+</RoundButton>
      {/* <Modal isOpen={} handleCloseModal={}/>
       */}
    </>
  );
};

export default Home;
