import React from "react";
import {EMAIL_PATTERN, ERROR_NAME, ERROR_PASSWORD, NAME_PATTERN} from "../utils/constants";

function useFormValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (e) => {
        const {value, name} = e.target;
        if (name === 'name' && NAME_PATTERN.test(e.target.value) === false) {
            e.target.setCustomValidity(ERROR_NAME);
        } else if (name === 'email' && EMAIL_PATTERN.test(e.target.value) === false) {
            e.target.setCustomValidity(ERROR_PASSWORD);
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
        values, errors, handleChange, setValues, setErrors, resetValidation, isValid, setIsValid
    };
}

export default useFormValidation;
