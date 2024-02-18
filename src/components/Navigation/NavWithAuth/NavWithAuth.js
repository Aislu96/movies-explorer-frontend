import {Link} from "react-router-dom";
import React from "react";
import "./NavWithAuth.css";
import logoAuthPink from "../../../images/logoAuthPink.svg";
import logoBurder from "../../../images/logoBurder.svg";

function NavWithAuth({onBtnClick, setMenuToggle, colorAuth, colorBurger, logoButtonBlack}) {
    function handelBtnBurgerClick() {
        setMenuToggle(true);
    }

    return (
        <>
            <ul className="nav-with__list">
                <Link to="/movies" className="nav-with__list-text">Фильмы</Link>
                <Link to="/saved-movies" className="nav-with__list-text">Сохраненные фильмы</Link>
            </ul>
            <ul className="nav-with__item">
                <Link to="/profile" className="nav-with__item-text">Аккаунт</Link>
                <Link to="/profile" className="nav-with__logo-link">
                    <button className={`nav-with__button ${colorAuth}`} onClick={onBtnClick} type="button">
                        <img src={logoButtonBlack ? logoButtonBlack : logoAuthPink} className="nav-with__logo"
                             alt="Логотип аккаунта Movies"/>
                    </button>
                </Link>
            </ul>
            <button
                className={`nav-with__menu-button ${colorBurger}`}
                onClick={handelBtnBurgerClick}
                type="button"
            ><img
                src={logoBurder}
                alt="Логотип бургерного меню"
                className="nav-with__menu-img"
            />
            </button>
        </>
    );
}


export default NavWithAuth;