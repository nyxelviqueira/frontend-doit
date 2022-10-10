import { NewServiceButton } from "../../components/newServiceButton/NewServiceButton";
import { ServicesList } from "../../components/servicesList/ServicesList";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useServices from "../../hooks/useServices";

import "./styles/servicesListPage.css";

export const ListServicesPage = () => {
  const { services, loading, error } = useServices();
  const { user } = useContext(AuthContext);

  if (loading) return <p>Reload services</p>;
  if (error) return <p>{error}</p>;

  return user ? (
    <>
      <h1 className="all-services-listname">All Services</h1>
      <NewServiceButton />
      <ServicesList services={services} />
    </>
  ) : (
    <>
      <h1 className="all-services-listname">All Services</h1>
      <ServicesList services={services} />
    </>
  );
};
