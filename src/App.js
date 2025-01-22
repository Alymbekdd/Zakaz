import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Buy from './components/Main/Buy/Buy';
import Cart from './components/Main/Cart/Cart';
import Footer from './components/Footer/Footer';


const App = () => {

  const [cart, setCart] = useState([]);

  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main cart={cart} setCart={setCart} />} />
          <Route path='/Buy/:id' element={<Buy cart={cart} setCart={setCart} />} />
          <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

