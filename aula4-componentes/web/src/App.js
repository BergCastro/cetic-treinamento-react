import React from "react";
import CategoryBox from "./components/CategoryBox"
import FloatButton from "./components/FloatButton";
import Header from './components/Header'
import PostItem from './components/PostItem'
import SearchBox from "./components/SearchBox"

function App() {
  return (
    <div>
      <Header />

      <div>
        <div>
          <div>
            <h1>Posts</h1>
            <hr />
            <PostItem 
                title={'PWA: O que é? Vale a pena? Quando utilizar?'}
                by={'Por: Lindemberg'}
                posted={'Postado em: 21 de setembro de 2020'}
            />
            <PostItem 
                title={'5 ferramentas em alta para desenvolvedores React'}
                by={'Por: Lindemberg'}
                posted={'Postado em: 21 de setembro de 2020'}
            />
            <PostItem 
                title={'Iniciando com ReactJS: Navegação e Autenticação com JWT'}
                by={'Por: Lindemberg'}
                posted={'Postado em: 21 de setembro de 2020'}
            />
            <PostItem 
                title={'Server-side rendering (SSR) com ReactJS e Next.js'}
                by={'Por: Lindemberg'}
                posted={'Postado em: 21 de setembro de 2020'}
            />
            <PostItem 
                title={'Ambiente Javascript: Dicas, VSCode e terminal'}
                by={'Por: Lindemberg'}
                posted={'Postado em: 21 de setembro de 2020'}
            />
            <PostItem 
                title={'Context API do React 16.3.0 e métodos de ciclo de vida'}
                by={'Por: Lindemberg'}
                posted={'Postado em: 21 de setembro de 2020'}
            />
            <hr />
          </div>

          <div>
            <SearchBox />
            <CategoryBox />
            <FloatButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
