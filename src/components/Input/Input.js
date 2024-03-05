import React from "react";
import './Input.css';


function Input({subtitle, name, type, placeholder, handleChange, value, error, id, classError, isValid, minLength}) {
    return (
        <div className="auth__label">
            <p className="auth__subtitle">{subtitle}</p>
            <input id={name} name={name} className={isValid ? "input" : "input auth__error"} type={type}
                   placeholder={placeholder} minLength={minLength || "2"}
                   maxLength="30"
                   onChange={handleChange}
                   value={value ? value : ""} required/>
            <span id={id}
                  className={isValid ? "auth__error-span" : `auth__error-span ${classError}`}>{error || ''}</span>
        </div>
    );
}

export default Input;
