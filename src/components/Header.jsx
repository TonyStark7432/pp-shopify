import React from "react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="public/лого.png" alt="Лого" />
        <button className="catalog text-catalog">Каталог</button>
      </div>
      <div className="rectangle_poisk">
        <span className="poisk_text"><SearchBar /> Поиск</span>
        <div className="circle_1"></div>
        <div className="circle_2"></div>
        <div className="line"></div>
      </div>
      <div className="buttons">
        <button><img src="public/корзина.png" alt="Корзина" /></button>
        <button><img src="public/заказы.png" alt="Заказы" /></button>
        <button><img src="public/избранное.png" alt="Избранное" /></button>
        <button><img src="public/профиль.png" alt="Профиль" /></button>
      </div>
    </header>
  );
}

export default Header;
