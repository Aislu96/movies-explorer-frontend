import React from "react";
import "./Footer.css";

function Footer() {
    return (
            <footer className="footer">
                <h3 className="footer__text footer__text_paragraph">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h3>
                <div className="footer__group">
                    <p className="footer__text footer__text_copyrigth">© 2024</p>
                    <ul className="footer__links">
                        <li className="footer__text"><a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                        <li className="footer__text"><a href="https://github.com/Yandex-Practicum" className="footer__link" target="_blank" rel="noreferrer">Github</a></li>
                    </ul>
                </div>
            </footer>
    );
}

export default Footer;
