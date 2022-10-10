import "./getReplies.css";

export const GetReplies = ({ replies }) => {
  return (
    <>
      <ul className="getReplies">
        {replies.map((reply) => (
          <li key={reply.id} className="reply">
            <h3 className="reply-by">Reply by {reply.username}</h3>
            <p className="reply-observations">{reply.observations}</p>
            {reply.finalFile ? (
              <a
                href={`${process.env.REACT_APP_BACKEND}/${reply.finalFile}`}
                className="reply-file"
              >
                Previsualizar archivo adjunto
              </a>
            ) : (
              <p className="reply-not-files">Not files to show</p>
            )}
            <p className="reply-date">
              Reply added on {new Date(reply.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
