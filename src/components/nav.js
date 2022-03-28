import React from "react";
import ReactDOM from "react-dom";
import NavImg from "../images/nav-image.png"



export default function Nav(){
    return (
        <nav>
            <img src={NavImg}></img>
            <h1>my travel journal</h1>
        </nav>
        
    )
   
}