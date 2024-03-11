import React, {useEffect, useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {MOVIES_SHORTS_DURATION} from "../../utils/constants";
import filterFilms from "../../utils/utils";

function Movies({moviesList, onClickSaveFilm, onClickDeleteFilm, cardsMoviesSave}) {
    const filmSearchQuerySave = JSON.parse(localStorage.getItem('filmSearchQuery'));
    const moviesFilterSave = JSON.parse(localStorage.getItem('moviesFilter'));
    const checkedSave = JSON.parse(localStorage.getItem('checked'));
    const [checked, setChecked] = useState(checkedSave || true);
    const [moviesFilter, setMoviesFilter] = useState(moviesFilterSave || []);
    const [filmSearchQuery, setFilmSearchQuery] = useState(filmSearchQuerySave || '');

    useEffect(() => {
        localStorage.setItem('checked', JSON.stringify(checked));
        localStorage.setItem('moviesFilter', JSON.stringify(moviesFilter));
        localStorage.setItem('filmSearchQuery', JSON.stringify(filmSearchQuery));
    }, [checked, moviesFilter, filmSearchQuery])


    function handelSearchMovies(value, item) {
        if ((!item && item !== undefined)) {
            const filter = filterFilms(moviesList, value);
            const shortFilms = filter.filter((item) => item.duration < MOVIES_SHORTS_DURATION);
            setMoviesFilter(shortFilms);
        } else {
            setFilmSearchQuery(value);
            const filter = filterFilms(moviesList, value);
            setMoviesFilter(filter);
        }
        setFilmSearchQuery(value);
    }


    function handleChangeChecked(movie) {
        setChecked(!checked);
        handelSearchMovies(movie, !checked)
    }


    return (
        <main className="movies">
            <SearchForm checked={checked} onSearchMovies={handelSearchMovies} onChangeChecked={handleChangeChecked}/>
            <MoviesCardList cardsMoviesSave={cardsMoviesSave} moviesFilter={moviesFilter} value={true} onClickSaveFilm={onClickSaveFilm} onClickDeleteFilm={onClickDeleteFilm}/>
        </main>
    );
}

export default Movies;
