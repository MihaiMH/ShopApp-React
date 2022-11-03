import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

import '../css/catalogue.css';
import '../css/home.css';


export default function Home() {
    const navigate = useNavigate();
    return (
        <body>
            <Navbar />
            <div className="container-fluid">

                <div className="top">
                    <div className="top-text">
                        <h1>Best shop in the world!</h1>
                        <p>See our catalogue!</p>
                        <button onClick={() => { navigate("/catalogue"); }}> See it now! </button>
                    </div>
                    <Footer />
                </div>
            </div>      
        </body>

    )
}