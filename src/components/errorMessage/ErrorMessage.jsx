import { Link } from "react-router-dom";
import "./errorMessage.css";

export const ErrorMessage = ({ message }) => {
  return (
    <section className="page-404">
      <div className="container-404">
        <div className="row-404">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">{message}</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h3-404">Look like you're lost</h3>

                <p className="p-404">
                  the page you are looking for not avaible!
                </p>

                <Link to={"/"} className="link_404">
                  Back to Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
