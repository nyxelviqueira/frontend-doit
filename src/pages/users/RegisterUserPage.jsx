import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../../services";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (pass1 !== pass2) {
      setError("Set same password value");
      return;
    }

    try {
      await registerUserService({ username, email, password: pass1 });

      //Usamos hook para pasar a ruta de login al crear nuevo usuario
      navigate("/login");

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <form onSubmit={handleForm}>
        <fieldset>
          <legend>Register</legend>
          <ul>
            <li>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                name="name"
                id="username"
                value={username}
                autoFocus
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="pass1">Password:</label>
              <input
                type="password"
                name="pass1"
                id="pass1"
                value={pass1}
                required
                onChange={(e) => setPass1(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="pass2">Repeat password</label>
              <input
                type="password"
                name="pass2"
                id="pass2"
                value={pass2}
                required
                onChange={(e) => setPass2(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <button>Join us!</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  )
}