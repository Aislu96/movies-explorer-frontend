import React, {useEffect, useState} from "react";
import MoviesCard from "../../Movies/MoviesCard/MoviesCard";
import "../../Movies/MoviesCardList/MoviesCardList.css";
import {useResize} from "../../../hooks/useResize";

function MoviesCardListSavedMovies({search, currentUser, cardsMoviesSave, moviesFilter, value, onClickSaveFilm, onClickDeleteFilm}) {
    const {width, isScreenSm, isScreenMd, isScreenLg} = useResize();
    const [countMoviesCard, setCountMoviesCard] = useState(0);

   useEffect(() => {
        if (isScreenSm === true) {
            return setCountMoviesCard(5);
        } else if (isScreenMd === true) {
            return setCountMoviesCard(8);
        } else if (isScreenLg === true) {
            return setCountMoviesCard(12)
        }
    }, [width, isScreenSm, isScreenMd, isScreenLg])


    function getPagesMovie(movies) {
        return movies.slice(0, countMoviesCard).map(movie => (
            <MoviesCard currentUser={currentUser}
                        key={movie.id}
                        movie={movie} value={value}
                        onClickSaveFilm={onClickSaveFilm}
                        onClickDeleteFilm={onClickDeleteFilm}
            />)
        )
    }


    return (
        <section className="movies-cards">
                <div className="movies-cards__container">
                    {search? getPagesMovie(moviesFilter): getPagesMovie(cardsMoviesSave)}
                </div>
                {moviesFilter.length === 0 && <div className="movies-cards__text">Ничего не найдено</div>}
        </section>
    );
}

export default MoviesCardListSavedMovies;
