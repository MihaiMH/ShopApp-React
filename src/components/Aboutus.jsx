import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "../css/error404.css"

export default function Aboutus() {
    const navigate = useNavigate();
    return (
        <body>
            <Navbar />
            <div className="error">
                <h1>Mihai Mihaila</h1>
                <a href="https://www.linkedin.com/in/mihai-mihaila-5a34ba242/"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQHwyob0RJK_Jw/profile-displayphoto-shrink_800_800/0/1655550434264?e=1672876800&v=beta&t=6b-3KN4u5-o4b34rN8_pQ-WQDOdSD0A7_MowiUr4BYw"/>
                </a>
                <button onClick={() => { navigate("/") }}>Go back home :D</button>
            </div>
            <Footer />
        </body>
    )
}