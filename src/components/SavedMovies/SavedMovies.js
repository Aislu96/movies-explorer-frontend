import React, {useState} from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import {MOVIES_SHORTS_DURATION} from "../../utils/constants";


function SavedMovies({moviesList, onClickSaveFilm, onClickDeleteFilm, cardsMoviesSave}) {


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
