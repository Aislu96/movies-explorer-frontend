import React, {forwardRef} from "react";
import "./AboutProject.css";

const AboutProject = forwardRef((props, ref)  => {
    return (
        <section className="about-project" id="project" ref={ref}>
            <h2 className="about-project__title">О проекте</h2>
            <ul className="about-project__groups">
                <li className="about-project__group">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__group-paragraph">Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и&nbsp;финальные доработки.</p>
                </li>
                <li className="about-project__group">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__group-paragraph">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий
                        дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>

            <ul className="about-project__time">
                <li>
                    <p className="about-project__time-paragraph about-project__time-paragraph_color-black">1
                        неделя</p>
                    <p className="about-project__time-paragraph about-project__time-paragraph-color">Back-end</p>
                </li>
                <li>
                    <p className="about-project__time-paragraph about-project__time-paragraph_color-grey">4
                        недели</p>
                    <p className="about-project__time-paragraph about-project__time-paragraph-color">Front-end</p>
                </li>
            </ul>
        </section>
    );
});

export default AboutProject;
