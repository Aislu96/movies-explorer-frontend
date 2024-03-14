import React from "react";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";
import useFormValidation from "../../hooks/useFormValidation";

function Login({onSignin, errorMessage, onErrorMessage}) {
    const {values, errors, handleChange, setValues, resetValidation, isValid} = useFormValidation({});

    React.useEffect(() => {
        resetValidation();
        const values = {};
        setValues(values);
    }, [setValues, resetValidation]);

    const handleSubmit = (e) => {
        onErrorMessage('');
        e.preventDefault();
        onSignin(values);
    };

    return (
        <Auth title={"Рады видеть!"} name={"form-login"} button={"Войти"} authText={"Ещё не зарегистрированы? "}
              authTextLink={"Регистрация"} handleSubmit={handleSubmit} to={"/signup"}
              classButton={"auth__button_login"} isValid={isValid} errorMessage={errorMessage}>
            <Input subtitle={"E-mail"} name={"email"} type={"email"} placeholder={"E-mail"}
                   handleChange={handleChange} value={values.email} error={errors.email}
                   id={"email-error"} classError={errors.email && "auth__error-span_pad"} isValid={isValid}/>
            <Input subtitle={"Пароль"} name={"password"} type={"password"} placeholder={"Пароль"}
                   handleChange={handleChange} classError={errors.password && "auth__error-span_pad"}
                   value={values.password} error={errors.password} minLength={"8"} isValid={isValid}/>
        </Auth>
    );
}


export default Login;
