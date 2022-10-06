import "./service.css";
import { Link } from "react-router-dom";

export const Service = ({ service }) => {
  let done;
  if (service.realized === 1) {
    done = "Done!";
  } else {
    done = "Not done yet";
  }

  return (
    <section className="service-container-container">
      <div className="service-container">
        <Link to={`/services/${service.id}`}>
          <h1 className="service-title">{service.title}</h1>

          <h3 className="service-category">{service.category}</h3>

          <p className="service-description">{service.description}</p>
        </Link>

        <h5 className="service-realized">{done}</h5>

        <a
          className="service-file-link"
          href={`${process.env.REACT_APP_BACKEND}/${service.file}`}
        >
          preview file
        </a>

        <p className="service-createdAt">
          By <Link to={`/users/${service.idUser}`}>{service.username} </Link> on{" "}
          {new Date(service.createdAt).toLocaleString()}
        </p>
      </div>
    </section>
  );
};
