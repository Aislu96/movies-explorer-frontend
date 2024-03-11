import {Link} from "react-router-dom";
import React from "react";
import "./NavWithAuth.css";
import logoAuthPink from "../../../images/logoAuthPink.svg";
import logoBurder from "../../../images/logoBurder.svg";

function NavWithAuth({setMenuToggle, colorAuth, colorBurger, logoButtonBlack}) {
    function handelBtnBurgerClick() {
        setMenuToggle(true);
    }

    return (
        <>
            <ul className="navigation__list">
                <li className="navigation__link"><Link to="/movies" className="navigation__list-text">Фильмы</Link></li>
                <li className="navigation__link"><Link to="/saved-movies" className="navigation__list-text">Сохраненные фильмы</Link></li>
            </ul>
            <ul className="navigation__item">
                <li className="navigation__link"><Link to="/profile" className="navigation__item-text">Аккаунт</Link></li>
                <li className="navigation__link">
                    <Link to="/profile" className={`navigation__logo-link ${colorAuth}`}><img src={logoButtonBlack ? logoButtonBlack : logoAuthPink} className="navigation__logo" alt="Логотип аккаунта Movies"/></Link>
                </li>
            </ul>
            <button className={`navigation__menu-button ${colorBurger}`} onClick={handelBtnBurgerClick} type="button"><img src={logoBurder} alt="Логотип бургерного меню" className="navigation__menu-img"/></button>
        </>
    );
}


export default NavWithAuth;
