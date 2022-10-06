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
    <div className="container-new">
      <form onSubmit={handleForm} action="#" className="form-newServicePage">
        {/* <fieldset className="fieldset-newServicePage"> */}
        <legend className="legend-title">Create your new service</legend>
        <ul>
          <div className="row-new">
            <div className="col-25-new">
              <label htmlFor="titleService" className="label-newService">
                Title
              </label>
              <input
                className="col-75-new input-title"
                type="text"
                name="title"
                id="titleService"
                placeholder="Name your service"
                autoFocus
                spellCheck="false"
                required
              />
            </div>
          </div>

          <div className="row-new">
            <div className="col-25-new">
              <label htmlFor="category" className="label-newService">
                Choose category
              </label>
              <div className="col-75-new">
                <select
                  name="category"
                  id="category"
                  className="select-cat-new"
                >
                  <option value="Programming and Development">
                    Programming and Development
                  </option>
                  <option value="Design and art">Design and art</option>
                  <option value="Music and Audio">Music and Audio</option>
                  <option value="Video and Animation">
                    Video and Animation
                  </option>
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
              </div>
            </div>
          </div>

          <div className="row-new">
            <div className="col-25-new">
              <label htmlFor="descriptionService" className="label-newService">
                Describe your service
              </label>
              <div className="col-75-new">
                <textarea
                  className="textarea-new"
                  name="description"
                  id="descriptionService"
                  rows="10"
                  cols="65"
                  spellCheck="false"
                  placeholder="Describe your service"
                ></textarea>
              </div>
            </div>
          </div>
        </ul>
        {/* </fieldset> */}

        <div className="row-new">
          <input
            placeholder="Add File"
            type="file"
            name="file"
            className="input-new"
          />
        </div>
        <div className="row-new">
          <button className="btn-submit-new" type="submit" value="submit">
            Add Service
          </button>
        </div>

        {sending ? <p>Adding Service</p> : null}

        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};
