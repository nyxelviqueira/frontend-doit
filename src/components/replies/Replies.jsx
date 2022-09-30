import { useParams } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import { Link } from "react-router-dom";

import { Loading } from "../loading/Loading";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import useReplies from "../../hooks/useReplies";
import useService from "../../hooks/useService";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NewReply } from "../newReply/NewReply";

/* ME QUEDO AQUÍ PARA LOS REPLIES, HICE UN NUEVO ENDPOINT */
export const Replies = ({ reply, setReply, id }) => {
  const { idServices } = useParams();
  const { replies } = useReplies(id);
  const { loading, error } = useProfile();
  const { service } = useService(idServices);
  const { user } = useContext(AuthContext);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <section>
        {replies.map((reply) => (
          <>
            <h3>Reply by {reply.username}</h3>
            <p>{reply.observations}</p>
            {reply.finalFile === null ? (
              <a
                href={`${process.env.REACT_APP_BACKEND}/${reply.finalFile}`}
                download
              >
                Previsualizar archivo adjunto
              </a>
            ) : (
              "No hay archivos que mostrar"
            )}

            <p>Reply added on {new Date(service.createdAt).toLocaleString()}</p>
          </>
        ))}
      </section>
      <section>
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
    </>
  );
};
