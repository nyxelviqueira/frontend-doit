import { Link } from "react-router-dom";
import "./errorMessage.css";

export const ErrorMessage = ({ message }) => {
  return (
    <section className="error">
      <div className="wrapper-error">
        <h1 className="h1-error">Hmm...{message}</h1>

        <p className="p-error">
          It seems that you're lost in a perpetual black hole. Let us help guide
          you out and get you back home.
        </p>
      </div>

      <Link to={"/"} className="link-error">
        <button className="button-error">Back to Home Page</button>
      </Link>
    </section>
  );
};
