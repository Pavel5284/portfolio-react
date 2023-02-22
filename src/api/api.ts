import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:
   'https://gmail-nodejs-lime.vercel.app/',
       /* 'http://localhost:3010',*/

})


export type FormType = {
    name: string
    email: string
    subject: string
    message: string
}


export const formAPI = {
    send(data: FormType) {
        return axiosInstance.post('sendMessage', data)
    },
}
