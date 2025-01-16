import React from 'react'
import item from '../../img/H20c9d9bb99974e729c20451549fd58cfD.jpg_640x640.avif';

const Cart = () => {
  return (
    <main className='Cart'>
      <div className="container">
        <h1 className='Cart__title'>Ваша корзина</h1>
        <p className='Cart__count'>Количество товаров 27</p>

        <section className='Menu'>
          <div className="Menu__items">
            <img src={item} alt="" />
            <div className="Menu__content">
              
              <div className="Menu__content-info">
              <h3>Женские нижние белья</h3>
              <h3>670 сом</h3>
              <p>отличное качество</p>
              <p>новинка!</p>
              </div>

              <div className="Menu__content-btns">
                <button className='Menu__content-btn'>Заказать</button>
                <button className='Menu__content-delite'>Удалить</button>
              </div>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}

export default Cart
