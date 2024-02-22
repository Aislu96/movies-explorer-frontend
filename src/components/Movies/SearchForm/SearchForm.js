import React, {useState} from "react";
import "./SearchForm.css";
import Preloader from "./Preloader/Preloader";
import iconFind from "../../../images/find.svg";

function SearchFrom() {
    const [values, setValues] = useState({movies: ''});

    function handleValues(e) {
        setValues({...values, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className="search-form">
            <form name="movies" className="search-form__container" onSubmit={handleSubmit}>
                <label className="search-form__label">
                    <img alt="Изображение иконки найти" src={iconFind} className="search-form__img"/>
                    <input name="movies" type="text" className="search-form__input" placeholder="Фильм"
                           onChange={handleValues}
                           value={values.movies ? values.movies : ""}
                           required/>
                    <button className="search-form__button" type="submit">Найти</button>
                </label>
                <Preloader/>
            </form>
        </section>
    );
}

export default SearchFrom;
