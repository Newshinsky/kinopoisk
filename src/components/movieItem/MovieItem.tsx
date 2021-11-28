import Badge from '@mui/material/Badge';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCredits } from '../../api/Api';
import { TrendingItemsType } from "../../reducers/trendingItemsReducer";
import { RootStoreType } from '../../store';
import { DetailedInformation } from '../popup/DetailedInformation';
import { IMAGE_300PX } from "./../../constant/index";
import "./Movieitem.css";

type PropsType = {
    trendingItems: Array<TrendingItemsType>
}


const MovieItem = (props: PropsType) => {

    const [id, setId] = useState(1)
    const [mediaType, setMediaType] = useState("tv")
    const dispatch = useDispatch()
    const credit = useSelector<RootStoreType, any>(state => state.credits)
    useEffect(() => {
        dispatch(getCredits(mediaType, id))
    }, [dispatch, mediaType, id])



    function handleChange(mediaType: string, id: number) {
        setMediaType(mediaType)
        setId(id)
    }

    console.log(credit)

    return (
        <div className="item">
            {props.trendingItems.map(
                (e: TrendingItemsType) =>
                    <div onClick={() => { handleChange(e.media_type!, +e.id!) }} className="card">
                        <Badge
                            sx={{ "& .MuiBadge-badge": { fontSize: 15, height: 50, width: 50, borderRadius: 50, left: 100 } }}
                            badgeContent={e.vote_average}
                            color={e.vote_average! < 7 ? "error" : "success"}
                        >
                        </Badge>
                        <div className="cardPhoto">
                            <img src={`${IMAGE_300PX}${e.poster_path}`} alt="poster_photo" />
                        </div>
                        <div className="cardName">
                            <h3> {e.name} {e.title} </h3>
                        </div>
                        <div className="cardInfo">
                            <div className={e.media_type === "tv" ? "tvIcon " : "movieIcon"} > {e.media_type} </div>
                            <div className="dateIcon"> {e.release_date} {e.first_air_date}</div>
                        </div>
                        <DetailedInformation
                            name={e.name!}
                            title={e.title!}
                            id={+e.id!}
                            overview={e.overview!}
                            backdrop_path={e.backdrop_path!}
            
                        />
                    </div>
            )
            }
        </div >
    )
}

export default MovieItem
