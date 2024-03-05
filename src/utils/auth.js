export const BASE_URL = 'https://api.movies.kharisova.nomoredomainsmonster.ru';

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email,name, password})
    }).then((response) => {
        try {
            if (response.status === 201) {
                return response.json();
            }
            return Promise.reject(response);
        } catch (e) {
            return (e)
        }
    })
};


export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    }).then((response) => {
        try {
            if (response.status === 200) {
                return response.json();
            }
            return Promise.reject(response);
        } catch (e) {
            console.log(e)
            return (e)
        }
    }).then((res) => {
        if (res.token) {
            localStorage.setItem('jwt', res.token);
            return res;
        } else {
            return;
        }
    })
};

export const getContent = () => {
    const token = localStorage.getItem('jwt');
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(res => res.json())
        .then(data => data)
}
