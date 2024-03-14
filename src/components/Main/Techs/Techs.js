import React, {forwardRef} from "react";
import "./Techs.css";

const Techs = forwardRef((props, ref)  =>{
    return (
            <section className="techs" id="techs" ref={ref}>
                <h2 className="techs__title">Технологии</h2>
                <h3 className="techs__subtitle">7 технологий</h3>
                <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в
                    дипломном
                    проекте.</p>
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
});

export default Techs;
