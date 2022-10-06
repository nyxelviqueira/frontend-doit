import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ErrorMessage } from "../../components/errorMessage/ErrorMessage";
import { UserServices } from "../../components/userServices/UserServices";
import { editUserService } from "../../services";
import avatarDefault from "../../../src/assets/avatar.png";

import "./styles/editUser.css";
import Modal from "../../components/modal/Modal";
import useModal from "../../hooks/useModal";

export const MyUserPage = () => {
  const [error, setError] = useState("");

  const [biography, setBiography] = useState("");
  const [avatar, setAvatar] = useState("");
  const { user, token } = useContext(AuthContext);
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const handleForm = async (e) => {
    setError("");

    try {
      const data = new FormData(e.target);
      await editUserService({ data, token });
      e.target.reset();
    } catch (error) {
      setError(error.message);
    }
  };

  return user ? (
    <>
      <section className="profile">
        <div className="avatarNameContainer">
          <h2>{user.user.username}</h2>
          {user.user.avatar ? (
            <img
              src={`${process.env.REACT_APP_BACKEND}/${user.user.avatar}`}
              alt="avatar"
              width={100}
              className="avatar"
            />
          ) : (
            <img
              src={avatarDefault}
              alt="avatarDefault"
              className="avatar"
              width={100}
            />
          )}
          <button className="openButton" onClick={openModal}>
            Edit user
          </button>
        </div>
        <div className="biographyContainer">
          {user.user.biography ? (
            <>
              <h2>Biography</h2>
              <p>{user.user.biography}</p>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div className="emailContainer">
          <h2>Email</h2>
          <p>{user.user.email}</p>
        </div>
        <div className="cretedAtContainer">
          <h2>Created at</h2>
          <p>{new Date(user.user.createdAt).toLocaleString()}</p>
        </div>
      </section>

      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <form onSubmit={handleForm} className="editUser">
          <ul className="ulForm">
            <li className="liForm">
              <label htmlFor="biography">Biography: </label>
              <textarea
                rows="8"
                cols="40"
                className="textarea-editUser"
                name="biography"
                id="biography"
                value={biography}
                autoFocus
                required
                onChange={(e) => setBiography(e.target.value)}
              />
            </li>
            <li className="liForm">
              <label>Avatar: </label>
              <input
                type="file"
                name="avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </li>
          </ul>
          <button className="setChanges">Set your changes</button>
          {error ? <p>{error}</p> : null}
        </form>
      </Modal>

      {user.user.id ? (
        <>
          <section className="servicesCreated">
            <h2>Created services</h2>
            <UserServices />
          </section>
        </>
      ) : (
        "There are not created services by this user"
      )}
    </>
  ) : (
    <ErrorMessage />
  );
};
