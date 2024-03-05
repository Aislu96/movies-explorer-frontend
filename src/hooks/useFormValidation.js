import React from "react";

function useFormValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (e) => {
        const {value, name} = e.target;
        if (name === 'name' && /^[A-Za-zА-Яа-яЁё -]+$/.test(e.target.value) === false) {
            e.target.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис');
        } else if(name === 'email' && /^((([0-9A-Za-z]{1}[-0-9A-z\\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u.test(e.target.value) === false){
            e.target.setCustomValidity("Неккоректный email");
        } else {
            e.target.setCustomValidity('');
        }

        const error = e.target.validationMessage;
        setValues((values) => ({...values, [name]: value}));
        setErrors((errors) => ({...errors, [name]: error}));
        const isValid = e.target.closest('form').checkValidity();
        setIsValid(isValid);
    }

    const resetValidation = React.useCallback(
        (values = {}, errors = {}, isValid = false) => {
            setValues(values);
            setErrors(errors);
            setIsValid(isValid);
        }, [setValues, setErrors, setIsValid]);


    return {
        values, errors, handleChange, setValues, setErrors, resetValidation, isValid
    };
}

export default useFormValidation;
