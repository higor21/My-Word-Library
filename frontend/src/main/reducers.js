import { combineReducers } from 'redux'

import WordsPanelReducer from '../wordsPanel/wordsPanelReducer'

const rootReducer = combineReducers({
    wordsPanel: WordsPanelReducer
})

export default rootReducer