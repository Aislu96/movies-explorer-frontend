import {MOVIES_URL} from "./constants";

class MoviesApi {
    #url;
    #headers;

    constructor({url, headers}) {
        this.#url = url;
        this.#headers = headers;
    }

    _sendRequest(url, options) {
        return fetch(url, options)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Что-то пошло не так...')
            })
    }


    getMovies() {
        return this._sendRequest(`${this.#url}`, {
            method: "GET",
            headers: this.#headers,
        });
    }
}

const moviesApi = new MoviesApi({
        url: MOVIES_URL,
        headers: {
            'Content-Type': "application/json"
        }
    }
);

export default moviesApi;
