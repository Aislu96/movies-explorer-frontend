import React from "react";
import "./SearchForm.css";
import Checked from "../Checked/Checked";
import iconFind from "../../images/find.svg";
import useFormValidation from "../../hooks/useFormValidation";
import {ERROR_MOVIE_SEARCH} from "../../utils/constants";

function SearchFrom({onChangeChecked, checked, onSearchMovies}) {
    const {values, errors, handleChange, setValues, resetValidation, isValid} = useFormValidation({});

    React.useEffect(() => {
        resetValidation();
        const values = {};
        setValues(values);
    }, [setValues, resetValidation]);

    function handleSubmit(e) {
        e.preventDefault();
        onSearchMovies(values.movies, checked);
    }

    return (
        <section className="search-form">
            <form name="movies" className="search-form__container" onSubmit={handleSubmit} noValidate>
                <div className="search-form__label">
                    <img alt="Изображение иконки найти" src={iconFind} className="search-form__img"/>
                    <input name="movies" type="text" className="search-form__input" placeholder="Фильм" onChange={handleChange} value={values.movies || ""} required/>
                    <button className="search-form__button" type="submit" disabled={!isValid}>Найти</button>
                </div>
                <Checked checked={checked} onChangeChecked={onChangeChecked} movie={values.movies} isValid={isValid}/>
            </form>
            <div id="movies-error" className={errors.movies && "search-form__error"}>{errors.movies ? ERROR_MOVIE_SEARCH : ''}</div>
        </section>
    );
}

export default SearchFrom;
