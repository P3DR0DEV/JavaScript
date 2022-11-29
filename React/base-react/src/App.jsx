import React from 'react';
import Login from './pages/login';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyle />
    </>
  );
}

export default App;
