import {Link} from "react-router-dom";
import React from "react";
import "./NavWithoutAuth.css";

function NavWithoutAuth() {
    return (
        <>
                <Link to="/signup" className="navigation__text">Регистрация</Link>
                <Link to="/signin" className="navigation__btn">Войти</Link>
        </>
    );
}


export default NavWithoutAuth;
