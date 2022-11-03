import { itemsx } from "../data/data";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ShowItem from "./ShowItem";

import '../css/catalogue.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { get, makeArray } from "jquery";
import { useState } from "react";

export default function Catalogue() {

    const [bin, setBin] = useState(JSON.parse(sessionStorage.getItem("bin")) || []);
  


    function getItems() {
        let arr = itemsx;
        return itemsx;
    }

    const types = new Set();
    const navigate = useNavigate();
    let cates = [];
    const [items, setItems] = useState(getItems().concat());
    const [show, setShow] = useState([]);
    const [sortc, setSortC] = useState(false);
    const [c, setC] = useState("All");
    const [p, setP] = useState(0);
    const [text, setText] = useState("All, No order")

    function addItem(item){
        let aux = JSON.parse(sessionStorage.getItem("bin")) || [];
        aux.push(item);
        sessionStorage.setItem("bin", JSON.stringify(aux));
        window.location.reload(false);
    }

    function findTypes() {
        let last = types.size;
        let aux = [];
        cates.push("All");
        items.map((item) => {
            types.add(item.category);
            if (last != types.size) {
                cates.push(item.category);
            }
            last = types.size;
        });
    }


    function compare(arr, st) {
        let aux;
        console.log(arr);
        console.log(st);
        if (st == 0) {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - 1; j++) {
                    console.log(arr[j]);
                    if (arr[j].price > arr[j + 1].price) {
                        aux = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = aux;
                    }
                }
            }
        } else {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - 1; j++) {
                    if (arr[j].price < arr[j + 1].price) {
                        aux = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = aux;
                    }
                }
            }
        }
        console.log(arr);
        return arr;
    }

    function sortC(categ, price) {
        setC(categ); setP(price);
        let str = "";
        if (categ === "All") {
            setItems(getItems().concat());
            str = "All,";
            if (price === 0) {
                str += " No order";
            }
            if (price === 1) {
                setItems(compare(items, 0));
                str += " Low to High Price";
            } else if (price === 2) {
                setItems(compare(items, 1));
                str += " High to Low Price";
            }
            setText(str);
            setSortC(false);
        } else {
            str = categ + ",";
            let aux = [];
            setItems(getItems().concat());
            items.map((item) => {
                if (item.category === categ) {
                    aux.push(item);
                }
            })

            if (price === 0) {
                str += " No order";
                setShow(aux);
            } else
                if (price === 1) {
                    setShow(compare(aux, 0));
                    str += " Low to High Price";
                } else if (price === 2) {
                    setShow(compare(aux, 1));
                    str += " High to Low Price";
                }
            setText(str);
            setSortC(true);
        }

    }






    return (

        <body>
            {
                findTypes()
            }

            
            <div className="container-fluid">
            <Navbar />
                <div className="sort">
                    <p>{text}</p>
                    <div className="sort-right">
                        <div className="sort-category">
                            <p>Filter by: </p>
                            <div className="dropdowns">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Category
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {
                                            cates.map((type) => <Dropdown.Item onClick={() => { sortC(type, p); }}>{type}</Dropdown.Item>)
                                        }

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="sort-category">
                                <p>Sort by: </p>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Price
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => { sortC(c, 0); }}>Reset</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { sortC(c, 1); }}>Low to High</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { sortC(c, 2); }}>High to Low</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items">
                    {
                        sortc == false ?
                            items.map((item) => <div className="item" ><ShowItem item={item} /><button onClick={()=>{addItem(item);}}>Add to cart</button></div>) :
                            show.map((item) => <div className="item"><ShowItem item={item} /><button onClick={()=>{addItem(item);}}>Add to cart</button></div>)

                    }

                </div>
                <div className="space"></div>
            </div>
            <Footer />
        </body >
    )
}