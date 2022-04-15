import axios from 'axios'

const API_URL = 'https://recepiv1.herokuapp.com/'

export const register = (username: string, email: string, password: string) => {
    return axios.post(API_URL + 'register', {
        username,
        email,
        password,
    })
}

export const login = (email: string, password: string) => {
    return axios
        .post(API_URL + 'login', {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                // eslint-disable-next-line no-console
                console.log(response.data);
                
                localStorage.setItem('user', JSON.stringify(response.data))
            }

            return response.data
        })
}

export const logout = () => {
    localStorage.removeItem('user')
}

export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user')
    if (userStr) return JSON.parse(userStr)

    return null
}
