import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";

function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setError] = useState({
        name: "",
        email: "",
        password: "Что-то пошло не так"
    });

    function handleValues(e) {
        setValues({...values, [e.target.name]: e.target.value});
        setError({...errors, [e.target.name]: e.target.validationMessage});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/signin");
    };

    return (
            <Auth title={"Добро пожаловать!"} name={"form-register"} button={"Зарегистрироваться"}
                  authText={"Уже зарегистрированы? "}
                  authTextLink={"Войти"} handleSubmit={handleSubmit} to={"/signin"}
                  classButton={"auth__button_register"}>
                <Input subtitle={"Имя"} name={"name"} type={"text"} placeholder={"Имя"}
                       handleValues={handleValues} value={values.name} error={errors.name}
                       id={"name-error"} classError={errors.email && "auth__error-span_pad"}/>
                <Input subtitle={"E-mail"} name={"email"} type={"email"} placeholder={"E-mail"}
                       handleValues={handleValues} value={values.email} error={errors.email}
                       id={"email-error"} classError={errors.email && "auth__error-span_pad"}/>
                <Input subtitle={"Пароль"} name={"password"} type={"password"} placeholder={"Пароль"}
                       handleValues={handleValues} value={values.password} error={errors.password}
                       id={"password-error"} classError={errors.password && "auth__error-span_pad"}/>
            </Auth>
    )
        ;
}


export default Register;
