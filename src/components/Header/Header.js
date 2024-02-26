import React, {useState} from "react";
import './Header.css';
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";
import NavOpenWithAuth from "../Navigation/NavOpenWithAuth/NavOpenWithAuth";


function Header({loggedIn, classColor, colorAuth, colorBurger, logoButtonBlack}) {
    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <header className={`header ${classColor}`}>
            <NavOpenWithAuth isMenuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
            <div className="header__container">
                <Link to="/" className="header__logo-link">
                    <img src={logo} className="header__logo" alt="Логотип проекта Movies"/>
                </Link>
                <Navigation colorAuth={colorAuth} colorBurger={colorBurger}
                            logoButtonBlack={logoButtonBlack} loggedIn={loggedIn}
                            setMenuToggle={setMenuToggle}/>
            </div>
        </header>
    )
}

export default Header;
