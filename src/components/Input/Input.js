import React from "react";
import './Input.css';


function Input({subtitle, name, type, placeholder, handleValues, value, error, id, classError}) {
    return (
        <label className="auth__label">
            <p className="auth__subtitle">{subtitle}</p>
            <input name={name} className="input auth__error" type={type}
                   placeholder={placeholder} minLength="2"
                   maxLength="40"
                   onChange={handleValues}
                   value={value ? value : ""} required/>
            <span id={id} className={`auth__error-span ${classError}`}>{error || ''}</span>
        </label>
    );
}

export default Input;
