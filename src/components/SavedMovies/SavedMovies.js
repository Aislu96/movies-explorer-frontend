import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({moviesSave}){
return (
    <>
        <SearchForm/>
        <MoviesCardList moviesList={moviesSave} />
    </>
);
}

export default SavedMovies;
