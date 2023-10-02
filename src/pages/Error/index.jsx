import React from "react"; 
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../Error/error.css";


function Error() {
    return (
      <div className="error__container">      
      <Header/>
        <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d'accueil</a>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Error