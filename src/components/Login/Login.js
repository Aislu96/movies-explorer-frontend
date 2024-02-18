import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [errors, setError] = useState({
        email: "",
        password: ""
    });

    function handleValues(e) {
        setValues({...values, [e.target.name]: e.target.value});
        setError({...errors, [e.target.name]: e.target.validationMessage});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <Auth title={"Рады видеть!"} name={"form-login"} button={"Войти"} authText={"Ещё не зарегистрированы? "}
              authTextLink={"Регистрация"} handleSubmit={handleSubmit} to={"/signup"} classButton={"auth__button_login"}>
            <Input subtitle={"E-mail"} name={"email"} type={"email"} placeholder={"E-mail"}
                   handleValues={handleValues} value={values.email} error={errors.email}
                   id={"email-error"}/>
            <Input subtitle={"Пароль"} name={"password"} type={"password"} placeholder={"Пароль"}
                   handleValues={handleValues} value={values.password} error={errors.password}
                   id={"password-error"}/>
        </Auth>
    );
}


export default Login;
