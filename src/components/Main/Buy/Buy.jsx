import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import icon from '../../img/png-klev-club-gikq-p-ikonka-garantiya-kachestva-png-6 1.png';
import logo from '../../img/Снимок_экрана_2024-12-17_000646-removebg-preview (2).png';
import wallet from '../../img/png-transparent-computer-icons-credit-card-card-security-code-debit-card-credit-card-text-logo-sign-removebg-preview 1.png';
import human from '../../img/6596121 1.png';


const Buy = ({ cart, setCart, products, buySelectedTovar, setBuySelectedTovar }) => {

  const { id } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [currentImages, setCurrentImages] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [value, setValue] = useState(1);
  const [limitReached, setLimitReached] = useState(false);

  const handleBuyTovar = () => {
    if (selectedColor && selectedSize) {
      const order = {
        id: tovar.id,
        name: tovar.name,
        description: tovar.description,
        color: selectedColor.color,
        images: selectedColor.images,
        size: selectedSize,
        price: tovar.price,
        count: value,
        totalPrice: buyTovar,
        about: tovar.about,
        clean: tovar.chistka,
      };
      setBuySelectedTovar((prevOrders) => [...prevOrders, order]);
    } else {
      alert("Пожалуйста, выберите цвет и размер перед заказом.");
    }
  };

  const findNextAvailableProduct = (currentId) => {
    const currentIndex = products.findIndex(product => product.id === currentId);
    for (let i = currentIndex + 1; i < products.length; i++) {
      const product = products[i];
      const availableColor = product.colors.find(color => color.count > 0);
      if (availableColor) {
        return product;
      }
    }
    return null;
  };

  const tovar = products.find((product) => product.id === parseInt(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (tovar) {
      const availableColors = tovar.colors.filter((color) => color.count > 0);
      if (availableColors.length > 0) {
        const firstColor = availableColors[0]; 
        setCurrentImages(firstColor.images);
        setMainImage(firstColor.images[0]);
        setSelectedColor(firstColor);
      } else {
        const nextProduct = findNextAvailableProduct(tovar.id);
        if (nextProduct) {
          setSelectedColor(nextProduct.colors.find(color => color.count > 0));
        }
      }
    }
  }, [tovar, products]);

  if (!tovar || (tovar && tovar.colors.filter(color => color.count > 0).length === 0)) {
    return <div>Нет доступных цветов для данного товара.</div>;
  }

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleColorClick = (color) => {
    setCurrentImages(color.images);
    setMainImage(color.images[0]);
    setSelectedColor(color);
    setLimitReached(false);
    setValue(1);

    if (value > color.count) {
      setValue(color.count);
    }
  };

  const handleAddToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const handleDecrease = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleMultiply = () => {
    if (selectedColor) {
      const availableCount = selectedColor.count;
      if (value + 1 <= availableCount) {
        setValue(value + 1);
        setLimitReached(false);
      } else {
        setLimitReached(true);
      }
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (selectedColor) {
      const availableCount = selectedColor.count;

      if (/^\d*$/.test(inputValue)) {
        const numericValue = parseInt(inputValue, 10);
        if (numericValue >= 1 && numericValue <= availableCount) {
          setValue(numericValue);
          setLimitReached(false);
        } else if (numericValue > availableCount) {
          setValue(availableCount);
          setLimitReached(true);
        } else {
          setValue(1);
          setLimitReached(false);
        }
      }
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const buyTovar = tovar.price * value;

  const availableSizes = tovar.availableSizes.filter(size => size.available);
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
              {currentImages.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt="item"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            {mainImage && (
              <img className="SingleItem__photos-img" src={mainImage} alt="main item" />
            )}
          </div>

          <div className="SingleItem__items">
            <h2>{tovar.name}</h2>
            <p className='SingleItem__items-title'>{tovar.title}</p>

            <div className="SingleItem__colors">
            {tovar.colors.filter(color => color.count > 0).map((color, idx) => (
                  <button
                    key={idx}
                    className='SingleItem__colors-color'
                    style={{ backgroundColor: color.color }}
                    onClick={() => handleColorClick(color)}>
                  </button>
                )
              )}
            </div>

            <div className='SingleItem__items-line'></div>
            <p className='SingleItem__items-subtitle'>Размеры</p>

            <div className="SingleItem__sizes">
              {availableSizes.map((product, idx) => (
                <button onClick={() => handleSizeClick(product.size)}
                  key={idx}
                  style={{
                    backgroundColor: selectedSize === product.size ? 'rgba(180, 180, 180, 0.5)' : 'transparent'
                  }}>
                  {product.size}</button>
              ))}
            </div>

            <div className='SingleItem__items-line'></div>

            <div className="SingleItem__items-content">
              <div className="SingleItem__items-counts">
                <button onClick={handleDecrease} className="SingleItem__items-count">←</button>
                <input type="text"
                  value={value}
                  onChange={handleInputChange} />
                <button onClick={handleMultiply} className="SingleItem__items-count">→</button>
              </div>
              <p className='SingleItem__items-price'>{buyTovar} сом</p>
            </div>
            {limitReached && value >= selectedColor.count && (
              <p className="SingleItem__items-reached">Вы достигли лимита по количеству этого товара.</p>
            )}

            <div className="SingleItem__items-btns">
              <button onClick={() => handleAddToCart(tovar)}
                className="SingleItem__items-cart">
                {isInCart ? 'Добавлено' : 'В корзину'}
              </button>
              <button className="SingleItem__items-btn" onClick={handleBuyTovar}>Заказать</button>
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
