import { useState } from "react";
import { sendRepliesService } from "../../../src/services/index";
import { useContext } from "react";
import { AuthContext } from "../../../src/context/AuthContext";

export const NewReply = ({service, setService}) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [reply, setReply] = useState(false);
  const { token } = useContext(AuthContext);

  const [observations, setObservations] = useState(reply.observations);
  /*   const [finalFile, setFinalFile] = useState(reply.finalFine); */

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      const data = { ...reply };
      await sendRepliesService({ data, token });
      setReply(data);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <fieldset>
          <legend>New Reply</legend>
          <ul>
            <li>
              <label htmlFor="observations">Observations: </label>
              <textarea
                name="title"
                id="observations"
                rows="10"
                cols="80"
                placeholder="Insert a new observation"
                autoFocus
                required
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
              />
            </li>

            <li>
              <input type="file" name="finalFile" />
            </li>
          </ul>
        </fieldset>
        <button type="submit" value="submit">
          Send
        </button>

        {sending ? <p>Adding reply</p> : null}

        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
};
