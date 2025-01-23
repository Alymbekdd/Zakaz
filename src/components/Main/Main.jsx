import React, { useState } from "react";
import icon from '../img/png-klev-club-gikq-p-ikonka-garantiya-kachestva-png-6 1.png';
import logo from '../img/Снимок_экрана_2024-12-17_000646-removebg-preview (2).png';
import wallet from '../img/png-transparent-computer-icons-credit-card-card-security-code-debit-card-credit-card-text-logo-sign-removebg-preview 1 (1).png';
import human from '../img/6596121 1.png';
import { Link } from "react-router-dom";
import item from '../img/H20c9d9bb99974e729c20451549fd58cfD.jpg_640x640.avif';
import item2 from '../img/images (1).png';
import item3 from '../img/png-klev-club-qqbw-p-tsifra-3-png-3.png';
import item4 from '../img/images (2).png';

const Main = ({ cart, setCart }) => {

  const [tovar, setTovar] = useState([
    {
      id: 1,
      name: "товар 1",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 2,
      name: "товар 2",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 3,
      name: "товар 3",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 4,
      name: "товар 4",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 5,
      name: "товар 5",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 6,
      name: "товар 6",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 7,
      name: "товар 7",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 8,
      name: "товар 8",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 9,
      name: "товар 9",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 10,
      name: "товар 10",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 11,
      name: "товар 11",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    },
    {
      id: 12,
      name: "товар 12",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      images: [
        item,
        item2,
        item3,
        item4,
      ],
      availableSizes: [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: true },
        { size: 'XL', available: true },
        { size: 'XLL', available: true },
      ],
      about: [
        "Бренд: zara",
        "Материал: Ангора",
        "Состав: 85% ангора",
      ],
      chistka: [
        "Только ручная стирка",
        "Не отбеливать",
        "Гладить запрещено",
        "Барабанная сушка запрещена",
      ],
    }
  ]);

  const handleAddToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <main className='main'>

      <section className='Home'>
        <h1>Онлайн магазин</h1>
        <p>Одежда</p>
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
            {tovar.map((product, idx) => {
              const isInCart = cart.some(item => item.id === product.id);
              return (
                <div key={idx} className="Shop__page-items">
                  <img className='Shop__page-img' src={product.images[0]} alt="" />
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
