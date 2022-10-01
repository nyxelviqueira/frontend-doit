import "./service.css";
import { Link } from "react-router-dom";

export const Service = ({ service }) => {
  let done;

  if (service.realized === 1) {
    done = "Done";
  } else {
    done = "Not Done!";
  }

  return (
    <article>
      <Link to={`/services/${service.id}`}>
        <h2>{service.title}</h2>
      </Link>
      <h3>
        {service.category} -{" "}
        <Link to={`/users/${service.idUser}`}>{service.username}</Link>
      </h3>
      <p>{service.description}</p>

      <p>{done}</p>

      <a href={`${process.env.REACT_APP_BACKEND}/${service.file}`} download>
        Previsualizar archivo adjunto
      </a>

      <p>
        By {service.username} on {new Date(service.createdAt).toLocaleString()}
      </p>
    </article>
  );
};
