import React, {useState} from "react";
import "./MoviesCard.css"
import checkMark from "../../../images/check-mark.svg";
import iconDelete from "../../../images/iconDelete.svg";

function MoviesCard({movie, value, key}) {
    const [active, SetActive] = useState(false);
    const moviesUrl = "https://api.nomoreparties.co/";
    const imageUrl = movie.image.formats.thumbnail.url;
    const classButton = active ? "move__button_check-mark" : "movie__button_save";
    let hours = Math.trunc(movie.duration / 60);
    let minutes = movie.duration % 60;

    function handleClick() {
        SetActive(!active);
    }

    return (
        <article className="movie">
            <img alt={movie.nameRU} src={`${moviesUrl}${imageUrl}`} className="movie__img"/>
            {value ?
                <button className={`movie__button ${classButton}`} onClick={handleClick}>{active ?
                    <img className="movie__button-img" alt='Иконка галочки' src={checkMark}/> : "Сохранить"}</button>
                : <button className="movie__button move__button_check-mark">
                    <img className="movie__button-img" alt='Иконка удаления' src={iconDelete}/>
                </button>}

            <div className="movie__group">
                <h2 className="movie__title">{movie.nameRU}</h2>
                <p className="movie__duration">{hours + 'ч ' + minutes + 'м'}</p>
            </div>
        </article>
    );
}

export default MoviesCard;
