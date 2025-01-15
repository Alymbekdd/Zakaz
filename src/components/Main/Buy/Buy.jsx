import React from 'react';
import { Link } from "react-router-dom";
import item from '../../img/H20c9d9bb99974e729c20451549fd58cfD.jpg_640x640.avif';
import icon from '../../img/png-klev-club-gikq-p-ikonka-garantiya-kachestva-png-6 1.png';
import logo from '../../img/Снимок_экрана_2024-12-17_000646-removebg-preview (2).png';
import wallet from '../../img/png-transparent-computer-icons-credit-card-card-security-code-debit-card-credit-card-text-logo-sign-removebg-preview 1.png';
import human from '../../img/6596121 1.png';

const Buy = () => {
    return (
        <main className='Buy'>
                <div className="container">
                    <h1 className='Buy__title'>Оформляйте покупки быстро и надежно
                    </h1>
                <div className='Buy__nav'>
                    <Link to={'/'}>
                        <p>Главная</p>
                    </Link>
                    <p>/</p>
                    <p>Корзина</p>
                    <p>/</p>
                    <p>Регистрация</p>
                    <p>/</p>
                    <p>Войти</p>
                </div>

                    <section className='SingleItem__content'>
                        <div className="SingleItem__photos">
                            <div>
                                <img src={item} alt="item" />
                                <img src={item} alt="item" />
                                <img src={item} alt="item" />
                                <img src={item} alt="item" />
                            </div>
                            <img className='SingleItem__photos-img' src={item} alt="item" />
                        </div>

                        <div className="SingleItem__items">
                            <h2>Женское нижнее белье</h2>
                            <p className='SingleItem__items-title'>Хорошое качество</p>
                            <div className="SingleItem__colors">
                                <button className='SingleItem__colors-blue'></button>
                                <button className='SingleItem__colors-black'></button>
                                <button className='SingleItem__colors-red'></button>
                                <button className='SingleItem__colors-white'></button>
                                <button className='SingleItem__colors-green'></button>
                                <button className='SingleItem__colors-yellow'></button>
                                <button className='SingleItem__colors-pink'></button>
                            </div>
                            <div className='SingleItem__line'></div>
                            <p className='SingleItem__items-subtitle'>Размеры</p>
                            <div className="SingleItem__sizes">
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                                <button>XLL</button>
                            </div>
                            <div className='SingleItem__line'></div>
                            <p className='SingleItem__items-price'>270 сом</p>
                            <div className="SingleItem__btns">
                                <button className="SingleItem__btns-cart">В корзину</button>
                                <button className="SingleItem__btns-btn">Заказать</button>
                            </div>
                        </div>
                    </section>
                </div>

            <section className='About'>
                <div className="container">

                    <div className="About__item">
                        <div className="About__title">
                            <h1>Описание</h1>
                            <p>Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.</p>
                        </div>
                        <div className="About__subtitle">
                            <h1>Характеристики</h1>
                            <div className='About__items'>
                                <div>
                                    <p>Бренд: zara</p>
                                    <p>Размеры: S, M, L, XL,</p>
                                    <p>Материал: Ангора на флисе</p>
                                    <p>Состав: 85%б ангора</p>
                                </div>
                                <div>
                                    <p>Только ручная бережная стирка</p>
                                    <p>Не отбеливать</p>
                                    <p>Барабанная сушка запрещена</p>
                                    <p>Гладить запрещено</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="About__info">
                        <div className="About__content">
                            <img className='About__content-icon' src={icon} alt="icon" />
                            <div className="About__content-list">
                                <p className='About__list-text'>Гарантия качества 100%</p>
                                <p className='About__list-subject'>Товары наилучшего качества</p>
                            </div>
                        </div>
                        <div className="About__content">
                            <img className='About__content-logo' src={logo} alt="logo" />
                            <div className="About__content-list">
                                <p className='About__list-text'>Бесплатная доставка</p>
                                <p className='About__list-subject'>Быстрая и надёжная доставка</p>
                            </div>
                        </div>
                        <div className="About__content">
                            <img className='About__content-wallet' src={wallet} alt="wallet" />
                            <div className="About__content-list">
                                <p className='About__list-text'>Удобные способы оплаты</p>
                                <p className='About__list-subject'>Оплачивайте заказы легко</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Rewiews'>
                <div className="container">
                    <div className="Rewiews__otzw">

                        <h1 className='Rewiews__headline'>Отзывы клиентов</h1>

                        <div className="Rewiews__items">
                            <div className="Rewiews__content">
                                <img src={human} alt="human" />
                                <p>user</p>
                            </div>
                            <div className="Rewiews__info">
                                <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
                            </div>
                        </div>

                        <div className="Rewiews__items">
                            <div className="Rewiews__content">
                                <img src={human} alt="human" />
                                <p>user</p>
                            </div>
                            <div className="Rewiews__info">
                                <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
                            </div>
                        </div>

                        <div className="Rewiews__items">
                            <div className="Rewiews__content">
                                <img src={human} alt="human" />
                                <p>user</p>
                            </div>
                            <div className="Rewiews__info">
                                <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}

export default Buy
