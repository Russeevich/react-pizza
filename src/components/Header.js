import React from 'react'

export const Header = () => {
    return (
        <header className="header">
            <div className="content">
                <div className="content__item">
                    <img src="https://www.timspizza.ru/img/mobile-logo.svg" alt=""/>
                    <div className="content__item--name">
                        Тимс пицца
                    </div>
                </div>
                <div className="content__item">
                    <div className="content__middle--text">
                        <span>Свежеиспеченная пицца в Армавире</span>
                        Бесплатная доставка / Возьми с собой
                    </div>
                </div>
                <div className="content__item">
                    <div className="content__middle--text">
                        <span>8 (800) 755-36-64</span>
                        Звонок бесплатный
                    </div>
                </div>
            </div>
        </header>
    )
}