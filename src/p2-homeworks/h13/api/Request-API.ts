import axios from 'axios'

export const requestAPI = {
    createResponse(success: boolean) {
        const promise = axios.post<ResponseType>(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
        return promise
    }
}

type ResponseType = {
    success: boolean
}