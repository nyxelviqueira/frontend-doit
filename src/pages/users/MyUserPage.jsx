import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ErrorMessage } from "../../components/errorMessage/ErrorMessage";
import { UserServices } from "../../components/userServices/UserServices";
import { editUserService } from "../../services";

export const MyUserPage = () => {


    const [error, setError] = useState("");
    /* const navigate = useNavigate(); */
    const [biography, setBiography] = useState("");
    const [avatar, setAvatar] = useState("");
    const { user, token } = useContext(AuthContext);

    const handleForm = async (e) => {
        setError("")

        try {
            const data = new FormData(e.target);
            await editUserService({ data, token });
            e.target.reset()


            /* navigate("/"); */

        } catch (error) {
            setError(error.message)
        }
    }

    return user ? <>
        <h1>
            {user.user.username}
        </h1>

        {user.user.avatar ? <img
            //Hay veces que me funciona sin poner carpeta uploads y otras que tengo que ponerla
            src={`${process.env.REACT_APP_BACKEND}/${user.user.avatar}`}
            alt="avatar"
            width={100}
        /> : "Pon una fotito hombre"}

        <p>
            {user.user.biography}
        </p>
        <p>
            {user.user.email}
        </p>

        <button>Edit user</button>

        {/* Esta section va dentro de un popup al hacer onClick en Edit user */}
        <section>
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
                            <input type="file" name="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
                        </li>

                    </ul>
                </fieldset>
                <button>Actualiza tus cambios</button>
                {error ? <p>{error}</p> : null}
            </form>
        </section>


        {user.user.id ?
            <ul>
                <UserServices></UserServices>
            </ul>

            : "No hay servicios creados por este usuario"}
        <div>{new Date((user.user.createdAt)).toLocaleString()}</div>
    </> : <ErrorMessage />
}