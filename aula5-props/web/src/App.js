import React from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import PostItem from "./components/PostItem";
import RoundButton from "./components/RoundButton";

function App() {
  return (
    <>
      <Header />

      {/* Início bloco listagem de posts */}
      <div>
        <h1>Posts</h1>
        <hr />

        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />

        <hr />
      </div>

      {/* Fim bloco listagem de posts */}

      {/* Início bloco de pesquisa e filtro */}
      <div>
        {/* <div>
              <h5>Pesquisar</h5>
              <div>
                <div>
                  <input type="text" placeholder="Search for..." />
                  <span>
                    <button type="button">Ir!</button>
                  </span>
                </div>
              </div>
            </div> */}

        <Box />
        <Box />

        {/* <div>
              <h5>Categorias</h5>
              <div>
                <div>
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
                </div>
              </div>
            </div> */}
      </div>
      {/* Fim bloco de pesquisa e filtro */}
      <RoundButton />
    </>
  );
}

export default App;
