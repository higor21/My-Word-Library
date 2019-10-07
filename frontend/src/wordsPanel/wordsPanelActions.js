import axios from 'axios'

const BASE_URL = "http://localhost:3000"

export function getWords(idUser, word = null, translate = null, meaning = null, qty = null){
    const request = axios.get(`${BASE_URL}/user/${idUser}/words?` + 
        (word ? `search=${word}` : "") + 
        (translate ? `&translate=${translate}` : "") + 
        (meaning ? `&meaning=${meaning}` : "") + 
        (qty ? `&qty=${qty}` : "")
    )
    return {
        type: 'WORDS_FETCHED',
        payload: request
    }
}