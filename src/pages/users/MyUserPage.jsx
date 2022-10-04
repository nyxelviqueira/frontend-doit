import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ErrorMessage } from "../../components/errorMessage/ErrorMessage";
import { UserServices } from "../../components/userServices/UserServices";
import { editUserService } from "../../services";
import avatarDefault from "../../../src/assets/avatar.png";
import "../../components/components.css";

export const MyUserPage = () => {
  const [error, setError] = useState("");
  /* const navigate = useNavigate(); */
  const [biography, setBiography] = useState("");
  const [avatar, setAvatar] = useState("");
  const { user, token } = useContext(AuthContext);

  const handleForm = async (e) => {
    setError("");

    try {
      const data = new FormData(e.target);
      await editUserService({ data, token });
      e.target.reset();

      /* navigate("/"); */
    } catch (error) {
      setError(error.message);
    }
  };

  return user ? (
    <>
      <section className="profile">
        <div className="avatarNameContainer">
          <h1>{user.user.username}</h1>
          {user.user.avatar ? (
            <img
              src={`${process.env.REACT_APP_BACKEND}/${user.user.avatar}`}
              alt="avatar"
              width={100}
            />
          ) : (
            <img
              src={avatarDefault}
              alt="avatarDefault"
              className="avatarDefault"
              width={100}
            />
          )}
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
        <div>Created at: {new Date(user.user.createdAt).toLocaleString()}</div>
      </section>

      {/* Esta section va dentro de un popup al hacer onClick en Edit user */}
      <section className="editUser">
        <button>Edit user</button>

        <form onSubmit={handleForm}>
          <fieldset>
            <legend>Set yout changes</legend>
            <ul>
              <li>
                <label htmlFor="biography">Biography: </label>
                <input
                  type="text"
                  name="biography"
                  id="biography"
                  value={biography}
                  autoFocus
                  required
                  onChange={(e) => setBiography(e.target.value)}
                />
              </li>
              <li>
                <label>Avatar: </label>
                <input
                  type="file"
                  name="avatar"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </li>
            </ul>
          </fieldset>
          <button>Actualiza tus cambios</button>
          {error ? <p>{error}</p> : null}
        </form>
      </section>

      {user.user.id ? (
        <>
          <section className="servicesCreated">
            <h2>Services createds</h2>
            <UserServices />
          </section>
        </>
      ) : (
        "No hay servicios creados por este usuario"
      )}
    </>
  ) : (
    <ErrorMessage />
  );
};
