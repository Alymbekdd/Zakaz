import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Buy from './components/Main/Buy/Buy';
import Cart from './components/Main/Cart/Cart';
import Footer from './components/Footer/Footer';
//товары
import itemBlack from './components/img/H20c9d9bb99974e729c20451549fd58cfD.jpg_640x640.avif';
import itemBlue from './components/img/S2884a9ed866042f7af1830871797d6d7K.avif';
import itemRed from './components/img/2144588708_w1280_h640_komplekt-zhenskogo-nizhnego.webp';
import itemWhite from './components/img/936284150.jpg';
import itemGreen from './components/img/S04c4d03e08a14c8b8f5e87bcc11439aaP.avif';
import itemYellow from './components/img/614370802.jpg';
import itemPink from './components/img/lifcik-poslednie-3270-dla-podrostkov-vysokogo-kacestva-id-62102633-812549134.jpeg';
import item2 from './components/img/images (1).png';
import item3 from './components/img/png-klev-club-qqbw-p-tsifra-3-png-3.png';
import item4 from './components/img/images (2).png';

const App = () => {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "товар 1",
      title: "Хорошое качество",
      price: 670,
      description: "Черный костюм с высоким горлом, выполненный из утепленной ангоры на флисе. Модель с прямой юбкой миди длины на резинке, декорированной разрезом. Верх костюма свободного кроя с манжетами и длинными приспущенными с пройм рукавами.",
      colors: [
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 70,
        },
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 90,
        },
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 90,
        },
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 60,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 30,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 50,
        },
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
      colors: [
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
      colors: [
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
      colors: [
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
      colors: [
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
      colors: [
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
      colors: [
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
      colors: [
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
      colors: [
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
      colors: [
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
      colors: [
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
      colors: [
        {
          color: "green", available: true,
          images: [
            itemGreen,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "red", available: true,
          images: [
            itemRed,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "blue", available: true,
          images: [
            itemBlue,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "white", available: true,
          images: [
            itemWhite,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "black", available: true,
          images: [
            itemBlack,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "yellow", available: true,
          images: [
            itemYellow,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
        {
          color: "pink", available: true,
          images: [
            itemPink,
            item2,
            item3,
            item4,
          ],
          count: 40,
        },
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
  ]);
  const [buySelectedTovar, setBuySelectedTovar] = useState([]);


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main cart={cart} setCart={setCart} products={products} />} />
          <Route path='/Buy/:id' element={<Buy cart={cart} setCart={setCart} products={products} buySelectedTovar={buySelectedTovar} setBuySelectedTovar={setBuySelectedTovar} />} />
          <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

