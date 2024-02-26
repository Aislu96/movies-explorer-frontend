import React, {useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({moviesList, value}) {
    const [count, setCount] = useState(12);

    function handelClickIncrease() {
        setCount(count + 12);
    }

    return (
            <section className="movies-cards">
                <div className="movies-cards__container">
                    {moviesList.slice(0, count).map((movie, id) => (
                        <MoviesCard movie={movie} key={id} value={value}/>
                    ))}
                </div>
                {value ? <button type="submit" className="movies-cards__button"
                                 onClick={handelClickIncrease}>Ещё</button> : ''}
            </section>
    );
}

export default MoviesCardList;
