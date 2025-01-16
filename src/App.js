import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Buy from './components/Main/Buy/Buy';
import Cart from './components/Main/Cart/Cart';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Buy' element={<Buy/>} />
          <Route path='/Cart' element={<Cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

