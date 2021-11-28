import React from 'react';
import Popup from 'reactjs-popup';
import "./../movieItem/Movieitem.css"
import { IMAGE_780PX } from "./../../constant/index";

type PropsType = {
    id: number
    title: string
    name: string
    overview: string
    backdrop_path: string

}

export const DetailedInformation = (props: PropsType) => (

    <Popup
        trigger={<button className="btn"> More information </button>}
        modal
        nested
    >
        {(close: any) => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="headerPopUp">
                    <h2>{props.name} {props.title} </h2>
                </div>
                <div className="content">
                    <img src={`${IMAGE_780PX}${props.backdrop_path}`} alt="poster_photo" />
                    <p> {props.overview}</p>
                </div>
                <div className="actions">
                    <button
                        className="btn"
                        onClick={() => {
                            console.log('modal closed ');
                            close();
                        }}
                    >
                        Hide
                    </button>
                </div>
            </div>
        )}
    </Popup>
);

