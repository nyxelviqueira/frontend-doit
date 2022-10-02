import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";
import { Service } from "../service/Service";

export const FilterServicesPage = () => {
  const { category } = useParams();

  const { services, loading, error } = useServices();

  const modifyStringCategory = category?.replaceAll("-", " ");

  const filteredServicesByCategory = services?.filter(
    (s) => s.category.toLowerCase() === modifyStringCategory
  );

  console.log("sira??:   ", filteredServicesByCategory);

  return filteredServicesByCategory.length ? (
    <ul>
      {filteredServicesByCategory.map((service) => {
        return <Service key={service.id} service={service} />;
      })}
    </ul>
  ) : (
    <p>There are not services created</p>
  );
};
