import React, {useEffect, useState} from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";


function Movies({currentUser, moviesList, onClickSaveFilm, onClickDeleteFilm, cardsMoviesSave}) {
    const [checked, setChecked] = useState(true);
    const [moviesFilter, setMoviesFilter] = useState([]);
    const [filmSearchQuery, setFilmSearchQuery] = useState('');

    const filterFilms = React.useCallback((value) => {
        return moviesList.filter((item) => {
            const strRu = String(item.nameRU).toLowerCase();
            const strEn = String(item.nameEN).toLowerCase();
            const filmSearchQueryStr = value.toLowerCase().trim();
            setFilmSearchQuery(value);
            localStorage.setItem('filmSearchQuery', JSON.stringify(value));
            return (strRu.indexOf(filmSearchQueryStr) !== -1 || strEn.indexOf(filmSearchQueryStr) !== -1);
        });
    }, [setFilmSearchQuery,moviesList])

    useEffect(() => {
        if (!checked) {
            const shortFilms = moviesFilter.filter((item) => item.duration < 52);
            setMoviesFilter(shortFilms);
        } else {
            const filter = filterFilms(filmSearchQuery)
            setMoviesFilter(filter);
        }
    }, [checked, setMoviesFilter, moviesFilter, filterFilms, filmSearchQuery]);

    function handelSearchMovies(value) {
        localStorage.setItem('checked', JSON.stringify(checked));
        if (!checked) {
            const filter = filterFilms(value);
            const shortFilms = filter.filter((item) => item.duration < 40);
            setMoviesFilter(shortFilms);
            localStorage.setItem('filmSearchQuery', JSON.stringify(value));
            localStorage.setItem('moviesFilter', JSON.stringify(shortFilms));
        } else {
            setFilmSearchQuery(value);
            const filter = filterFilms(value);
            setMoviesFilter(filter);
            localStorage.setItem('filmSearchQuery', JSON.stringify(value));
            localStorage.setItem('moviesFilter', JSON.stringify(filter));
        }
    }


    function handleChangeChecked() {
        setChecked(!checked);
        localStorage.setItem('checked', JSON.stringify(checked));
    }

    useEffect(() => {
        const checked = JSON.parse(localStorage.getItem('checked'));
        setChecked(checked);
        const moviesFilter = JSON.parse(localStorage.getItem('moviesFilter'));
        if (null === moviesFilter) {
            setMoviesFilter([]);
        } else {
            setMoviesFilter(moviesFilter);
        }
        const filmSearchQuery = JSON.parse(localStorage.getItem('filmSearchQuery'));
        setFilmSearchQuery(filmSearchQuery);
    }, [setFilmSearchQuery, setMoviesFilter, setChecked]);


    return (
        <main className="movies">
            <SearchForm checked={checked} onSearchMovies={handelSearchMovies}
                        onChangeChecked={handleChangeChecked}
            />
            <MoviesCardList currentUser={currentUser} cardsMoviesSave={cardsMoviesSave} moviesFilter={moviesFilter}
                            value={true} onClickSaveFilm={onClickSaveFilm}
                            onClickDeleteFilm={onClickDeleteFilm}/>
        </main>
    );
}

export default Movies;
