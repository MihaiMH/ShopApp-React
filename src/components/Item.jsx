import { itemsx } from "../data/data";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import "../css/item.css";

export default function Item(){
    const navigate = useNavigate();
    const {name} = useParams();
    console.log(name);
    let obj = {};
    function findItem(){
        let ok = false;
        let n = itemsx.length;
        let i=0;
        while (i<n && ok===false){
            if(itemsx[i].name===name){
                obj = itemsx[i];
                ok = true;
            } else {
                i+=1;
            }
        }
        if(ok===false){
            navigate("/catalogue");
        }
    }
    function addItem(item){
        let aux = JSON.parse(sessionStorage.getItem("bin")) || [];
        aux.push(item);
        sessionStorage.setItem("bin", JSON.stringify(aux));
        window.location.reload(false);
    }

    return(
        <body>
            {
                findItem()
            }
            <Navbar />
            <div className="content">
                <div className="content-text">
                <h1>Name: {obj.name}</h1>
                <h3>Category: {obj.category}</h3>
                <h2>Price: {obj.price}$</h2>
                <p>{obj.description}</p>
                <button onClick={()=>{addItem(obj);}}>Add to cart</button>
                </div>
                <img src = {obj.img_link}/>
            </div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            <Footer />
        </body>
    )
    
}