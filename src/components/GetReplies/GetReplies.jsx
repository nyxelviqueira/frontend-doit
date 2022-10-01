import { useParams } from "react-router-dom";
import useProfile from "../../hooks/useProfile";

import { Loading } from "../loading/Loading";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import useReplies from "../../hooks/useReplies";
import useService from "../../hooks/useService";

/* ME QUEDO AQUÍ PARA LOS REPLIES, HICE UN NUEVO ENDPOINT */
export const GetReplies = () => {
  const { id } = useParams();
  const { replies } = useReplies(id);
  const { loading, error } = useProfile();
  const { service } = useService(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <section>
        {replies.map((reply) => (
          <>
           ( <h3>Reply by {reply.username}</h3>
            {console.log(reply)}
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

            <p>Reply added on {new Date(service.createdAt).toLocaleString()}</p>)
          </>
        ))}
      </section>
    </>
  );
};
