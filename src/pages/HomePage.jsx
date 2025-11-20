import React from "react";

function HomePage(){
    return(
        <main className="main_block">
                <div className="rectangle_tovar">
                <div className="text_tovar">
                    <span style={{ display: 'block', marginBottom: '30px' }}>
                    Покупай легко,
                    </span>
                    <span style={{ display: 'block' }}>
                    получай быстро.
                    </span>
                </div>
                <img className="picture_gruz" src="public\грузовик.png" alt="Грузовик" />
                <button className="style_container">
                    <span className="button_text">К товарам</span>
                    <img className="arrow" src="public\стрелка вниз.png" alt="Стрелка вниз" />
                </button>
                </div>
                <section className="rectangle_main">рекомендации/топ товары/скидки</section>


            <section className="product-modal-wrapper">
        <div className="product-modal">
            <div className="product-modal__row">
            <button className="product-modal__back">&lt; Назад</button>
            <button className="product-modal__close">✕</button>
            </div>
            <div className="product-modal__content">
            <div className="product-modal__images">
                <div className="product-main-container">
                <img className="product-main" src="public\f7e453e4018b0c88aa3f22541c5e0191a6dea647.png" alt="Nike P-6000" />
                </div>
                <div className="product-modal__thumbs">
                <div className="product-thumb img_crop"><img src="public\394b5cbb6f2f263e6e79794dabe84bb018225a0a.png" alt="" /></div>
                <div className="product-thumb img_2"><img src="public\86cc2aee5d0082332a4c85846bf59499ba817a10.png" alt="" /></div>
                <div className="product-thumb"><img src="public\2f2fa7441c3e364f41889424390ad59a60cfffcd.png" alt="" /></div>
                </div>
            </div>
            <div className="product-modal__info">
                <h2 className="product-title">Nike</h2>
                <div className="product-desc">Кроссовки Nike P-6000<br />Сочетание культового стиля, комфорта и <br/> эстетики начала 2000-х.</div>
                <div className="product-props">
                <div className="product-size-block">
                    <div className="product-prop-label">Размер</div>
                    <div className="product-size-list">
                    <button className="size size_disabled  item_1">7</button>
                    <button className="size item_2">7,5</button>
                    <button className="size item_3">8</button>
                    <button className="size item_4">9</button>
                    </div>
                </div>
                <div className="product-color-block">
                    <div className="product-prop-label">Цвет</div>
                    <div className="product-color-list">
                    <span className="color color_white"></span>
                    <span className="color color_burgundy"></span>
                    <span className="color color_black"></span>
                    <span className="color color_brown"></span>
                    </div>
                </div>
                </div>
                <div className="product-price-block">
                <span className="product-old-price">18 990Р</span>
                <span className="product-new-price">10 255Р</span>
                </div>
                <div className="product-buttons">
                <button className="btns_cont btn btn-outline">В избранное</button>
                <button className="btns_cont btn btn-filled">В корзину</button>
                </div>
            </div>
            </div>
        </div>
        </section>
                <section>Оформление заказа</section>

                <div style={{
                width: '55%',
                marginTop: 150,
                marginBottom: 16,
                marginLeft: -600,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                fontSize: 16,
                color: '#444'
                }}>
                <div>Способ оплаты</div>
                <div>Данные/адрес</div>
                <div>Промокод</div>
                </div>
            </main>
    )
}
export default HomePage;