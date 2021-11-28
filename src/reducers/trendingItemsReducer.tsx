import { ActionsType } from "../App"

const SET_FILMS = "SET_FILMS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES"


export type TrendingItemsType = {
    adult?: boolean
    first_air_date?: string
    backdrop_path: string
    genre_ids?: Array<number>
    name?: string
    id?: number
    media_type?: "movie" | "tv"
    original_language?: string
    original_title?: string
    origin_country?: Array<string>
    original_name?: string
    overview?: string
    popularity?: number
    poster_path?: string
    release_date?: string
    title?: string
    video?: false
    vote_average?: number
    vote_count?: number
}

export type defaultStateType = {
    items: Array<TrendingItemsType>,
    isFetching: boolean,
    total_pages: number,
    total_results: number,
}

const defaultState = {
    items: [{
        adult: false,
        backdrop_path: "/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
        genre_ids: [878, 28, 12],
        id: 580489,
        media_type: "movie",
        original_language: "en",
        original_title: "Venom: Let There Be Carnage",
        overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        popularity: 4141.331,
        poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        release_date: "2021-09-30",
        title: "Venom: Let There Be Carnage",
        video: false,
        vote_average: 6.8,
        vote_count: 2039,
    }, {
        backdrop_path: "/ikN8ABD9pXHuW4JFqTE,Hr3ae8rd.jpg",
        first_air_date: "2021-11-19",
        genre_ids: [18, 80, 9648, 10765],
        id: 106651,
        media_type: "tv",
        name: "Hellbound",
        origin_country: ['KR'],
        original_language: "ko",
        original_name: "지옥",
        overview: "Unearthly beings deliver bloody condemnations, sending individuals to hell and giving rise to a religious group founded on the idea of divine justice.",
        popularity: 273.255,
        poster_path: "/5NYdSAnDVIXePrSG2dznHdiibMk.jpg",
        vote_average: 8,
        vote_count: 71,
    }],
    isFetching: false,
    total_pages: 1,
    total_results: 1,
}




const TrendingItemsReducer = (state: any = defaultState, action: ActionsType) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state, items: action.payload
            }
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.payload
            }
        case SET_TOTAL_PAGES:
            return {
                ...state, total_pages: action.payload
            }
        default:
            return state
    }
}


export const setTrendingItems = (films: Array<TrendingItemsType>) => {
    return {
        type: SET_FILMS,
        payload: films
    }
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: SET_IS_FETCHING,
        payload: isFetching
    }
}
export const setTotalPages = (totalPages: number) => {
    return {
        type: SET_TOTAL_PAGES,
        payload: totalPages
    }
}


export default TrendingItemsReducer

