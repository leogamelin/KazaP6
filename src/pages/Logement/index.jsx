import { useParams, Navigate } from "react-router-dom";
import Kasas from "../../data.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Stars from "../../components/Stars";
import Collapse from "../../components/Collapse";
import Host from "../../components/Host";
import Tags from "../../components/Tags";
import Carrousel from "../../components/Carrousel";
import "../Logement/logement.css";

const Logement = () => {
  // récupération de l'id
  const logementId = useParams();
  // recherche de l'objet correspondant dans la base de données
  const logementArray = Kasas.filter((k) => k.id === logementId.id);
  // contrôle : l'id correspond à un et un seul logement ?
  const logement = logementArray.length === 1 ? logementArray[0] : null;
  // cherche l'index correspondant à l'image de présentation dans le tableau des images
  const cover = (array, string) => {
    return array.indexOf(string) === -1 ? 0 : array.indexOf(string);
  };

  // Si logement est null, on retourne null pour ne rien afficher.
  if (!logement) return null;

  return (
    <div className="container">
      <Header />
      <div className="logement__container">
        <Carrousel
            pictures={logement.pictures}
            // cover renvoi l'index de l'image de présentation dans le tableau des images
            cover={cover(logement.pictures, logement.cover)}
            alt={logement.title}
        />
        <div className="logement__presentation">
          <div className="logement__titre">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <Tags tags={logement.tags} />
          </div>
          <div className="logement__host">
            <Host name={logement.host.name} picture={logement.host.picture} />
            <Stars rating={logement.rating} />
          </div>
        </div>
        <div className="about__informations">
          <Collapse
            className="about__logement"
            categorie="about" title="Description"
            content={Array.of(logement.description)}
          />
          <Collapse
            className="about__logement"
            categorie="about" title="Equipements"
            content={logement.equipments}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Logement;
