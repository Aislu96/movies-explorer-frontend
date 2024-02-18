import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies({moviesList}) {
    return (
        <main className="movies">
            <SearchForm/>
            <MoviesCardList moviesList={moviesList} value={true}/>
        </main>
    );
}

export default Movies;
