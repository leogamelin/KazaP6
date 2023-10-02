import React from "react";

// import des composants
import Header from "../../components/Header";
import Banner from "../../components/Banner";  
import Footer from "../../components/Footer";  
import Cards from "../../components/Cards"; 

import imageBannerHome from "../../assets/Banner__Home.png";


function Home() {
  return (
    <div className="home">
       <Header/>
       <Banner imageSource={imageBannerHome} variant="home" />
       <Cards/>
       <Footer/>
    </div>
  );
}

export default Home;
