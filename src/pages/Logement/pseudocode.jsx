import { useParams, Navigate } from "react-router-dom";
import Kasas from "../../data.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Stars from "../components/Stars";
import Collapse from "../../components/Collapse";
// import HostName from "../components/HostName";
// import "../styles/Appartment.css";
// import Tags from "../components/Tags";
import Carrousel from "../../components/Carrousel";

const Appartment = () => {
  // récupération de l'id
  const appartmentId = useParams();
  // recherche de l'objet correspondant dans la base de données
  const appartArray = Kasas.filter((k) => k.id === appartmentId.id);
  // Contrôle : l'id correspond à un et un seul appartement ?
  const appartment = appartArray.length === 1 ? appartArray[0] : null;
  // cherche l'index correspondant à l'image de présentation dans le tableau des images
  const cover = (array, string) => {
    return array.indexOf(string) === -1 ? 0 : array.indexOf(string);
  };

  return appartment ? (
    // si l'appartement existe, affichage
    <div className="display-footer">
      <div className="main-container">
        <Header />
        <Carrousel
          pictures={appartment.pictures}
          // cover renvoi l'index de l'image de présentation dans le tableau des images
          cover={cover(appartment.pictures, appartment.cover)}
          // alt sert pour créer le texte alternatif des images du carrousel
          alt={appartment.title}
        />
        <div className="appartment-presentation">
          <div className="appartment-title">
            <h1>{appartment.title}</h1>
            <p>{appartment.location}</p>
            {/* <Tags tags={appartment.tags} /> */}
          </div>
          <div className="appartment-adds">
            {/* <HostName
              name={appartment.host.name}
              picture={appartment.host.picture}
            />
            <Stars rating={appartment.rating} /> */}
          </div>
        </div>
        <div className="twoCollapses">
          <Collapse
            categorie="appartment-collapse"
            title="Description"
            content={Array.of(appartment.description)}
          />
          <Collapse
            categorie="appartment-collapse"
            title="Equipements"
            content={appartment.equipments}
          />
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    // renvoi vers la page d'erreur
    <Navigate to="/error-page" />
  );
};

export default Appartment;



// Collapse ancien code 

import React from "react";
import "./collapse.css"; 

import arrowDown from "../../assets/Arrow__Down.svg";

const Collapse = ({ categorie, title, content }) => {
    const stateClick = (e) => {
  
      if (!e.currentTarget.nextSibling.classList.contains("show")) {
        e.currentTarget.nextSibling.classList.add("show"); // nextSibling = card__info
        e.currentTarget.lastChild.classList.add("rotate"); // lastChild = icon
      } else {
        e.currentTarget.nextSibling.classList.remove("show");
        e.currentTarget.lastChild.classList.remove("rotate");
      }
  
    };
  
    return (
      <div className={`${categorie}__informations__card`}>
          <div className={`${categorie}__informations__card__title`} onClick={stateClick}>
              {title}  
              <img src={ arrowDown } alt="Dérouler le menu" />
          </div>
          
          {Array.isArray(content) ? ( // Si c'est un objet = équipement
            <>
              <ul className={`${categorie}__informations__card__info`}>
                {content.map((equipment, index) => (
                  <li key={index} className={`${categorie}__informations__card__equipment`}>
                    {equipment}
                  </li>
                ))}
              </ul>
            </>
          ) : ( // le reste
            <><p className={`${categorie}__informations__card__info`}>{content}</p></>
          )}
      </div>
    );
  };
  
  export default Collapse;