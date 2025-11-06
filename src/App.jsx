import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css';

import Recommendation from "./Recommendation";
import Order from "./Order";
import PaymentInfo from "./PaymentInfo";

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <div className="rectangle_nazv">
            <span className="main_text">
              Лого<br />название сайта
            </span>
          </div>
          <div className="rectangle_poisk">
            <div className="circle_1"></div>
            <span className="poisk_text">Поиск</span>
            <div className="circle_2"></div>
            <div className="line"></div>
          </div>
          <button>
            <FaShoppingCart size={24} />
          </button>
        </header>

        <main className="main_block">
          <nav>
            <Link to="/">Рекомендации</Link> |&nbsp;
            <Link to="/order">Оформление заказа</Link> |&nbsp;
            <Link to="/payment">Оплата/Адрес</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Recommendation />} />
            <Route path="/order" element={<Order />} />
            <Route path="/payment" element={<PaymentInfo />} />
          </Routes>
        </main>

        <footer>
          <section>
            <div className="footer_content">
              <div className="rectangle_nazv footer_logo">
                <span className="main_text">
                  Лого<br />название<br />сайта
                </span>
              </div>
              <div className="footer_nav">
                возврат| о нас | контакты | доставка | оплата | поддержка
              </div>
            </div>
          </section>
        </footer>
      </div>
    </Router>
  );
}

export default App;
