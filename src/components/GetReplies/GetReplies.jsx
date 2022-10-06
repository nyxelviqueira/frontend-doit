import "./getReplies.css";

export const GetReplies = ({ replies }) => {
  return (
    <>
      <ul className="getReplies">
        {replies.map((reply) => (
          <li key={reply.id} className="reply">
            <h3>Reply by {reply.username}</h3>
            <p>{reply.observations}</p>
            {reply.finalFile ? (
              <a href={`${process.env.REACT_APP_BACKEND}/${reply.finalFile}`}>
                Previsualizar archivo adjunto
              </a>
            ) : (
              "No hay archivos que mostrar"
            )}
            <p>Reply added on {new Date(reply.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
