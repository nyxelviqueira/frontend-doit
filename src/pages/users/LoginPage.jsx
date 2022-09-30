import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { logInUserService } from "../../services";


export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext)

  const handleForm = async (e) => {
    e.preventDefault();
    setError("")

    try {
      const data = await logInUserService({ email, password })

      login(data.token)
      navigate("/");

    } catch (error) {
      setError(error.message)
    }
  }

  return <>
    <form onSubmit={handleForm}>
      <fieldset>
        <legend>Login</legend>
        <ul>
          <li>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="pass">Contraseña:</label>
            <input
              type="password"
              name="password"
              id="pass"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="checkbox" name="showPassword" value="showPassword" id="showPassword" />
            <label htmlFor="showPassword">Show password</label>
          </li>


        </ul>
      </fieldset>
      <button type="submit">Login</button>
      {error ? <p>{error}</p> : null}
    </form>
  </>
}