import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../../../src/components/errorMessage/ErrorMessage";
import { ModifyService } from "../../components/modifyService/ModifyService";
import { Replies } from "../../components/replies/Replies";
import { Service } from "../../components/service/Service";
import { AuthContext } from "../../context/AuthContext";
import { useService } from "../../hooks/useService";

export const ServicePage = () => {
  const { id } = useParams();
  const { service, loading, error, setService } = useService(id);
  const { user } = useContext(AuthContext);

  if (loading) return <p>Loading a service</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <Service service={service}/>

      {/* Pongo que solo los usuarios registrados puedan editar sus servicios */}

      {user?.user?.id === service?.idUser ? (
        <ModifyService service={service} setService={setService} />
      ) : (
        ""
      )}

      <Replies id={id} user={user} />
    </section>
  );
};
