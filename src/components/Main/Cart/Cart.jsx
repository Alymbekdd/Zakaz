import React from 'react'
import { Link } from "react-router-dom";

const Cart = ({cart, setCart}) => {

  const delite = (id) => {
    setCart(
      cart.filter((item, idx) => {
        return idx !== id
      })
    )

  }

  return (
    <main className='Cart'>
      <div className="container">
        <h1 className='Cart__title'>Ваша корзина</h1>
        <p className='Cart__count'>Количество товаров {cart.length}</p>
        <p className='Cart__count'>Общая сумма {cart.reduce((acc, rec)=>acc+rec.price,0)} сом</p>

        <section className='Menu'>

          {cart.length === 0 ? (
            <p className='Menu__none'>Пусто</p>
          ) : (
            cart.map((item, idx) => (
              <div key={idx} className="Menu__items">
                <img src={item.images[0]} alt="" />
                <div className="Menu__content">

                  <div className="Menu__content-info">
                    <h3>{item.name}</h3>
                    <h3>{item.price} сом</h3>
                    <p>{item.title}</p>
                    <p>новинка!</p>
                  </div>

                  <div className="Menu__content-btns">
                    <Link className='Menu__content-link' to={`/Buy/${item.id}`}>
                      <button className='Menu__content-btn'>Заказать</button>
                    </Link>
                    <button onClick={()=>delite(idx)} className='Menu__content-delite'>Удалить</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>

      </div>
    </main>
  )
}

export default Cart
