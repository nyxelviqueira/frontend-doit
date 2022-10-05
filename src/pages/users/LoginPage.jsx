import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { logInUserService } from "../../services";
import "./styles/loginPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const [passwordShown, setPasswordShown] = useState(false);

  const tooglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await logInUserService({ email, password });

      login(data.token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container-container">
      <section className="container">
        <div className="title">Login</div>

        <div className="content">
          <form onSubmit={handleForm} className="form-container">
            <fieldset className="user-details">
              <ul>
                <li className="input-box">
                  <label htmlFor="email" className="details">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li className="input-box">
                  <label htmlFor="pass" className="details">
                    Password
                  </label>
                  <input
                    name="password"
                    id="pass"
                    required
                    type={passwordShown ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </li>
                <button
                  onClick={tooglePassword}
                  className="btn-login button-password"
                >
                  Show Password
                </button>
              </ul>
            </fieldset>

            <button className="btn-login button-login" type="submit">
              Login
            </button>
            {error ? <p>{error}</p> : null}
          </form>
        </div>
      </section>
    </div>
  );
};
