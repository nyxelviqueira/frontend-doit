import { useState } from "react";
import { sendNewService } from "../../../src/services/index";
import { useContext } from "react";
import { AuthContext } from "../../../src/context/AuthContext";
import { useNavigate } from "react-router-dom";

export const NewServicePage = ({ addService }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      const data = new FormData(e.target);
      const newService = await sendNewService({ data, token });

      navigate(`/services/${newService.service}`);

      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };
  return (
    <>
      <form onSubmit={handleForm} action="#">
        <fieldset>
          <legend>New Service</legend>
          <ul>
            <li>
              <label htmlFor="titleService">Title: </label>
              <input
                type="text"
                name="title"
                id="titleService"
                placeholder="Name your service"
                autoFocus
                required
              />
            </li>
            <li>
              <label htmlFor="category">Category</label>
              <select name="category" id="category">
                <option value="Programming and Development">
                  Programming and Development
                </option>
                <option value="Design and art">Design and art</option>
                <option value="Music and Audio">Music and Audio</option>
                <option value="Video and Animation">Video and Animation</option>
                <option value="Writing and Translation">
                  Writing and Translation
                </option>
                <option value="Administrative and Secretary">
                  Administrative and Secretary
                </option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Business">Business</option>
                <option value="Various">Various</option>
              </select>
            </li>

            <li>
              <label htmlFor="descriptionService">Description:</label>
              <textarea
                name="description"
                id="descriptionService"
                rows="10"
                cols="80"
                placeholder="Describe your service"
              ></textarea>
            </li>

            <li>
              <input type="file" name="file" />
            </li>
          </ul>
        </fieldset>
        <button type="submit" value="submit">
          Add Service
        </button>

        {sending ? <p>Adding Service</p> : null}

        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
};
