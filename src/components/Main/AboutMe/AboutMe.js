import React, {forwardRef} from "react";
import "./AboutMe.css";
import avatar from "../../../images/img_about.jpg"

const AboutMe = forwardRef((props, ref) => {
    return (
        <section className="about-me" id="student" ref={ref}>
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__card">
                <div className="about-me__block">
                    <h3 className="about-me__name">Виталий</h3>
                    <h3 className="about-me__info">Фронтенд-разработчик, 30 лет</h3>
                    <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ.
                        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
                        2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
                        заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a href="https://github.com/" className="about-me__link" target="_blank"
                       rel="noreferrer">Github</a>
                </div>
                <img alt="Фото студента" className="about-me__avatar" src={avatar}/>
            </div>
        </section>
    );
}
)

export default AboutMe;
