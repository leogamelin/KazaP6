// Fichier JSON contenant les données
import Kasas from "../../data.json";
import React from "react";
import { Link } from "react-router-dom";
// style du composant
import "../../components/Cards/cards.css";

const Cards = () => {
  return (
    <div className="cards__container">
        <ul className="cards">
      {Kasas.map((kaza, index) => (
        <li className="card" key={kaza.id}>
          <Link to={`/logement/${kaza.id}`} key={kaza.id}>
            <img src={kaza.cover} alt={kaza.title} />
            <span>{kaza.title}</span>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Cards;