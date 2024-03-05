import React, {useEffect, useState} from "react";
import SearchFormSavedMovies from "./SearchFormSavedMovies/SearchFormSavedMovies";
import MoviesCardListSavedMovies
    from "../../components/SavedMovies/MoviesCardListSavedMovies/MoviesCardListSavedMovies";

function SavedMovies({onClickDeleteFilm, cardsMoviesSave, currentUser}) {
    const [search, setSearch] = useState('')
    const [checkedSavedMovies, setCheckedSavedMovies] = useState(true);
    const [moviesFilterSavedMovies, setMoviesFilterSavedMovies] = useState([]);

    useEffect(() => {
        if (!checkedSavedMovies) {
            const filter = cardsMoviesSave.filter((item) => item.duration < 40);
            setMoviesFilterSavedMovies(filter);
        }
    }, [checkedSavedMovies, cardsMoviesSave]);

    function filterFilms(value) {
        return cardsMoviesSave.filter((item) => {
            const strRu = String(item.nameRU).toLowerCase();
            const strEn = String(item.nameEN).toLowerCase();
            const filmSearchQueryStr = value.toLowerCase().trim();
            return (strRu.indexOf(filmSearchQueryStr) !== -1 || strEn.indexOf(filmSearchQueryStr) !== -1);
        });
    }

    function handelSearchSavedMovies(value) {
        if (!checkedSavedMovies) {
            const filter = cardsMoviesSave.filter((item) => item.duration < 52);
            setMoviesFilterSavedMovies(filter);
            setSearch(value)
        } else {
            const filter = filterFilms(value);
            setSearch(value)
            setMoviesFilterSavedMovies(filter)
        }
    }


    function handleChangeCheckedSavedMovies() {
        setCheckedSavedMovies(!checkedSavedMovies);
    }

    return (
        <>
            <SearchFormSavedMovies checked={checkedSavedMovies} onSearchMovies={handelSearchSavedMovies}
                                   onChangeChecked={handleChangeCheckedSavedMovies}/>
            <MoviesCardListSavedMovies search={search} currentUser={currentUser} cardsMoviesSave={cardsMoviesSave}
                                       moviesFilter={moviesFilterSavedMovies} value={false}
                                       onClickDeleteFilm={onClickDeleteFilm}/>
        </>
    );
}

export default SavedMovies;
