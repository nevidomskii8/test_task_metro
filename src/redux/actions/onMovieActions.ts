import axios from "axios"
import { Dispatch } from "react"
import { BASE_URL, APY_KEY } from "../../utils"
import { PopularMoviesModel, MovieDetailModel } from "../models"

export interface GetPopularMovies {
    readonly type: "GET_POPULAR_MOVIES",
    payload: PopularMoviesModel
}
export interface GeDetailMovie {
    readonly type: "GET_DETAIL_MOVIE",
    payload: MovieDetailModel
}
export interface ArrorAction {
    readonly type: "ON_ERROR",
    payload: any
}

export type MovieAction = GetPopularMovies | GeDetailMovie | ArrorAction

export const onGetCollactionMovies = (ganre: string) => {
    return async (dispatch: Dispatch<MovieAction>) => {
        try {
            const response = await axios.get<PopularMoviesModel>(`${BASE_URL}movie/${ganre}?api_key=${APY_KEY}&language=ru-RUS `)
            if (!response) {
                dispatch({
                    type: "ON_ERROR",
                    payload: "Availability error"
                })
            } else {
                dispatch({
                    type: "GET_POPULAR_MOVIES",
                    payload: response.data
                })
            }
        } catch (e) {
            dispatch({
                type: "ON_ERROR",
                payload: e
            })
        }
    }
}
export const onGetDetailMovie = (id: number) => {
    return async (dispatch: Dispatch<MovieAction>) => {
        try {
            const response = await axios.get<MovieDetailModel>(`${BASE_URL}movie/${id}?api_key=${APY_KEY}&language=ru-RUS `)
            if (!response) {
                dispatch({
                    type: "ON_ERROR",
                    payload: "Availability error"
                })
            } else {
                dispatch({
                    type: "GET_DETAIL_MOVIE",
                    payload: response.data
                })
            }
        } catch (e) {
            dispatch({
                type: "ON_ERROR",
                payload: e
            })
        }
    }
}
