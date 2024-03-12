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
import {
    ERROR_EDITING,
    ERROR_REGISTRATION,
    MESSAGE_SUCCESS,
    STATUS_BAD_REQUEST,
    STATUS_UNAUTHORIZED,
} from "../../utils/constants";

function App() {
    const loggedInSave = JSON.parse(localStorage.getItem('loggedIn'))
    const [errorMessage, setErrorMessage] = useState("");
    const [moviesList, setMoviesList] = useState([]);
    const [cardsMoviesSave, setCardsMoviesSave] = useState([]);
    const [currentUser, setCurrentUser] = useState([{email: '', name: '', _id: ''}]);
    const [loggedIn, setLoggedIn] = useState(loggedInSave || false);
    const [preloader, setPreloader] = useState(false);
    const [cardDelete, setCardDelete] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            setPreloader(true);
            mainApi.getUser().then(data => {
                setLoggedIn(true);
                localStorage.setItem('loggedIn', JSON.stringify(true));
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
                    // setLoggedIn(true);
                    const userData = {
                        email: res.email,
                        name: res.name,
                        _id: res._id
                    }
                    setCurrentUser(userData);
                }
            })
                .catch((error) => {
                    console.log(error);
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
                setCurrentUser({email: data.email, name: data.name});
                navigate('/profile');
                setErrorMessage(MESSAGE_SUCCESS);
            })
            .catch((err) => {
                if (err) {
                    setErrorMessage(ERROR_EDITING);
                }
            })
            .finally(() => {
                setPreloader(false);
            });
    }


    function handelSaveMovie(movie) {
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
        mainApi.deleteMovie(movie._id).then(() => {
            const newCardsMoviesSave = cardsMoviesSave.filter((item) => {
                return item._id !== movie._id;
            });
            setCardsMoviesSave(newCardsMoviesSave);
            setCardDelete(movie._id);
        })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setPreloader(false);
            });
    }

    React.useEffect(() => {
        if (loggedIn) {
            setPreloader(true);
            mainApi.getSaveMovies().then((data) => {
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
                handelLogin({email: res.email, password});
            }
        })
            .catch((err) => {
                if (err) {
                    setErrorMessage(ERROR_REGISTRATION);
                }
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
                localStorage.setItem('loggedIn', JSON.stringify(true));
                setCurrentUser({email: values.email});
                navigate("/movies", {replace: true});
            }
        })
            .catch(err => {
                if (err.status === STATUS_BAD_REQUEST || err.status === STATUS_UNAUTHORIZED) {
                    setErrorMessage("Введен неправильный логин или пароль.");
                }
            })
            .finally(() => {
                setPreloader(false);
            });
    }

    function signOut() {
        setLoggedIn(false);
        navigate("/", {replace: true});
        localStorage.removeItem('jwt');
        localStorage.clear();
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <Routes>
                    <Route path="/" element={preloader ? (<Preloader/>) : (
                        <>
                            <Header classColor={"color"} loggedIn={loggedIn}/>
                            <Main/>
                            <Footer/>
                        </>)}
                    />
                    <Route path="/movies" element={preloader ? (<Preloader/>) : (
                            <>
                                <Header colorAuth={"navigation__button-color"}
                                        colorBurger={"navigation__menu-button_color"} logoButtonBlack={logoAuthBlack}
                                        loggedIn={loggedIn}/>
                                <ProtectedRoute loggedIn={loggedIn} moviesList={moviesList}
                                                onClickSaveFilm={handelSaveMovie}
                                                onClickDeleteFilm={handelDeleteMovie}
                                                cardsMoviesSave={cardsMoviesSave}
                                                element={Movies}/>
                                <Footer/>
                            </>)}
                    />
                    <Route path="/saved-movies" element={preloader ? (<Preloader/>) : (
                        <>
                            <Header colorAuth={"navigation__button-color"} colorBurger={"navigation__menu-button_color"}
                                    logoButtonBlack={logoAuthBlack} loggedIn={loggedIn}/>
                            <ProtectedRoute loggedIn={loggedIn} moviesList={cardsMoviesSave}
                                            cardsMoviesSave={cardsMoviesSave}
                                            onClickDeleteFilm={handelDeleteMovie}
                                            element={SavedMovies} cardDelete={cardDelete}
                                            setCardDelete={setCardDelete}/>
                            <Footer/>
                        </>)}
                    />
                    <Route path="/profile" element={preloader ? (<Preloader/>) : (
                        <>
                            <Header colorAuth={"navigation__button-color"} colorBurger={"navigation__menu-button_color"}
                                    logoButtonBlack={logoAuthBlack} loggedIn={loggedIn}/>
                            <ProtectedRoute element={Profile} signOut={signOut} errorMessage={errorMessage}
                                            onUpdateUser={handleUpdateUser} onErrorMessage={setErrorMessage}
                                            loggedIn={loggedIn}/>
                        </>)}
                    />
                    {!loggedIn && <Route path="/signin" element={preloader ? (<Preloader/>) : (
                        <Login onSignin={handelLogin} errorMessage={errorMessage}
                               onErrorMessage={setErrorMessage}/>)}/>}
                    {!loggedIn && <Route path="/signup" element={preloader ? (<Preloader/>) : (
                        <Register onSignup={handelRegistration} errorMessage={errorMessage}
                                  onErrorMessage={setErrorMessage}/>)}/>}
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;
