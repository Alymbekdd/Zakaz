import React, { useState, useEffect } from "react";
import icon from '../img/png-klev-club-gikq-p-ikonka-garantiya-kachestva-png-6 1.png';
import logo from '../img/Снимок_экрана_2024-12-17_000646-removebg-preview (2).png';
import wallet from '../img/png-transparent-computer-icons-credit-card-card-security-code-debit-card-credit-card-text-logo-sign-removebg-preview 1 (1).png';
import human from '../img/6596121 1.png';
import { Link } from "react-router-dom";


const Main = ({ cart, setCart, products }) => {

  const handleAddToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='main'>

      <section className='Home'>
        <h1>Онлайн магазин</h1>
        <p>Женской нижнего белья</p>
      </section>

      <div className="container">

        <section className='Shop'>

          <div className="Shop__info">

            <div className="Shop__info-content">
              <img className='Shop__info-icon' src={icon} alt="icon" />
              <div>
                <p className='Shop__info-text'>Гарантия качества 100%</p>
                <p className='Shop__info-subject'>Товары наилучшего качества</p>
              </div>
            </div>

            <div className="Shop__info-content">
              <img className='Shop__info-logo' src={logo} alt="logo" />
              <div>
                <p className='Shop__info-text'>Бесплатная доставка</p>
                <p className='Shop__info-subject'>Быстрая и надёжная доставка</p>
              </div>
            </div>

            <div className="Shop__info-content">
              <img className='Shop__info-wallet' src={wallet} alt="wallet" />
              <div>
                <p className='Shop__info-text'>Удобные способы оплаты</p>
                <p className='Shop__info-subject'>Оплачивайте заказы легко</p>
              </div>
            </div>

          </div>

          <h1 className='Shop__headline'>Наши товары</h1>

          <div className="Shop__page">
            <>
              {products.map((product, idx) => {
                const isInCart = cart.some(item => item.id === product.id);
                const availableColors = product.colors.filter(color => color.count > 0);
                const defaultColor = availableColors.length > 0 ? availableColors[0] : null;
                const imageToDisplay = defaultColor ? defaultColor.images[0] : 'default-image.jpg';
                if (availableColors.length === 0) return null;

                return (
                  <div key={idx} className="Shop__page-items">
                    <img className='Shop__page-img' src={imageToDisplay} alt="" />
                    <p className='Shop__page-price'>{product.price} сом</p>
                    <p className='Shop__page-title'>{product.name}</p>
                    <p className='Shop__page-subtitle'>{product.title}</p>
                    <Link className='Shop__page-link' to={`/Buy/${product.id}`}>
                      <button className='Shop__page-btn'>Заказать</button>
                    </Link>
                    <button onClick={() => handleAddToCart(product)}
                      className='Shop__page-cart'>
                      {isInCart ? 'Добавлено' : 'В корзину'}
                    </button>
                  </div>
                )
              })}
            </>
          </div>

          <div className='Shop__nav'>
            <Link className='Shop__nav-link' to={'/'}>
              <p>Главная</p>
            </Link>
            <p>/</p>
            <Link className='Shop__nav-link' to={'/Cart'}>
              <p>Корзина</p>
            </Link>
            <p>/</p>
            <p>Регистрация</p>
            <p>/</p>
            <p>Войти</p>
          </div>

        </section>

        <section className='AboutUs'>
          <p className='AboutUs__title'>О нас</p>
          <p className='AboutUs__subtitle'>Одежда, пожалуй, основная часть гардероба каждого человека. Ни один женский шкаф не бывает пустым, скорее он переполнен. Современные мужчины любят хорошо одеваться и зачастую одежды у них не меньше, чем у прекрасной половины человечества.</p>
          <p className='AboutUs__item'> Мы рады предложить Вам обилие товаров от самых разных брендов. Мы постарались включить в наши каталоги весь возможный ассортимент: юбки и брюки, джинсы и платья, одежду для беременных и домашнюю одежду, верхнюю одежду и пляжные аксессуары... Просто загляните в перечень товаров и Вы сами будете удивлены количеством предлагаемых моделей.</p>
        </section>

        <section className='Reviews'>
          <h1 className='Reviews__headline'>Отзывы клиентов</h1>

          <div className="Reviews__items">
            <div className="Reviews__items-content">
              <img src={human} alt="human" />
              <p>user</p>
            </div>
            <div className="Reviews__items-info">
              <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
            </div>
          </div>

          <div className="Reviews__items">
            <div className="Reviews__items-content">
              <img src={human} alt="human" />
              <p>user</p>
            </div>
            <div className="Reviews__items-info">
              <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
            </div>
          </div>

          <div className="Reviews__items">
            <div className="Reviews__items-content">
              <img src={human} alt="human" />
              <p>user</p>
            </div>
            <div className="Reviews__items-info">
              <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}

export default Main
