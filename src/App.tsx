import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Login from './pages/Login';
import Main from './pages/Main';
import Post from './pages/Post';
import Register from './pages/Register';
import Writing from './pages/Writing';
import * as S from './App.styled';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <S.Main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Post' element={<Post />} />
            <Route path='/Writing' element={<Writing />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
        </S.Main>
      </BrowserRouter>
    </>
  );
};

export default App;
