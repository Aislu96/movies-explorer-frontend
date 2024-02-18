import React from "react";
import './Auth.css';
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";

function Auth({title, name, button, authText, authTextLink, handleSubmit, children, to, classButton}) {
    return (
        <div className="auth">
            <Link to="/" className="auth__logo-link">
                <img src={logo} className="auth__logo" alt="Логотип проекта Movies"/>
            </Link>
            <h1 className="auth__title">{title}</h1>
            <form className="auth__form" name={name} onSubmit={handleSubmit} noValidate>
                {children}
                <button type="submit" className={`auth__button ${classButton}`}
                        onSubmit={handleSubmit}>{button}</button>
            </form>
            <p className="auth__text">{authText}<Link to={to} className="auth__text-link">{authTextLink}</Link>
            </p>
        </div>
    );
}

export default Auth;

