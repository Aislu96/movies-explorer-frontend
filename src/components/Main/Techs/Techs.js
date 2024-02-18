import React from "react";
import "./Techs.css";

function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__line"></div>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__paragraph">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
            <ul className="techs__list">
                <li className="techs__list-name">HTML</li>
                <li className="techs__list-name">CSS</li>
                <li className="techs__list-name">JS</li>
                <li className="techs__list-name">React</li>
                <li className="techs__list-name">Git</li>
                <li className="techs__list-name">Express.js</li>
                <li className="techs__list-name">mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;
