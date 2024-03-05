import React from "react";
import "../../Movies/SearchForm/SearchForm.css";
import Checked from "../../Checked/Checked";
import iconFind from "../../../images/find.svg";
import useFormValidation from "../../../hooks/useFormValidation";

function SearchFormSavedMovies({onChangeChecked, checked, onSearchMovies}) {
    const {values, errors, handleChange, setValues, resetValidation} = useFormValidation({});

    React.useEffect(() => {
        resetValidation();
        const values = {};
        setValues(values);
    }, [setValues, resetValidation]);

    function handleSubmit(e) {
        e.preventDefault();
        onSearchMovies(values.movies);
    }

    return (
        <section className="search-form">
            <form name="movies" className="search-form__container" onSubmit={handleSubmit} noValidate>
                <div className="search-form__label">
                    <img alt="Изображение иконки найти" src={iconFind} className="search-form__img"/>
                    <input name="movies" type="text" className="search-form__input" placeholder="Фильм"
                           onChange={handleChange}
                           value={values.movies || ""}
                           required/>
                    <button className="search-form__button" type="submit">Найти</button>
                </div>
                <Checked checked={checked} onChangeChecked={onChangeChecked}/>
            </form>
            <div id="movies-error"
                 className={errors.movies && "search-form__error"}>{errors.movies ? "Нужно ввести ключевое слово" : ''}</div>
        </section>
    );
}

export default SearchFormSavedMovies;
