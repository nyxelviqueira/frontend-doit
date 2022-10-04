import { useState } from "react";
import { sendRepliesService } from "../../../src/services/index";
import { useContext } from "react";
import { AuthContext } from "../../../src/context/AuthContext";

export const NewReply = ({ id, setReplies }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      const data = new FormData(e.target);
      const reply = await sendRepliesService({ id, data, token });

      setReplies((replies) => {
        return [...replies, reply];
      });

      e.target.reset();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <section>
        <form onSubmit={handleForm}>
          <fieldset>
            <legend>New Reply</legend>
            <ul>
              <li>
                <label htmlFor="observations">Observations: </label>
                <textarea
                  name="observations"
                  id="observations"
                  rows="10"
                  cols="80"
                  placeholder="Insert a new observation"
                  autoFocus
                  required
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
      </section>
    </>
  );
};
