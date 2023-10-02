import React from "react";
import "./banner.css"; 

import imageBannerHome from "../../assets/Banner__Home.png";

function Banner({ imageSource, showText = true, variant }) {
    const bannerClass = variant === "home" ? "banner__home" : "banner";
    
    return (
        <div className={bannerClass}> 
            <img className="banner__image" src={imageSource} alt="Nature" />
            {/* Si showText est vrai, alors le texte s'affiche */} 
            {showText && <p className="banner__text">Chez vous, partout et ailleurs</p>}
        </div>
    );
}

export default Banner;
