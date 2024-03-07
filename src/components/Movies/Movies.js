import React, {useState} from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import {MOVIES_SHORTS_DURATION} from "../../utils/constants";
import filterFilms from "../../utils/utils";

function Movies({moviesList, onClickSaveFilm, onClickDeleteFilm, cardsMoviesSave}) {
    const filmSearchQuerySave = JSON.parse(localStorage.getItem('filmSearchQuery'));
    const moviesFilterSave = JSON.parse(localStorage.getItem('moviesFilter'));
    const checkedSave = JSON.parse(localStorage.getItem('checked'));
    const checkedItem = checkedSave ? true : false;
    const [checked, setChecked] = useState(checkedItem);
    const [moviesFilter, setMoviesFilter] = useState(moviesFilterSave || []);
    const [filmSearchQuery, setFilmSearchQuery] = useState(filmSearchQuerySave || '');

    function handelSearchMovies(value, item) {
        if ((!item && item !== undefined)) {
            localStorage.setItem('checked', JSON.stringify(item));
            const filter = filterFilms(moviesList, value);
            const shortFilms = filter.filter((item) => item.duration < MOVIES_SHORTS_DURATION);
            setMoviesFilter(shortFilms);
            localStorage.setItem('moviesFilter', JSON.stringify(shortFilms));
        } else {
            localStorage.setItem('checked', JSON.stringify(true));
            setFilmSearchQuery(value);
            const filter = filterFilms(moviesList, value);
            setMoviesFilter(filter);
            localStorage.setItem('moviesFilter', JSON.stringify(filter));
        }
        setFilmSearchQuery(value);
        localStorage.setItem('filmSearchQuery', JSON.stringify(value));
    }


    function handleChangeChecked() {
        setChecked(!checked);
        handelSearchMovies(filmSearchQuery, !checked);
    }


    return (
        <main className="movies">
            <SearchForm checked={checked} onSearchMovies={handelSearchMovies} onChangeChecked={handleChangeChecked}/>
            <MoviesCardList cardsMoviesSave={cardsMoviesSave} moviesFilter={moviesFilter}
                            value={true} onClickSaveFilm={onClickSaveFilm}
                            onClickDeleteFilm={onClickDeleteFilm}/>
        </main>
    );
}

export default Movies;
