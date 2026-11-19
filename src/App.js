import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';
import './App.css';

const goodsList = [
  {
    id: 1,
    title: 'Амулет Баала',
    price: 'Жорстоке вбивство',
    image: `${process.env.PUBLIC_URL}/images/bhaal.jpg`,
  },
  {
    id: 2,
    title: 'Фростморн',
    price: 'Душа покупця (присутні мікротранзакції)',
    image: `${process.env.PUBLIC_URL}/images/frostmourne.jpg`,
  },
  {
    id: 3,
    title: 'Сервітор',
    price: "1 непродуктивний суб'єкт і набір FA045B63",
    image: `${process.env.PUBLIC_URL}/images/servitor.jpg`,
  },
  {
    id: 4,
    title: "Череп Ґул'дана",
    price: 'Зречення власної природи (і трохи Скверни)',
    image: `${process.env.PUBLIC_URL}/images/guldan.jpg`,
  },
  {
    id: 5,
    title: 'Чорнокнига',
    price: '1 секрет / 1 знання',
    image: `${process.env.PUBLIC_URL}/images/blackbook.jpg`,
  },
  {
    id: 6,
    title: 'Львівське Різдвяне 0,5 л',
    price: '39.99 грн',
    image: `${process.env.PUBLIC_URL}/images/lvivske.jpg`,
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