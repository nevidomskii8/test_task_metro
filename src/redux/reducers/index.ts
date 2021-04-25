import { combineReducers } from 'redux'
import { MovieReducer } from './shoppingReducer'

const rootReducer = combineReducers({
    movieReducer: MovieReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }