import { useParams } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { ErrorMessage } from "../../../src/components/errorMessage/ErrorMessage";
import { Service } from "../../components/service/Service";
import { GetReplies } from "../../components/GetReplies/GetReplies";
import { ModifyService } from "../../components/modifyService/ModifyService";
import { NewReply } from "../../components/newReply/NewReply";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const ServicePage = ({ reply, setReply }) => {
  const { id } = useParams();
  const { service, loading, error, setService } = useService(id);
  const { user } = useContext(AuthContext);

  if (loading) return <p>loading ONLY ONE service...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <Service service={service} />

      {/* Pongo que solo los usuarios registrados puedan editar sus servicios */}

      {user?.user?.id === service?.idUser ? (
        <ModifyService service={service} setService={setService} />
      ) : (
        ""
      )}

      {/* Cargo todos los comentarios */}
      <GetReplies reply={reply} />

      {/* Si hay usuario registrado que se abra caja de comentarios */}

      {user ? (
        <NewReply reply={reply} setReply={setReply} />
      ) : (
        <ul className="auth">
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      )}
    </section>
  );
};
