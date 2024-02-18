import React from "react";
import './Input.css';


function Input({subtitle, name, type, placeholder, handleValues, value, error, id}) {
    return (
        <label className="input__label">
            <p className="input__subtitle">{subtitle}</p>
            <input name={name} className="input input__error" type={type}
                   placeholder={placeholder} minLength="2"
                   maxLength="40"
                   onChange={handleValues}
                   value={value ? value : ""} required/>
            <span id={id} className="input__error-span">{error || ''}</span>
        </label>
    );
}

export default Input;