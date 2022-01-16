import axios from 'axios'

export const requestAPI = {
    createResponse(success: boolean) {
        console.log(success)
        const promise = axios.post<ResponseType>(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
        return promise
    }

}

type ResponseType = {
    success: boolean
}