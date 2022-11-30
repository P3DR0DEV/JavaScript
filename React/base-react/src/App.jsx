import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Router from './Routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}
