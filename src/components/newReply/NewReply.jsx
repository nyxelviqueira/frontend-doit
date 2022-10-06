import { useState } from "react";
import { sendRepliesService } from "../../../src/services/index";
import { useContext } from "react";
import { AuthContext } from "../../../src/context/AuthContext";
import "./newReply.css";

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
      <section className="newReply">
        <form onSubmit={handleForm}>
          <h3 className="button-new-reply">New Reply</h3>
          <fieldset>
            <ul>
              <li>
                <label htmlFor="observations"></label>
                <textarea
                  name="observations"
                  id="observations"
                  rows="8"
                  cols="40"
                  placeholder="Insert a new observation"
                  autoFocus
                  required
                />
              </li>

              <li>
                <label htmlFor="finalFile">Select a file: </label>
                <input type="file" name="finalFile" id="finalFile" />
              </li>
            </ul>
          </fieldset>
          <button type="submit" value="submit" className="sendButton">
            Send
          </button>

          {sending ? <p>Adding reply</p> : null}

          {error ? <p>{error}</p> : null}
        </form>
      </section>
    </>
  );
};
