import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const [bin, setBin] = useState(JSON.parse(sessionStorage.getItem("bin")) || []);
    return (
        < nav class="navbar sticky-top navbar-expand-sm " >
            <Link to="/" class="navbar-brand navmarg txt">Super Shop </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="nav-align navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link txt" >Home </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/catalogue" class="nav-link txt" >Catalogue</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/aboutus" class="nav-link txt" >About Us</Link>
                    </li>
                    <li class="nav-item">
                       <div onClick={()=>{navigate('/basket')}} className="shopCart">
                            <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" />
                            <p>{bin.length}</p>
                       </div>
                    </li>

                </ul>

            </div>
        </nav >
    )


}