import { useState } from 'react';
import icon from '../img/png-klev-club-gikq-p-ikonka-garantiya-kachestva-png-6 1.png';
import logo from '../img/Снимок_экрана_2024-12-17_000646-removebg-preview (2).png';
import wallet from '../img/png-transparent-computer-icons-credit-card-card-security-code-debit-card-credit-card-text-logo-sign-removebg-preview 1 (1).png';
import item from '../img/H20c9d9bb99974e729c20451549fd58cfD.jpg_640x640.avif';
import human from '../img/6596121 1.png';
import { Link } from "react-router-dom";


const Main = () => {

    const [tovar, setTovar] = useState([
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        },
        {
            id: 1,
            name: "нижнее белье",
            title: "Хорошое качество",
            price: 670,
            img: item,
        }
    ])





    return (
        <main className='main'>

            <section className='Home'>
                <div className="container">
                    <h1>Онлайн магазин</h1>
                    <p>Женские нижние белья</p>
                </div>
            </section>

            <section className='Shop'>
                <div className="container">

                    <div className="Shop__info">
                        <div className="Shop__content">
                            <img className='Shop__content-icon' src={icon} alt="icon" />
                            <div className="Shop__content-list">
                                <p className='Shop__list-text'>Гарантия качества 100%</p>
                                <p className='Shop__list-subject'>Товары наилучшего качества</p>
                            </div>
                        </div>
                        <div className="Shop__content">
                            <img className='Shop__content-logo' src={logo} alt="logo" />
                            <div className="Shop__content-list">
                                <p className='Shop__list-text'>Бесплатная доставка</p>
                                <p className='Shop__list-subject'>Быстрая и надёжная доставка</p>
                            </div>
                        </div>
                        <div className="Shop__content">
                            <img className='Shop__content-wallet' src={wallet} alt="wallet" />
                            <div className="Shop__content-list">
                                <p className='Shop__list-text'>Удобные способы оплаты</p>
                                <p className='Shop__list-subject'>Оплачивайте заказы легко</p>
                            </div>
                        </div>
                    </div>

                    <h1 className='Shop__headline'>Наши товары</h1>

                    <div className="Shop__page">
                        {tovar.map((item, idx) => {
                            return (
                                <div className="Shop__items">
                                    <img src={item.img} alt="" />
                                    <p className='Shop__items-title'>{item.name}</p>
                                    <p className='Shop__items-subtitle'>{item.title}</p>
                                    <div className='Shop__items-line'></div>
                                    <div className="Shop__items-btns">
                                        <p className='Shop__items-price'>{item.price} сом</p>
                                        <Link to={'/Buy'}>
                                            <button className='Shop__items-btn'>Заказать</button>
                                        </Link>

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>

            <section className='AboutUs'>
                <div className="container">
                    <div className="AboutUs__info">
                        <p className='AboutUs__info-title'>О нас</p>
                        <p className='AboutUs__info-subtitle'>Одежда, пожалуй, основная часть гардероба каждого человека. Ни один женский шкаф не бывает пустым, скорее он переполнен. Современные мужчины любят хорошо одеваться и зачастую одежды у них не меньше, чем у прекрасной половины человечества.</p>
                        <p className='AboutUs__info-item'> Мы рады предложить Вам обилие товаров от самых разных брендов. Мы постарались включить в наши каталоги весь возможный ассортимент: юбки и брюки, джинсы и платья, одежду для беременных и домашнюю одежду, верхнюю одежду и пляжные аксессуары... Просто загляните в перечень товаров и Вы сами будете удивлены количеством предлагаемых моделей.</p>
                    </div>
                </div>
            </section>

            <section className='Reviews'>
                <div className="container">
                    <div className="Reviews__otzw">

                        <h1 className='Reviews__headline'>Отзывы клиентов</h1>

                        <div className="Reviews__items">
                            <div className="Reviews__content">
                                <img src={human} alt="human" />
                                <p>user</p>
                            </div>
                            <div className="Reviews__info">
                                <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
                            </div>
                        </div>

                        <div className="Reviews__items">
                            <div className="Reviews__content">
                                <img src={human} alt="human" />
                                <p>user</p>
                            </div>
                            <div className="Reviews__info">
                                <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
                            </div>
                        </div>

                        <div className="Reviews__items">
                            <div className="Reviews__content">
                                <img src={human} alt="human" />
                                <p>user</p>
                            </div>
                            <div className="Reviews__info">
                                <p>Уже не первый год совершаю покупки именно в этом магазине, так как только здесь всегда одежда из новых коллекций мировых дизайнеров. Да и ценовая политика приемлемая, в отличии от других подобных магазинов, например shopbop. Сервис работает профессионально, менеджеры всегда ответят на интересующие вопросы, помогут с выбором. С доставкой были только какие то непонятки...Задержали мой заказ и пришлось ждать!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}

export default Main
