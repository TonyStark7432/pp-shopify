import React from "react";

function Footer() {
  return (
    <footer>
      <section>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: 60,
          marginTop: 60
        }}>
          <div className="rectangle_nazv" style={{ marginTop: 30 }}>
            <img src="public/лого.png" alt="Лого" />
          </div>
          <div style={{
            background: '#ceb7b2',
            marginTop: 30,
            height: 49,
            borderRadius: 10,
            padding: '20px 28px',
            fontSize: 15,
            display: 'flex',
            alignItems: 'center'
          }}>
            возврат назад | каталог | о нас | контакты | доставка | оплата | поддержка | и т.п.
          </div>
        </div>
      </section>
      <div className="rectangle_404">
        <div className="text_404">404</div>
        <div className="ups">Упс!</div>
        <div className="site">Мы не смогли найти сайт, который вы искали.</div>
      </div>
    </footer>
  );
}

export default Footer;
