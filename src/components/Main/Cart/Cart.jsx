import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {

  const delite = (id) => {
    setCart(
      cart.filter((item, idx) => {
        return idx !== id
      })
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <main className='Cart'>
      <div className="container">
        <h1 className='Cart__title'>Ваша корзина</h1>
        <p className='Cart__count'>Количество товаров {cart.length}</p>
        <p className='Cart__count'>Общая сумма {cart.reduce((acc, rec) => acc + rec.price, 0)} сом</p>

        <section className='Menu'>
          {cart.length === 0 ? (
            <p className='Menu__pusto'>Пусто</p>
          ) : (
            cart.map((item, idx) => {
              const availableColors = item.colors.filter(color => color.count > 0);
              const firstAvailableColor = availableColors.length > 0 ? availableColors[0] : null;
              const imageToDisplay = firstAvailableColor ? firstAvailableColor.images[0] : 'default-image.jpg';

              return firstAvailableColor ? (
                <div key={idx} className="Menu__items">
                  <img src={imageToDisplay} alt="item" />
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
                      <button onClick={() => delite(idx)} className='Menu__content-delite'>Удалить</button>
                    </div>
                  </div>
                </div>
              ) : null;
            })
          )}
        </section>

      </div>
    </main>
  )
}

export default Cart
