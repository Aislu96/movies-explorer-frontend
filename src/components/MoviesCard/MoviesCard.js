import React from "react";
import "./MoviesCard.css"
import checkMark from "../../images/check-mark.svg";
import iconDelete from "../../images/iconDelete.svg";
import {MOVIE_DURATION} from "../../utils/constants";

function MoviesCard({movie, value, onClickSaveFilm, onClickDeleteFilm, liked}) {
    const classButton = liked ? "movie__button_check-mark" : "movie__button_save";
    let hours = Math.trunc(movie.duration / MOVIE_DURATION);
    let minutes = movie.duration % MOVIE_DURATION;

    function handleClickSave() {
        onClickSaveFilm(movie);
    }

    function handelDeleteSave() {
        onClickDeleteFilm(movie);
    }

    return (
        <article className="movie">
            <a href={movie.trailerLink} target="_blank" className="movie__trailerLink" rel="noreferrer">
                {value ? <img alt={movie.nameRU} src={`https://api.nomoreparties.co/${movie.image.url}`}
                              className="movie__img"/> :
                    <img alt={movie.nameRU} src={movie.image} className="movie__img"/>}
            </a>
            {value ? <button className={`movie__button ${classButton}`} onClick={liked ? handelDeleteSave : handleClickSave}>{liked ? <img className="movie__button-img" alt='Иконка галочки' src={checkMark}/> : "Сохранить"}</button> :
                <button className="movie__button movie__button_check-mark" onClick={handelDeleteSave}><img className="movie__button-img" alt='Иконка удаления' src={iconDelete}/></button>}
            <div className="movie__group">
                <h2 className="movie__title">{movie.nameRU}</h2>
                <p className="movie__duration">{hours + 'ч ' + minutes + 'м'}</p>
            </div>
        </article>
    );
}

export default MoviesCard;
