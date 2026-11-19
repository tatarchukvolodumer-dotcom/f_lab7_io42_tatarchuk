import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';
import './App.css';

import bhaalImg from './images/bhaal.jpeg';
import frostmourneImg from './images/frostmourne.jpeg';
import servitorImg from './images/servitor.jpeg';
import guldanImg from './images/guldan.jpeg';
import blackbookImg from './images/blackbook.jpeg';
import lvivskeImg from './images/lvivske.jpeg';

const goodsList = [
  {
    id: 1,
    title: 'Амулет Баала',
    price: 'Жорстоке вбивство',
    image: bhaalImg,
  },
  {
    id: 2,
    title: 'Фростморн',
    price: 'Душа покупця (присутні мікротранзакції)',
    image: frostmourneImg,
  },
  {
    id: 3,
    title: 'Сервітор',
    price: "1 непродуктивний суб'єкт і набір FA045B63",
    image: servitorImg,
  },
  {
    id: 4,
    title: "Череп Ґул'дана",
    price: 'Зречення власної природи (і трохи Скверни)',
    image: guldanImg,
  },
  {
    id: 5,
    title: 'Чорнокнига',
    price: '1 секрет / 1 знання',
    image: blackbookImg,
  },
  {
    id: 6,
    title: 'Львівське Різдвяне 0,5 л',
    price: '39.99 грн',
    image: lvivskeImg,
  },
];

function App() {
  return (
    <div className="app-container">
      {/* Завдання 1 */}
      <Header />
      <Content />
      <Image />

      <hr className="divider" />

      {/* Завдання 2 */}
      <section className="goods-section">
        <h2>Крамниця артефактів та провізії</h2>
        <div className="goods-grid">
          {goodsList.map((item) => (
            <GoodsCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;