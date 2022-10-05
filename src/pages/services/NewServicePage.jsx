import { useState } from "react";
import { sendNewService } from "../../../src/services/index";
import { useContext } from "react";
import { AuthContext } from "../../../src/context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles/newServicePage.css";

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
      <form onSubmit={handleForm} action="#" className="form-newServicePage">
        <fieldset className="fieldset-newServicePage">
          <legend className="legend-newServicePage">
            Create your new service
          </legend>
          <ul className="ul-newServicePage">
            <li className="li-newServicePage title-newServicePage">
              <label
                htmlFor="titleService"
                className="label-title-newServicePage"
              >
                Title
              </label>
              <input
                className="input-title-newServicePage"
                type="text"
                name="title"
                id="titleService"
                placeholder="Name your service"
                autoFocus
                spellCheck="false"
                required
              />
            </li>
            <li className="li-newServicePage">
              <label
                htmlFor="category"
                className="label-category-newServicePage"
              >
                Choose category
              </label>
              <select
                name="category"
                id="category"
                className="select-option-category"
              >
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

            <li className="li-newServicePage">
              <label htmlFor="descriptionService">
                <p className="label-p">Describe your service</p>
              </label>
              <textarea
                className="textarea-newServicePage"
                name="description"
                id="descriptionService"
                rows="10"
                cols="65"
                spellCheck="false"
                placeholder="Describe your service"
              ></textarea>
            </li>
          </ul>
        </fieldset>

        <div className="input-button-newServicePage">
          <li className="li-newServicePage li-input-newServicePage">
            <input
              placeholder="Add File"
              type="file"
              name="file"
              className="input-newServicePage"
            />
          </li>

          <button
            className="button-newServicePage"
            type="submit"
            value="submit"
          >
            Add Service
          </button>
        </div>

        {sending ? <p>Adding Service</p> : null}

        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
};
