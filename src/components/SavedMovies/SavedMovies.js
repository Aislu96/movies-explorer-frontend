import React, {useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {MOVIES_SHORTS_DURATION} from "../../utils/constants";
import filterFilms from "../../utils/utils";


function SavedMovies({onClickSaveFilm, onClickDeleteFilm, cardsMoviesSave, cardDelete, setCardDelete}) {
    const [checked, setChecked] = useState(true);
    const [moviesFilter, setMoviesFilter] = useState(cardsMoviesSave);
    const [filmSearchQuery, setFilmSearchQuery] = useState('');

    React.useEffect(() => {
        if (cardDelete) {
            const cardDeleteFilter = moviesFilter.filter((item) => {
                return item._id !== cardDelete;
            });
            setMoviesFilter(cardDeleteFilter)
        }
        setCardDelete('')
    }, [cardDelete, setCardDelete, moviesFilter])

    function handelSearchMovies(value, item) {
        if ((!item && item !== undefined)) {
            const filter = filterFilms(cardsMoviesSave, value);
            const shortFilms = filter.filter((item) => item.duration < MOVIES_SHORTS_DURATION);
            setMoviesFilter(shortFilms);
        } else {
            const filter = filterFilms(cardsMoviesSave, value);
            setMoviesFilter(filter);
        }
        setFilmSearchQuery(value);
    }

    function handleChangeChecked(movie) {
        setChecked(!checked);
        handelSearchMovies(movie, !checked);
    }

    return (
        <main className="movies">
            <SearchForm checked={checked} onSearchMovies={handelSearchMovies} onChangeChecked={handleChangeChecked}/>
            <MoviesCardList cardsMoviesSave={cardsMoviesSave} moviesFilter={moviesFilter} value={false} onClickSaveFilm={onClickSaveFilm} onClickDeleteFilm={onClickDeleteFilm}/>
        </main>
    );
}

export default SavedMovies;
