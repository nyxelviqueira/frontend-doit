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
    <section className="service-container-container">
      <div className="service-container">
        <Link to={`/services/${service.id}`}>
          <h3 className="service-title">{service.title}</h3>
        </Link>

        <h4 className="service-category">{service.category}</h4>

        <p className="service-description">{service.description}</p>

        <h5 className="service-realized">{done}</h5>

        <a
          className="service-file-link"
          href={`${process.env.REACT_APP_BACKEND}/${service.file}`}
          download
        >
          Previsualizar archivo adjunto
        </a>

        <p className="service-createdAt">
          By <Link to={`/users/${service.idUser}`}>{service.username} </Link> on{" "}
          {new Date(service.createdAt).toLocaleString()}
        </p>
      </div>
    </section>
  );
};
