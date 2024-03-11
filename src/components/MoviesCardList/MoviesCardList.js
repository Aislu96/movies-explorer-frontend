import React, {useEffect, useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import {useResize} from "../../hooks/useResize";
import {ERROR_NOT_FOUND, MOVIES_CARD_12, MOVIES_CARD_2, MOVIES_CARD_5, MOVIES_CARD_8} from "../../utils/constants";

function MoviesCardList({cardsMoviesSave, moviesFilter, value, onClickSaveFilm, onClickDeleteFilm}) {
    const {width, isScreenSm, isScreenMd, isScreenLg} = useResize();
    const [countMoviesCard, setCountMoviesCard] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    function handelClickIncrease() {
        if (isScreenSm === true) {
            return setCountMoviesCard(countMoviesCard + MOVIES_CARD_2);
        } else if (isScreenMd === true) {
            return setCountMoviesCard(countMoviesCard + MOVIES_CARD_8);
        } else if (isScreenLg === true) {
            return setCountMoviesCard(countMoviesCard + MOVIES_CARD_12)
        }
    }

    useEffect(() => {
        if (moviesFilter.length > countMoviesCard) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [moviesFilter.length, countMoviesCard])

    useEffect(() => {
        if (isScreenSm === true) {
            return setCountMoviesCard(MOVIES_CARD_5);
        } else if (isScreenMd === true) {
            return setCountMoviesCard(MOVIES_CARD_8);
        } else if (isScreenLg === true) {
            return setCountMoviesCard(MOVIES_CARD_12)
        }
    }, [width, isScreenSm, isScreenMd, isScreenLg])


    function getPagesMovie() {
        return moviesFilter.slice(0, countMoviesCard).map(movie => (
            <MoviesCard key={movie._id} movie={movie} value={value} onClickSaveFilm={onClickSaveFilm}
                        onClickDeleteFilm={onClickDeleteFilm}/>)
        )
    }

    function getPagesMovieSave() {
        return moviesFilter.slice(0, countMoviesCard).map(movie => {
                const likedMovie = cardsMoviesSave.find((item) => {
                    return item.movieId === movie.id;
                });
                const likedMovieId = likedMovie ? likedMovie._id : null;
                return (<MoviesCard key={movie.id} movie={{...movie, _id: likedMovieId || movie._id}} value={value}
                                    onClickSaveFilm={onClickSaveFilm} onClickDeleteFilm={onClickDeleteFilm}
                                    liked={likedMovie ? true : false}
                />)
            }
        )
    }

    return (
        <section className="movies-cards">
            {moviesFilter.length !== 0 ? (<div className="movies-cards__container">{cardsMoviesSave.length !== 0 ? getPagesMovieSave() : getPagesMovie()}</div>) :
                <div className="movies-cards__text">{ERROR_NOT_FOUND}</div>}
            {value && moviesFilter.length !== 0 && isLoading ? (
                <button type="submit" className="movies-cards__button" onClick={handelClickIncrease}>Ещё</button>) : ''}
        </section>
    );
}

export default MoviesCardList;
