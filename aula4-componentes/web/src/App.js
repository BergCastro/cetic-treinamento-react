import React from 'react';
import './App.css';
import Header from './components/Header';
import PostItem from './components/PostItem';
import Body from './components/Body';
import Box from './components/Box';

function App() {
  return (
    <>
      <Header />
      <Body>
        <PostItem title="Titulo" author="Autor" datePost="Data da postagem" />
        <PostItem title="Titulo" author="Autor" datePost="Data da postagem" />
        <PostItem title="Titulo" author="Autor" datePost="Data da postagem" />
        <PostItem title="Titulo" author="Autor" datePost="Data da postagem" />
        <PostItem title="Titulo" author="Autor" datePost="Data da postagem" />
        <Box title="Categorias">
          <input type="text" placeholder="Search for..." />
          <span>
            <button type="button">Ir!</button>
          </span>
        </Box>
      </Body>
    </>
  );
}

export default App;
