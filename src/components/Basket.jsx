import { itemsx } from "../data/data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import ShowItem from "./ShowItem";

import "../css/basket.css";


export default function Basket() {
    const navigate = useNavigate();
    let bin = JSON.parse(sessionStorage.getItem("bin")) || [];
    let cates = [];
    const types = new Set();
    let sum = 0;

    function addItem(item) {
        let aux = JSON.parse(sessionStorage.getItem("bin")) || [];
        aux.push(item);
        sum += item.price;
        sessionStorage.setItem("bin", JSON.stringify(aux));
        window.location.reload(false);
    }
    function removeItem(item) {
        let aux = JSON.parse(sessionStorage.getItem("bin")) || [];
        let idx = aux.findIndex(p => p.name == item.name);
        aux.splice(idx, 1);
        sum -= aux[idx].price;
        sessionStorage.setItem("bin", JSON.stringify(aux));
        window.location.reload(false);
    }
    function removeAllItems(item) {
        let aux = JSON.parse(sessionStorage.getItem("bin")) || [];
        while (aux.findIndex(p => p.name == item.name) != -1) {
            aux.splice(aux.findIndex(p => p.name == item.name), 1);
        }
        sessionStorage.setItem("bin", JSON.stringify(aux));
        window.location.reload(false);
    }

    function clearAll() {
        sessionStorage.clear();
        window.location.reload(false);
    }


    function findItems() {
        let last = types.size;
        bin.map((item) => {
            types.add(item.name);
            sum += item.price;
            if (last != types.size) {
                cates.push(item);
            }
            last = types.size;
        });
        console.log(sum);
    }


    function countItems(item) {
        let k = 0;
        console.log(item);
        bin.map((itemx) => {
            if (itemx.name == item.name) {
                k += 1;
            }
        })
        return k;
    }

    return (
        <body>
            {
                findItems()
            }
            {
                console.log(sum)
            }
            <Navbar />

            <div className="basket">
                {bin.length > 0 ?
                    <><h1>Items: {bin.length}</h1><h1>Total: {sum}$</h1>
                        <div className="top-btns">
                            <button class="baskbtn" onClick={() => { clearAll(); }}>Clear all</button>
                            <button class="baskbtn2" onClick={() => { prompt("Enter your card number:");  alert("Thank you for choosing us!"); clearAll(); navigate("/"); }}>Check Out</button>
                        </div>
                    </> : <>  </>
                }
                <div className="basket-items">

                    {console.log("-----")}
                    {
                        bin.length > 0 ?
                            cates.map((item) => <div className="basket-item"><ShowItem item={item} /><p>Quantity: {countItems(item)}</p>
                                <div className="basket-buttons">
                                    <div className="basket-top-buttons">
                                        <button onClick={() => { removeItem(item) }}>-</button>
                                        <button onClick={() => { addItem(item) }}>+</button>
                                    </div>
                                    <button onClick={() => { removeAllItems(item) }}>Remove</button>
                                </div>
                            </div>) : <h1>No items added to the basket</h1>
                    }
                </div>
            </div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            <Footer />
        </body>
    )

}