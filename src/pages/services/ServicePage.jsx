import { useParams } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { ErrorMessage } from "../../../src/components/errorMessage/ErrorMessage";
import { Service } from "../../components/service/Service";
import { Replies } from "../../components/replies/Replies";
import { ModifyService } from "../../components/modifyService/ModifyService";

export const ServicePage = () => {
  const { id } = useParams();
  const { service, loading, error, setService } = useService(id);

  if (loading) return <p>cargando UN SOLO servcicio....</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Service from {service.username}</h1>

      <Service service={service} />

      <a href={`${process.env.REACT_APP_BACKEND}/${service.file}`} download>
        Previsualizar archivo adjunto
      </a>

      <div>
        <ModifyService service={service} setService={setService} />
      </div>
      <Replies></Replies>
    </section>
  );
};
