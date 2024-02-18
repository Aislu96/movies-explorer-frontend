import React from "react";
import "./AboutMe.css";
import avatar from "../../../images/avatar-me.jpg"

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__line"></div>
            <div className="about-me__card">
                <ul className="about-me__block">
                    <li className="about-me__name">Айсылу</li>
                    <li className="about-me__info">Фронтенд-разработчик, 27 лет</li>
                    <li className="about-me__description">Я&nbsp;родилась и&nbsp;живу в&nbsp;Казани, закончила лечебное
                        дело К(П)ФУ и&nbsp;ординатуру по&nbsp;терапии КГМУ. Я&nbsp;занимаюсь в&nbsp;тренажерном зале,
                        слежу за&nbsp;питанием, люблю рисовать, петь в&nbsp;кароке, мечтаю начать ходить на&nbsp;танцы.
                        Спустя время решила попробовать себя в&nbsp;новый сфере, изучаю программирование с&nbsp;зимы
                        2022&nbsp;года. Вначале самостоятельно вникала в&nbsp;азы html,css,js, решала задачи
                        на&nbsp;Codewars. Весной 2023 года начала свое обучение на&nbsp;курсе по&nbsp;веб-разработке
                        в&nbsp;Яндекс.Практикум. Мои самые лучшие качества это трудолюбие и&nbsp;усидчивость, любое
                        дело стараюсь делать на&nbsp;совесть и&nbsp;до&nbsp;конца. В&nbsp;ближаше время хочу найти
                        работу по&nbsp;новой специальности. Я&nbsp;верю в&nbsp;то, что у&nbsp;меня все получится!
                    </li>
                    <li><a href="https://github.com/Aislu96" className="about-me__link" target="_blank"
                           rel="noreferrer">Github</a></li>
                </ul>
                <img alt="Фото студента" className="about-me__avatar" src={avatar}/>
            </div>
        </section>
    );
}

export default AboutMe;
