import React from "react";
import ReactDOM from "react-dom";
import Location from "../images/location.png"

export default function Content(props) {
    return(
            <article>
                <img className="image" src={props.imageUrl}></img>
                <div className="img-text">
                    <img className="location-img" src={Location}></img>
                    <span className="location">{props.location}</span>
                    <a className="map" href={props.googleMapsUrl}>View on Google Maps</a>
                    <h2 className="title">{props.title}</h2>
                    <span className="start">12 Jan, 2021 - </span>
                    <span className="end">{props.startDate}</span>
                    <p className="description">{props.description}</p>
                </div>    
            </article>
    )
}
