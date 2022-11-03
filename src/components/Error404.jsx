import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "../css/error404.css"

export default function Error404() {
    const navigate = useNavigate();
    return (
        <body>
            <Navbar />
            <div className="error">
                <h1>Ooops! Seems like you got lost!</h1>
                <p>Let us help you:</p>
                <button onClick={() => { navigate("/") }}>Go back home :D</button>
            </div>
            <Footer />
        </body>
    )
}