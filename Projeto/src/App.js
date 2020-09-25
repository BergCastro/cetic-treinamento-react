import React from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import PostItem from "./components/PostItem";
import RoundButton from "./components/RoundButton";
import InputSearch from "./components/InputSearch";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      {/* Início bloco listagem de posts */}
      <div className="main__container">
        <div className="posts__container">
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
        </div>

        {/* Fim bloco listagem de posts */}

        {/* Início bloco de pesquisa e filtro */}
        <div className="filters__container">
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
        </div>
      </div>
      {/* Fim bloco de pesquisa e filtro */}
      <RoundButton onClick={() => alert("Adicionar um post")}>+</RoundButton>
    </>
  );
}

export default App;
