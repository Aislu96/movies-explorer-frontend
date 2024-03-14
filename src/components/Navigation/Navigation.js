import React from "react";
import "./Navigation.css";
import NavWithoutAuth from "./NavWithoutAuth/NavWithoutAuth";
import NavWithAuth from "./NavWithAuth/NavWithAuth";

function Navigation({loggedIn, onBtnClick, setMenuToggle, colorAuth, colorBurger, logoButtonBlack}) {
    return (
        <nav className={loggedIn? "navigation size" : "navigation"}>
            {loggedIn ? (<NavWithAuth setMenuToggle={setMenuToggle} onBtnClick={onBtnClick} colorAuth={colorAuth} colorBurger={colorBurger} logoButtonBlack={logoButtonBlack}/>) : (<NavWithoutAuth/>)}
        </nav>
    );
}

export default Navigation;
