import React from 'react'
import lupa from '../img/magnifying_glass_magnifier_search_icon_208236 1.png';
import card from '../img/IMG_0232 1.png'
import icon from '../img/IMG_0221 1.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='Header'>
      <div className='container'>
        <nav className='Header__nav'>

          <div className='Header__info'>
            <p>Women Shop</p>
            <div className='Header__info-inputs'>
              <input placeholder='искать' type="text" />
              <img src={lupa} alt="" />
            </div>
          </div>

          <div className='Header__content'>
            <Link className='Header__content-link' to={'/'}>
              <p>Главная</p>
            </Link>
            <p>Контакты</p>
            <div className="Header__content-img">
              <Link to={'/Cart'}><img src={card} alt="" /></Link>
              <Link to={'/Reg'}><img src={icon} alt="" /></Link>
            </div>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Header
