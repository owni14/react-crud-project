import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import Post from './pages/Post';
import SignUp from './pages/SignUp';
import Writing from './pages/Writing';
import * as S from './App.styled';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <S.Main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Post' element={<Post />} />
            <Route path='/Writing' element={<Writing />} />
            <Route path='/Sign-in' element={<SignIn />} />
            <Route path='/Sign-up' element={<SignUp />} />
          </Routes>
        </S.Main>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
