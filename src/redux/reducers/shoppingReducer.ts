import { MovieAction } from "../actions";
import { MovieDetailModel, MoviesState, PopularMoviesModel } from "../models";

const initialState = {
    moviesList: {} as PopularMoviesModel,
    movieItem: {} as MovieDetailModel
};

const MovieReducer = (state: MoviesState = initialState, action: MovieAction) => {

    switch (action.type) {
        case "GET_POPULAR_MOVIES":
            return {
                ...state,
                moviesList: action.payload
            };
        case 'GET_DETAIL_MOVIE':
            return {
                ...state,
                movieItem: action.payload
            };
        default:
            return state;
    }
};


export { MovieReducer };