import React from "react";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";
import useFormValidation from "../../hooks/useFormValidation";

function Register({onSignup, errorMessage, onErrorMessage}) {
    const {values, errors, handleChange, setValues, resetValidation, isValid} = useFormValidation({});

    React.useEffect(() => {
        resetValidation();
        const values = {};
        setValues(values);
    }, [setValues, resetValidation]);

    const handleSubmit = (e) => {
        onErrorMessage('');
        e.preventDefault();
        onSignup(values);
    };

    return (
        <Auth title={"Добро пожаловать!"} name={"form-register"} button={"Зарегистрироваться"}
              authText={"Уже зарегистрированы? "}
              authTextLink={"Войти"} handleSubmit={handleSubmit} to={"/signin"}
              classButton={"auth__button_register"} errorMessage={errorMessage} isValid={isValid} >
            <Input subtitle={"Имя"} name={"name"} type={"text"} placeholder={"Имя"}
                   handleChange={handleChange} value={values.name} error={errors.name}
                   id={"name-error"} classError={errors.name && "auth__error-span_pad"} isValid={isValid} />
            <Input subtitle={"E-mail"} name={"email"} type={"email"} placeholder={"E-mail"}
                   handleChange={handleChange} value={values.email} error={errors.email}
                   id={"email-error"} classError={errors.email && "auth__error-span_pad"} isValid={isValid}/>
            <Input subtitle={"Пароль"} name={"password"} type={"password"} placeholder={"Пароль"}
                   handleChange={handleChange} value={values.password} error={errors.password}
                   id={"password-error"} minLength={"8"}  classError={errors.password && "auth__error-span_pad"} isValid={isValid}/>
        </Auth>
    );
}


export default Register;
