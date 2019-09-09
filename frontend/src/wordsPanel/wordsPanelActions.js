import axios from 'axios'

const BASE_URL = "http://localhost:3000"

export function getWords(idUser){
    const request = axios.get(`${BASE_URL}/user/${idUser}/words`)
    return {
        type: 'WORDS_FETCHED',
        payload: request
    }
}