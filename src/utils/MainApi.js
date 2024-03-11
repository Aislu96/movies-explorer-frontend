import {BASE_URL} from "./constants";

class MainApi {
    #url;

    constructor({url}) {
        this.#url = url;
    }

    _sendRequest(url, options) {
        return fetch(url, options)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
    }

    getUser() {
        const token = localStorage.getItem('jwt');
        return this._sendRequest(`${this.#url}/users/me`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': "application/json"
            },
        });
    }

    patchUser(data) {
        const token = localStorage.getItem('jwt');
        return this._sendRequest(`${this.#url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        });
    }

    postSaveMovie(data) {
        const token = localStorage.getItem('jwt');
        return this._sendRequest(`${this.#url}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co/${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        });
    }

    getSaveMovies() {
        const token = localStorage.getItem('jwt');
        return this._sendRequest(`${this.#url}/movies`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': "application/json"
            },
        });
    }

    deleteMovie(_id) {
        const token = localStorage.getItem('jwt');
        return this._sendRequest(`${this.#url}/movies/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': "application/json"
            },
        });
    }
}

const mainApi = new MainApi({
    url: BASE_URL,
});

export default mainApi;
