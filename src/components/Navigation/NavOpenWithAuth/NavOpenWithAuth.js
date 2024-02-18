import React from "react";
import "./NavOpenWithAuth.css";
import {Link} from "react-router-dom";
import logoAuthBlack from "../../../images/logoAuthBlack.svg";
import closeLogo from "../../../images/close.svg";

function NavOpenWithAuth({isMenuToggle, setMenuToggle, infoBtnClick}) {

    function handleBtnClickClose() {
        setMenuToggle(false);
    }

    return (
        <section className={`nav-open ${isMenuToggle ? `nav-open_popup` : ""}`}>
            <div className="nav-open__body">
                <button type="button" className="nav-open__button-close" onClick={handleBtnClickClose}>
                    <img src={closeLogo} alt="Логотип закрытия" className="nav-open__img"/>
                </button>
                <nav className="nav-open__block">
                    <ul className="nav-open__list">
                        <Link to="/movies" className="nav-open__list-text">Главная</Link>
                        <Link to="/movies" className="nav-open__list-text">Фильмы</Link>
                        <Link to="/movies" className="nav-open__list-text">Сохраненные фильмы</Link>
                    </ul>
                    <ul className="nav-open__item">
                        <Link to="/profile" className="nav-open__item-text">Аккаунт</Link>
                        <Link to="/profile" className="nav-open__logo-link">
                            <button className="nav-open__button" onClick={infoBtnClick} type="button">
                                <img src={logoAuthBlack} className="nav-open__logo" alt="Логотип аккаунта Movies"/>
                            </button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default NavOpenWithAuth;
