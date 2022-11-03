import { useNavigate } from "react-router-dom";
import { itemsx } from "../data/data";
import { useState } from "react";
import Catalogue from "./Catalogue";

export default function ShowItem({ item }) {
    const navigate = useNavigate();
    let name = item.name;
    return (
        <>
            <img src={item.img_link} onClick={() => { navigate("/item/" + item.name) }}/>
            <h3 onClick={() => { navigate("/item/" + item.name) }}>{item.name}</h3>
            <p onClick={() => { navigate("/item/" + item.name) }}>{item.category}</p>
            <h4 onClick={() => { navigate("/item/" + item.name) }}>{item.price} $</h4>
        </>
    )
}