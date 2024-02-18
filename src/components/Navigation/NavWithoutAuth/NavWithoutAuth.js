import {Link} from "react-router-dom";
import React from "react";
import "./NavWithoutAuth.css";

function NavWithoutAuth() {
    return (
        <>
            <ul className="nav-without__list">
                <Link to="/signup" className="nav-without__text">Регистрация</Link>
            </ul>
            <Link to="/signin" className="nav-without__button">Войти</Link>
        </>
    );
}


export default NavWithoutAuth;