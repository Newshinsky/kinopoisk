import axios from "axios"
import { Dispatch } from "react"
import { ActionsType } from "../App"
import { setCredits } from "../reducers/creditReducer"
import { setIsFetching, setTotalPages, setTrendingItems } from "../reducers/trendingItemsReducer"




export const getTrendingItems = (page: number = 1) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=608329abc630183c887c6609a400ceab&page=${page}`)
        dispatch(setTrendingItems(response.data.results))
        dispatch(setTotalPages(response.data.total_pages))
        dispatch(setIsFetching(false))
    }
}


export const getCredits = (media_type: string, id: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        const response = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=608329abc630183c887c6609a400ceab&language=en-US`)
        dispatch(setCredits(response.data))
    }
}
