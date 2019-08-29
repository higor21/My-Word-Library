const INITIAL_STATE = {
    contentList: [
        {word: "listen", translations: ["escutar"], meanings: ["meanging1","meaning2"], examples: ["translation1","translation2"]},
        {word: "hard", translations: ["difícil"], meanings: ["meanging1","meaning2"], examples: ["translation1","translation2"]},
        {word: "gap", translations: ["lacuna","buraco"]/* , meanings: ["meanging1","meaning2"] */, examples: ["translation1","translation2"]},
        {word: "title", translations: ["título"], meanings: ["meanging1","meaning2"], examples: ["translation1","translation2"]}
    ]
}

export default function(state = INITIAL_STATE, action){
    return state
}