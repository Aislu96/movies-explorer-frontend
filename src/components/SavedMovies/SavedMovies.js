import React, {useState} from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import {MOVIES_SHORTS_DURATION} from "../../utils/constants";
import filterFilms from "../../utils/utils";


function SavedMovies({moviesList, onClickSaveFilm, onClickDeleteFilm, cardsMoviesSave}) {
    const [checked, setChecked] = useState( false);
    const [moviesFilter, setMoviesFilter] = useState(moviesList);
    const [filmSearchQuery, setFilmSearchQuery] = useState( '');

    function handelSearchMovies(value, item) {
        if ((!item && item !== undefined)) {
            const filter = filterFilms(moviesList,value);
            const shortFilms = filter.filter((item) => item.duration < MOVIES_SHORTS_DURATION);
            setMoviesFilter(shortFilms);
        } else {
            const filter = filterFilms(moviesList,value);
            setMoviesFilter(filter);
        }
        setFilmSearchQuery(value);
    }


    function handleChangeChecked() {
        setChecked(!checked);
        handelSearchMovies(filmSearchQuery, !checked);
    }

    return (
        <main className="movies">
            <SearchForm checked={checked} onSearchMovies={handelSearchMovies}
                        onChangeChecked={handleChangeChecked}
            />
            <MoviesCardList cardsMoviesSave={cardsMoviesSave} moviesFilter={moviesFilter}
                            value={false} onClickSaveFilm={onClickSaveFilm}
                            onClickDeleteFilm={onClickDeleteFilm}/>
        </main>
    );
}

export default SavedMovies;
