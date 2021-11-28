
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTrendingItems } from "../../api/Api"
import MovieItem from "../../components/movieItem/MovieItem"
import Pagination from "../../components/pagination/Pagination"

import { TrendingItemsType } from "../../reducers/trendingItemsReducer"
import { RootStoreType } from "../../store"


const Trending = () => {
    const dispatch = useDispatch()
    const trendingItems = useSelector<RootStoreType, Array<TrendingItemsType>>(state => state.films.items)
    const isFetching = useSelector<RootStoreType, boolean>(state => state.films.isFetching)
    const totalPages = useSelector<RootStoreType, number>(state => state.films.total_pages)
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        dispatch(getTrendingItems(page))
    }, [dispatch, page])

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    if (isFetching) {
        return (
            <div>...Waiting</div>
        )
    }

    return (


        <div>
            <MovieItem trendingItems={trendingItems} />
            <div>
                <Pagination
                    totalPages={totalPages}
                    page={page}
                    handleChange={handleChange}
                />
            </div>
        </div>

    )
}

export default Trending









