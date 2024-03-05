import React, {useEffect, useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import {useResize} from "../../../hooks/useResize";

function MoviesCardList({currentUser, cardsMoviesSave, moviesFilter, value, onClickSaveFilm, onClickDeleteFilm}) {
    const {width, isScreenSm, isScreenMd, isScreenLg} = useResize();
    const [countMoviesCard, setCountMoviesCard] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    function handelClickIncrease() {
        if (isScreenSm === true) {
            return setCountMoviesCard(countMoviesCard + 2);
        } else if (isScreenMd === true) {
            return setCountMoviesCard(countMoviesCard + 8);
        } else if (isScreenLg === true) {
            return setCountMoviesCard(countMoviesCard + 12)
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
            return setCountMoviesCard(5);
        } else if (isScreenMd === true) {
            return setCountMoviesCard(8);
        } else if (isScreenLg === true) {
            return setCountMoviesCard(12)
        }
    }, [width, isScreenSm, isScreenMd, isScreenLg])


    function getPagesMovie() {
        return moviesFilter.slice(0, countMoviesCard).map(movie => (
            <MoviesCard currentUser={currentUser}
                        key={movie.id}
                        movie={movie} value={value}
                        onClickSaveFilm={onClickSaveFilm}
                        onClickDeleteFilm={onClickDeleteFilm}
            />)
        )
    }

    function getPagesMovieSave() {
        return moviesFilter.slice(0, countMoviesCard).map(movie => {
                const likedMovie = cardsMoviesSave.find((item) => {
                    return item.movieId === movie.id;
                });
                const likedMovieId = likedMovie ? likedMovie._id : null;
                return (<MoviesCard currentUser={currentUser}
                                    key={movie.id}
                                    movie={{...movie, _id: likedMovieId}} value={value}
                                    onClickSaveFilm={onClickSaveFilm}
                                    onClickDeleteFilm={onClickDeleteFilm}
                                    liked={likedMovie ? true : false}
                />)
            }
        )
    }

    return (
        <section className="movies-cards">
            {moviesFilter.length !== 0 ? (
                <div className="movies-cards__container">
                    {cardsMoviesSave ? getPagesMovieSave() : getPagesMovie()}
                </div>
            ) : <div className="movies-cards__text">Ничего не найдено</div>}
            {moviesFilter.length !== 0 && isLoading ? (<button type="submit" className="movies-cards__button"
                                                               onClick={handelClickIncrease}>Ещё</button>) : ''
            }
        </section>
    );
}

export default MoviesCardList;
