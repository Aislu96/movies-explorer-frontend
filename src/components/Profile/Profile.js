import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../Profile/Profile.css";
import useFormValidation from "../../hooks/useFormValidation";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile({signOut, errorMessage, onUpdateUser, onErrorMessage}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [buttonToggle, setButtonToggle] = useState(false);

    const {values, errors, handleChange, setValues, resetValidation, isValid, setIsValid} = useFormValidation({});

    React.useEffect(() => {
        resetValidation({});
        const values = {
            name: currentUser.name,
            email: currentUser.email
        };
        setValues(values);
    }, [setValues, currentUser, resetValidation]);

    React.useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setIsValid(false);
        }
    }, [resetValidation, setIsValid, values, currentUser]);

    function handelBtnClick() {
        onErrorMessage('');
        setButtonToggle(true);
    };

    const handleSubmit = (e) => {
        onErrorMessage('');
        e.preventDefault();
        if (isValid && (currentUser.name !== values.name || currentUser.email !== values.email)) {
            onUpdateUser({
                name: values.name || currentUser.name,
                email: values.email || currentUser.email,
            });
        }
        setButtonToggle(false);
    };

    return (
        <section className="profile">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <form className="profile__form" name="form-profile" onSubmit={handleSubmit} noValidate>
                <div className="profile__block profile__block_line">
                    <div className="profile__label">
                        <p className="profile__subtitle">Имя</p>
                        <input name="name" className="profile__subtitle profile__subtitle_input" type="text"
                               placeholder="Имя" minLength="2"
                               maxLength="30"
                               onChange={handleChange} disabled={!buttonToggle}
                               value={values.name ? values.name : currentUser.name} required/>
                    </div>
                    <span id="name-error" className="profile__error-span">{errors.name}</span>
                </div>
                <div className="profile__block">
                    <div className="profile__label">
                        <p className="profile__subtitle">E-mail</p>
                        <input name="email" className="profile__subtitle profile__subtitle_input" type="email"
                               placeholder="E-mail" minLength="2"
                               maxLength="30"
                               onChange={handleChange} disabled={!buttonToggle}
                               value={values.email ? values.email : currentUser.email} required/>

                    </div>
                    <span id="email-error" className="profile__error-span">{errors.email}</span>
                </div>
                {buttonToggle && <div className="profile__item">
                    <span className={errorMessage ? "profile__error profile__error_text" : ""}>{errorMessage}</span>
                    <button type="submit" disabled={!isValid} className={isValid ? "profile__button-save" : "profile__button-save profile__button-save_color"}>Сохранить</button>
                </div>}
            </form>
            {!buttonToggle && <div className="profile__item">
                 <span className={errorMessage ? "profile__error profile__error_text" : ""}>{errorMessage}</span>
                <button type="button" className="profile__button-edit" onClick={handelBtnClick}>Редактировать</button>
                <Link to={'/'} className="profile__link" onClick={signOut}>Выйти из аккаунта</Link>
            </div>}
        </section>
    );
}

export default Profile;
