import React from "react";
import "./footer.css"; 

import logo from "../../assets/Logo__B&W.svg";

function Footer() {
    return(
    <footer className="footer">
        <img src={logo} alt="Kaza logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
    )
}

export default Footer    