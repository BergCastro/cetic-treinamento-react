import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      <div>
        <div>
          <div>
            <h1>Posts</h1>
            <hr />
            <div>
              <h2>PWA: O que é? Vale a pena? Quando utilizar?</h2>
              <div>
                <span>Por: Lindemberg</span>
                <span>Postado em: 21 de setembro de 2020</span>
              </div>
            </div>

            <div>
              <h2>5 ferramentas em alta para desenvolvedores React</h2>
              <div>
                <span>Por: Lindemberg</span>
                <span>Postado em: 21 de setembro de 2020</span>
              </div>
            </div>

            <div>
              <h2>Iniciando com ReactJS: Navegação e Autenticação com JWT</h2>
              <div>
                <span>Por: Lindemberg</span>
                <span>Postado em: 21 de setembro de 2020</span>
              </div>
            </div>

            <div>
              <h2>Server-side rendering (SSR) com ReactJS e Next.js</h2>
              <div>
                <span>Por: Lindemberg</span>
                <span>Postado em: 21 de setembro de 2020</span>
              </div>
            </div>

            <div>
              <h2>Ambiente Javascript: Dicas, VSCode e terminal</h2>
              <div>
                <span>Por: Lindemberg</span>
                <span>Postado em: 21 de setembro de 2020</span>
              </div>
            </div>

            <div>
              <h2>Context API do React 16.3.0 e métodos de ciclo de vida</h2>
              <div>
                <span>Por: Lindemberg</span>
                <span>Postado em: 21 de setembro de 2020</span>
              </div>
            </div>

            <hr />
          </div>

          <div>
            <div>
              <h5>Pesquisar</h5>
              <div>
                <div>
                  <input type="text" placeholder="Search for..." />
                  <span>
                    <button type="button">Ir!</button>
                  </span>
                </div>
              </div>
            </div>

            <div>
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
            </div>
          </div>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
