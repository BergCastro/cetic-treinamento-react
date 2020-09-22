import React from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";

function App() {
  return (
    <div>
      <Header />

      <div>
        <div>
          <div>
            <h1>Posts</h1>
            <hr />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
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
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
