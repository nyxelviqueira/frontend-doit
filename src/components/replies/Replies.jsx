import { Link } from "react-router-dom";
import useReplies from "../../hooks/useReplies";
import { GetReplies } from "../GetReplies/GetReplies";
import { NewReply } from "../newReply/NewReply";


export const Replies = ({ id, user }) => {
  const { replies, setReplies, loading } = useReplies(id);

  if (loading) return <p>cargando UN SOLO servcicio....</p>;

  return (
    <>
      <GetReplies replies={replies} />
      {user ? (
        <NewReply id={id} setReplies={setReplies} />
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
    </>
  );
};
