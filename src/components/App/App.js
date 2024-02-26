import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import logoAuthBlack from "../../images/logoAuthBlack.svg";
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Movies from "../Movies/Movies";
import api from "../../utils/api";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {

    const [moviesList, setMoviesList] = useState([]);
    const [moviesSave, setMoviesSave] = useState([]);


    useEffect(() => {
        Promise.all([api.getMovies()])
            .then(([moviesList, user]) => {
                setMoviesList(moviesList);
                setMoviesSave(moviesList.slice(0, 3))
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="App">
            <div className="page">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header classColor={"color"} loggedIn={true}/>
                            <Main/>
                            <Footer/>
                        </>
                    }
                    />
                    <Route path="/movies" element={
                        <>
                            <Header colorAuth={"navigation__button-color"} colorBurger={"navigation__menu-button_color"}
                                    logoButtonBlack={logoAuthBlack} loggedIn={true}/>
                            <Movies moviesList={moviesList}/>
                            <Footer/>
                        </>
                    }
                    />
                    <Route path="/saved-movies" element={
                        <>
                            <Header colorAuth={"navigation__button-color"} colorBurger={"navigation__menu-button_color"}
                                    logoButtonBlack={logoAuthBlack} loggedIn={false}/>
                            <SavedMovies moviesSave={moviesSave}/>
                            <Footer/>
                        </>
                    }/>
                    <Route path="/profile" element={
                        <>
                            <Header colorAuth={"navigation__button-color"} colorBurger={"navigation__menu-button_color"}
                                    logoButtonBlack={logoAuthBlack} loggedIn={true}/>
                            <Profile/>
                        </>
                    }/>
                    <Route path="/signin" element={<Login/>}/>
                    <Route path="/signup" element={<Register/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
