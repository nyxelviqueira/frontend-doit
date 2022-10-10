//NEW!!! Editar/modificar mi propio servicio
// da problemas el booleano del realized.....

import { useContext, useState } from "react";
import { ErrorMessage } from "../../components/errorMessage/ErrorMessage";

import { AuthContext } from "../../context/AuthContext";
import { editModifyService } from "../../services";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";

import "./modifyService.css";

export const ModifyService = ({ service, setService }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const [description, setDescription] = useState(service.description);
  const [category, setCategory] = useState(service.category);
  const [realized, setRealized] = useState(Boolean(service.realized));
  const [disabled, setDisabled] = useState(Boolean(service.disabled));
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    const id = service.id;

    try {
      setSending(true);

      const data = {
        ...service,
        description,
        category,
        realized: realized ? 1 : 0,
      };

      const response = await editModifyService({ id, data, token });

      if (response.realized) {
        setDisabled(true);
      }

      setService(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return service ? (
    <>
      <button className="openButtonEdit" onClick={openModal}>
        Edit service
      </button>
      <section>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <form onSubmit={handleForm} action="#" className="editService">
            <fieldset>
              <ul>
                <li>
                  <label htmlFor="category">Change Category</label>
                  <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                </li>

                <li>
                  <label htmlFor="descriptionService">Edit Description:</label>
                  <textarea
                    name="description"
                    id="descriptionService"
                    rows="8"
                    cols="40"
                    className="textarea-editService"
                    placeholder="Describe your service"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </li>

                <li>
                  <label htmlFor="realized">The service it's done?</label>
                  <br />
                  <input
                    type="checkbox"
                    name="realized"
                    disabled={disabled}
                    checked={realized}
                    onChange={(e) => {
                      setRealized(e.target.checked);
                    }}
                  />
                  Done
                </li>
              </ul>
            </fieldset>
            <button type="submit" value="submit" className="setChanges">
              Modify Service !!!!!
            </button>

            {sending ? <p>Apply Changes</p> : null}

            {error ? <p>{error}</p> : null}
          </form>
        </Modal>
      </section>
    </>
  ) : (
    <ErrorMessage />
  );
};
