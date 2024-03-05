import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import logoAuthBlack from "../../images/logoAuthBlack.svg";
import Header from "../Header/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Movies from "../Movies/Movies";
import moviesApi from "../../utils/MoviesApi";
import SavedMovies from "../SavedMovies/SavedMovies";
import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";

function App() {
    const [errorMessage, setErrorMessage] = useState("");
    const [moviesList, setMoviesList] = useState([]);
    const [cardsMoviesSave, setCardsMoviesSave] = useState([]);
    const [currentUser, setCurrentUser] = useState([{}]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [preloader, setPreloader] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        if (loggedIn) {
            setPreloader(true);
            mainApi.getUser().then(data => {
                setCurrentUser(data);
            })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setPreloader(false);
                });
        }
    }, [loggedIn])

    useEffect(() => {
        if (loggedIn) {
            setPreloader(true);
            moviesApi.getMovies().then(data => {
                setMoviesList(data);
            })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setPreloader(false);
                });
        }
    }, [loggedIn]);
    useEffect(() => {
        tokenCheck();
    }, []);

    const tokenCheck = () => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            setPreloader(true);
            // проверим токен
            auth.getContent().then((res) => {
                if (res) {
                    const userData = {
                        email: res.email,
                        name: res.name,
                        _id: res._id
                    }
                    setCurrentUser(userData)
                    setLoggedIn(true);
                }
            })
                .catch((error) => {
                    console.log(error);
                    setLoggedIn(false);
                })
                .finally(() => {
                    setPreloader(false);
                });
        }
    }

    function handleUpdateUser(data) {
        setPreloader(true);
        mainApi.patchUser(data)
            .then(data => {
                setCurrentUser(data);
                navigate('/profile');
                console.log(errorMessage);
            })
            .catch((err) => {
                if (err) {
                    setErrorMessage("При регистрации пользователя произошла ошибка. Необходимо редактировать все поля.");
                }
                console.log(err);
            })
            .finally(() => {
                setPreloader(false);
            });
    }


    function handelSaveMovie(movie) {
        setPreloader(true);
        mainApi.postSaveMovie(movie)
            .then((newCardMovie) => {
                setCardsMoviesSave([newCardMovie, ...cardsMoviesSave])
                console.log(cardsMoviesSave);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setPreloader(false);
            });
    }

    function handelDeleteMovie(movie) {
        setPreloader(true);
        mainApi.deleteMovie(movie._id)
            .then(() => {
                const newCardsMoviesSave = cardsMoviesSave.filter((item) => {
                    return item._id !== movie._id;
                });
                setCardsMoviesSave(newCardsMoviesSave);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setPreloader(false);
                ;
            });
    }

    React.useEffect(() => {
        if (loggedIn) {
            setPreloader(true);
            mainApi.getSaveMovies()
                .then((data) => {
                    setCardsMoviesSave(data);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    setPreloader(false);
                });
        }
    }, [loggedIn]);

    function handelRegistration({email, password, name}) {
        setPreloader(true);
        auth.register(email, password, name).then((res) => {
            if (res) {
                navigate("/movies", {replace: true});
            }
        })
            .catch((err) => {
                if (err) {
                    setErrorMessage("При регистрации пользователя произошла ошибка.");
                }
                console.log(err)
            })
            .finally(() => {
                setPreloader(false);
            });
    }

    function handelLogin(values) {
        setPreloader(true);
        auth.login(values.email, values.password).then((res) => {
            if (res.token) {
                setLoggedIn(true);
                setCurrentUser({email: values.email});
                navigate("/movies", {replace: true});
            }
        })
            .catch(err => {
                if (err.status === 400 || err.status === 401) {
                    setErrorMessage("Введен неправильный логин или пароль.");
                }
                console.log(err)
            })
            .finally(() => {
                setPreloader(false);
            });
    }

    function signOut() {
        localStorage.removeItem('jwt');
        localStorage.clear();
        setLoggedIn(false);
        navigate('/signin', {replace: true});
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <Routes>
                    <Route path="/" element={
                        preloader ? (
                            <Preloader/>
                        ) : (
                            <>
                                <Header classColor={"color"} loggedIn={loggedIn}/>
                                <Main/>
                                <Footer/>
                            </>
                        )
                    }
                    />
                    <Route path="/movies" element={
                        preloader ? (
                            <Preloader/>
                        ) : (
                            <>
                                <Header colorAuth={"navigation__button-color"}
                                        colorBurger={"navigation__menu-button_color"}
                                        logoButtonBlack={logoAuthBlack} loggedIn={loggedIn}/>
                                <ProtectedRoute loggedIn={loggedIn} moviesList={moviesList}
                                                onClickSaveFilm={handelSaveMovie}
                                                onClickDeleteFilm={handelDeleteMovie} cardsMoviesSave={cardsMoviesSave}
                                                currentUser={currentUser} element={Movies}/>
                                <Footer/>
                            </>
                        )
                    }
                    />
                    <Route path="/saved-movies" element={
                        preloader ? (
                            <Preloader/>
                        ) : (
                            <>
                                <Header colorAuth={"navigation__button-color"}
                                        colorBurger={"navigation__menu-button_color"}
                                        logoButtonBlack={logoAuthBlack} loggedIn={loggedIn}/>
                                <ProtectedRoute loggedIn={loggedIn} onClickDeleteFilm={handelDeleteMovie}
                                                cardsMoviesSave={cardsMoviesSave}
                                                currentUser={currentUser} element={SavedMovies}/>
                                <Footer/>
                            </>
                        )
                    }/>
                    <Route path="/profile" element={
                        preloader ? (
                            <Preloader/>
                        ) : (
                            <>
                                <Header colorAuth={"navigation__button-color"}
                                        colorBurger={"navigation__menu-button_color"}
                                        logoButtonBlack={logoAuthBlack} loggedIn={loggedIn}/>
                                <ProtectedRoute element={Profile} signOut={signOut} user={currentUser}
                                                errorMessage={errorMessage}
                                                onUpdateUser={handleUpdateUser} onErrorMessage={setErrorMessage}
                                                loggedIn={loggedIn}/>
                            </>
                        )}/>
                    <Route path="/signin" element={
                        preloader ? (
                            <Preloader/>
                        ) : (
                            <Login onSignin={handelLogin} errorMessage={errorMessage}
                                   onErrorMessage={setErrorMessage}/>)}/>
                    <Route path="/signup"
                           element={
                               preloader ? (
                                   <Preloader/>
                               ) : (<Register onSignup={handelRegistration} errorMessage={errorMessage}
                                              onErrorMessage={setErrorMessage}/>)}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;
