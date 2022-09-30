import "./service.css";
import { Link } from "react-router-dom";

/* import devs from '../homePage/assets/Programming and Development.png';
import business from './assets/Business.png';
import admin from './assets/Administrative and Secretary.png';
import design from './assets/Design and art.png';
import digital from './assets/Digital Marketing.png'
import music from './assets/Music and Audio.png';
import various from './assets/Various.png';
import video from './assets/Video and Animation.png';
import writing from './assets/Writing and Translation.png'; */

export const Service = ({ service }) => {
  let done;

  if (service.realized === 1) {
    done = "Done";
  } else {
    done = "Not Done!";
  }

  return (
    <article>
      {/* Creo que queda mejor sin foto */}
      {/* <img src={devs} alt="Icono" className="logo" /> */}
      <Link to={`/services/${service.id}`}>
        <h2>{service.title}</h2>
      </Link>
      <h3>
        {service.category} -{" "}
        <Link to={`/users/${service.idUser}`}>{service.username}</Link>
      </h3>
      <p>{service.description}</p>

      <p>{done}</p>

      <p>
        By {service.username} on {new Date(service.createdAt).toLocaleString()}
      </p>
    </article>
  );
};
