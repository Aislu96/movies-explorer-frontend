import React from "react";
import './Portfolio.css';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__group">
                <h2 className="portfolio__title">Портфолио</h2>
                <nav className="portfolio__list">
                    <div className="portfolio__list-item">
                        <div className="portfolio__container portfolio__container_line">
                            <a href="https://aislu96.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link-text">Статичный сайт</a>
                            <a href="https://aislu96.github.io/how-to-learn/" target="_blank" rel="noreferrer">
                                <img src={arrow} alt="Иконка - ссылочная стрелка"  className="portfolio__link-img"/>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio__list-item">
                        <div className="portfolio__container portfolio__container_line">
                            <a href="https://aislu96.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__link-text">Адаптивный сайт</a>
                            <a href="https://aislu96.github.io/russian-travel/" target="_blank" rel="noreferrer">
                                <img src={arrow} alt="Иконка - ссылочная стрелка" className="portfolio__link-img"/>
                            </a>
                        </div>

                    </div>

                    <div className="portfolio__list-item">
                        <div className="portfolio__container">
                            <a href="https://aislu96.github.io/mesto/" target="_blank" rel="noreferrer" className="portfolio__link-text">Одностраничное приложение</a>
                            <a href="https://aislu96.github.io/mesto/" target="_blank" rel="noreferrer">
                                <img src={arrow} alt="Иконка - ссылочная стрелка"  className="portfolio__link-img"/>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default Portfolio;
