import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstActive: false,
      isSecondActive: false,
    };
  }

  toggleFirst = () => {
    this.setState((prevState) => ({
      isFirstActive: !prevState.isFirstActive,
    }));
  };

  toggleSecond = () => {
    this.setState((prevState) => ({
      isSecondActive: !prevState.isSecondActive,
    }));
  };

  render() {
    const { isFirstActive, isSecondActive } = this.state;

    return (
      <main>
        <p
          id="block-3"
          className={isFirstActive ? 'color-first' : ''}
          onClick={this.toggleFirst}
          style={{ cursor: 'pointer' }}
        >
          Дата народження: 06.10.2006.<br />
          Місце народження: Київський міський пологовий будинок №3.
        </p>

        <p
          id="block-4"
          className={isSecondActive ? 'color-second' : ''}
          onClick={this.toggleSecond}
          style={{ cursor: 'pointer' }}
        >
          Освіта: навчався у Середній загальноосвітній школі №72 Святошинського району м. Києва (не визнаю це місце як ліцей). <br />
          Зараз навчаюся у Національному технічному університеті України «Київський політехнічний інститут імені Ігоря Сікорського»,<br />
          Факультет інформатики та обчислювальної техніки.
        </p>

        <h3 id="block-5">Мої хобі</h3>
        <ul id="block-6">
          <li>Споживання мистецтва.</li>
          <li>Створення мистецтва.</li>
        </ul>

        <h3 id="block-7">Мої улюблені екранізовані книги</h3>
        <ol id="block-8">
          <li>Володар перснів &amp; Хоббіт</li>
          <li>Форест Гамп</li>
          <li>Пригоди Шерлока Холмса і доктора Ватсона. 1979 р.</li>
        </ol>

        <h3 id="block-9">Моє улюблене місто (з реальних вирішитись не міг ¯\_(ツ)_/¯)</h3>
        <p id="block-10">
          Вайтран - велике торгове місто провінції Скайрим.
          Розташоване серед просторих рівнин у центральній частині краю.<br />
          Місто запам'ятовується своєю теплою атмосферою і привітними громадянами(крім Назіма).<br />
          Також у місті багато місць інтересу, таких як Драконяча Межа, Йорваскр, Златолист та багато іншого.
        </p>
      </main>
    );
  }
}

export default Content;