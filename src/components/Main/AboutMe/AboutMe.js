import React, {forwardRef} from "react";
import "./AboutMe.css";
import avatar from "../../../images/avatar-me.jpg"

const AboutMe = forwardRef((props, ref) => {
        return (
            <section className="about-me" id="student" ref={ref}>
                <h2 className="about-me__title">Студент</h2>
                <div className="about-me__card">
                    <div className="about-me__block">
                        <h3 className="about-me__name">Айсылу</h3>
                        <h3 className="about-me__info">Фронтенд-разработчик, 27 лет</h3>
                        <p className="about-me__description">Я родилась и живу в Казани. В прошлом - врач-терапевт, сейчас -
                            начинающий frontend разработчик. Приняла решение, изменить свою жизнь и сменить профессию.
                            Весной 2023 года начала обучение на курсе по веб-разработке в Яндекс.Практикум. Мои самые лучшие
                            качества это трудолюбивость и усидчивость, любое дело стараюсь делать на совесть и до конца.</p>
                        <a href="https://github.com/" className="about-me__link" target="_blank" rel="noreferrer">Github</a>
                    </div>
                    <img alt="Фото студента" className="about-me__avatar" src={avatar}/>
                </div>
            </section>
        );
    }
)

export default AboutMe;
