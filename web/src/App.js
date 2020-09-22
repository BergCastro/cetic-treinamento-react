import React from 'react';
import './App.css';
import Header from './components/Header';
import PostCard from './components/PostCard';
import Body from './components/Body';
import Box from './components/Box';

function App() {
  return (
    <>
      <Header />
      <Body>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <Box titulo="Categorias" conteudo="HTML CSS Javascript React" />
      </Body>
    </>
  );
}

export default App;
