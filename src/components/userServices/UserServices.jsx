import useServices from "../../hooks/useServices";
import { Loading } from "../loading/Loading";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { ServicesList } from "../servicesList/ServicesList";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
/* import { Service } from "../service/Service"; */



export const UserServices = (id, filterServices) => {
  const { services, loading, error } = useServices(id);
  const { user } = useContext(AuthContext);


  filterServices = services.filter(service => service.idUser === user.user.id);
 

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;


  /* 
  
  
  {services.map((service) => {
            if (service.idUser === user.user.id){
             returnServices.map(service)
           }
           }
         }
    */

  if (loading) return <p>Loading services...</p>;
  if (error) return <ErrorMessage message={error} />;


  return <ServicesList services={filterServices} />;
};
