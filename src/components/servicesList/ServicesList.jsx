import { Service } from "../service/Service";
import "./servicesList.css";

export const ServicesList = ({ services }) => {
  return services.length ? (
    <ul className="services-list">
      {services.map((service) => {
        console.log(service.description);
        console.log(service.realized);
        console.log(service.title);
        return <Service key={service.id} service={service}></Service>;
      })}
    </ul>
  ) : (
    <p>There are not created services</p>
  );
};
