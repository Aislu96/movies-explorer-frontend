import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../Profile/Profile.css";

function Profile() {
    const navigate = useNavigate();
    const [buttonToggle, setButtonToggle] = useState(false);
    const [isValid] = useState(false);

    function handelBtnClick() {
        setButtonToggle(true);
    }

    const [values, setValues] = useState({
        name: "",
        email: ""
    });

    const [errors, setError] = useState({
        name: "При обновлении профиля произошла ошибка.",
        email: ""
    });

    function handleValues(e) {
        setValues({...values, [e.target.name]: e.target.value});
        setError({...errors, [e.target.name]: e.target.validationMessage});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/profile');
    };

    return (
        <section className="profile">
            <h1 className="profile__title">Привет, {values.name || "Айсылу"}!</h1>
            <form className="profile__form" name="form-profile" onSubmit={handleSubmit} noValidate>
                <label className="profile__label">
                    <p className="profile__subtitle">Имя</p>
                    <input name="name" className="profile__subtitle profile__subtitle_input" type="text"
                           placeholder="Имя" minLength="2"
                           maxLength="40"
                           onChange={handleValues}
                           value={values.name ? values.name : ""} required/>
                </label>
                <div className="profile__line"></div>
                <label className="profile__label">
                    <p className="profile__subtitle">E-mail</p>
                    <input name="email" className="profile__subtitle profile__subtitle_input" type="email"
                           placeholder="E-mail" minLength="2"
                           maxLength="40"
                           onChange={handleValues}
                           value={values.email ? values.email : ""} required/>
                </label>
            </form>
            <div className="profile__item">
                {buttonToggle ? (
                    <>
                        <span id="error"
                              className={isValid ? "profile__error" : "profile__error profile__error_text"}>{errors.email || errors.name || ''}</span>
                        <button type="submit"
                                className={isValid ? "profile__button-save" : "profile__button-save profile__button-save_color"}
                                onClick={handelBtnClick}>Сохранить
                        </button>
                    </>
                ) : (
                    <>
                        <button type="submit" className="profile__button-edit"
                                onClick={handelBtnClick}>Редактировать
                        </button>
                        <Link to={'/signin'} className="profile__link">Выйти из аккаунта</Link>
                    </>
                )}
            </div>
        </section>
    );
}

export default Profile;
