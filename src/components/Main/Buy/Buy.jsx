import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import icon from '../../img/png-klev-club-gikq-p-ikonka-garantiya-kachestva-png-6 1.png';
import logo from '../../img/Снимок_экрана_2024-12-17_000646-removebg-preview (2).png';
import wallet from '../../img/png-transparent-computer-icons-credit-card-card-security-code-debit-card-credit-card-text-logo-sign-removebg-preview 1.png';
import human from '../../img/6596121 1.png';
import item from '../../img/H20c9d9bb99974e729c20451549fd58cfD.jpg_640x640.avif';
import item2 from '../../img/images (1).png';
import item3 from '../../img/png-klev-club-qqbw-p-tsifra-3-png-3.png';
import item4 from '../../img/images (2).png';

const Buy = ({ cart, setCart }) => {

  const { id } = useParams();

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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
      colors: [
        { color: "blue", available: true },
        { color: "black", available: true },
        { color: "red", available: true },
        { color: "white", available: true },
        { color: "green", available: true },
        { color: "yellow", available: true },
        { color: "pink", available: true },
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
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const selectedProduct = tovar.find((tovar) => tovar.id === parseInt(id));
    setTovar(selectedProduct);
    if (selectedProduct) {
      setMainImage(selectedProduct.images[0]);
    }
  }, [id]);

  if (!tovar || !tovar.availableSizes) {
    return <div>Загрузка...</div>;
  }

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const availableSizes = tovar.availableSizes.filter(size => size.available);

  const handleAddToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const isInCart = cart.some(item => item.id === tovar.id);

  return (
    <main className='Buy'>
      <div className="container">

        <h1 className='Buy__title'>Оформляйте покупки быстро и надежно
        </h1>
        <div className='Buy__nav'>
          <Link className='Buy__nav-link' to={'/'}>
            <p>Главная</p>
          </Link>
          <p>/</p>
          <Link className='Buy__nav-link' to={'/Cart'}>
            <p>Корзина</p>
          </Link>
          <p>/</p>
          <p>Регистрация</p>
          <p>/</p>
          <p>Войти</p>
        </div>

        <section className='SingleItem'>

          <div className="SingleItem__photos">
            <div>
              {tovar.images.map((images, idx) => (
                <img key={idx} src={images} alt="item" onClick={() => handleImageClick(images)} />
              ))}
            </div>
            <img className='SingleItem__photos-img' src={mainImage} alt="item" />
          </div>

          <div className="SingleItem__items">
            <h2>{tovar.name}</h2>
            <p className='SingleItem__items-title'>{tovar.title}</p>

            <div className="SingleItem__colors">
              {tovar.colors.map((color, idx) =>
                color.available && (
                  <button
                    key={idx}
                    className='SingleItem__colors-color'
                    style={{ backgroundColor: color.color }}>
                  </button>
                )
              )}
            </div>

            <div className='SingleItem__items-line'></div>
            <p className='SingleItem__items-subtitle'>Размеры</p>

            <div className="SingleItem__sizes">
              {availableSizes.map((product, idx) => (
                <button key={idx}>{product.size}</button>
              ))}
            </div>

            <div className='SingleItem__items-line'></div>
            <p className='SingleItem__items-price'>{tovar.price} сом</p>

            <div className="SingleItem__items-btns">
              <button onClick={() => handleAddToCart(tovar)}
                className="SingleItem__items-cart">
                {isInCart ? 'Добавлено' : 'В корзину'}
              </button>
              <button className="SingleItem__items-btn">Заказать</button>
            </div>

          </div>
        </section>

        <section className='About'>

          <div className="About__item">

            <div className="About__item-title">
              <h1>Описание</h1>
              <p>{tovar.description}</p>
            </div>

            <div className="About__item-subtitle">
              <h1>Характеристики</h1>
              <div className='About__item-items'>
                <div>
                  {tovar.about.map((about, idx) => (
                    <p key={idx}>{about}</p>
                  ))}
                </div>
                <div>
                  {tovar.chistka.map((chistka, idx) => (
                    <p key={idx}>{chistka}</p>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="About__info">

            <div className="About__info-content">
              <img className='About__info-icon' src={icon} alt="icon" />
              <div>
                <p className='About__info-text'>Гарантия качества 100%</p>
                <p className='About__info-subject'>Товары наилучшего качества</p>
              </div>
            </div>

            <div className="About__info-content">
              <img className='About__info-logo' src={logo} alt="logo" />
              <div>
                <p className='About__info-text'>Бесплатная доставка</p>
                <p className='About__info-subject'>Быстрая и надёжная доставка</p>
              </div>
            </div>

            <div className="About__info-content">
              <img className='About__info-wallet' src={wallet} alt="wallet" />
              <div>
                <p className='About__info-text'>Удобные способы оплаты</p>
                <p className='About__info-subject'>Оплачивайте заказы легко</p>
              </div>
            </div>

          </div>
        </section>

        <section className='Rewiews'>
          <h1 className='Rewiews__headline'>Отзывы клиентов</h1>

          <div className="Rewiews__items">
            <div className="Rewiews__items-content">
              <img src={human} alt="human" />
              <p>user</p>
            </div>
            <div className="Rewiews__items-info">
              <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
            </div>
          </div>

          <div className="Rewiews__items">
            <div className="Rewiews__items-content">
              <img src={human} alt="human" />
              <p>user</p>
            </div>
            <div className="Rewiews__items-info">
              <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
            </div>
          </div>

          <div className="Rewiews__items">
            <div className="Rewiews__items-content">
              <img src={human} alt="human" />
              <p>user</p>
            </div>
            <div className="Rewiews__items-info">
              <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}

export default Buy
