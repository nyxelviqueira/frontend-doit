import "./team.css";
import github from "./assets/github-icon.png";
import linkedin from "./assets/linkedin-icon.png";
import ramon from "./assets/ramon.jpg";
import paula from "./assets/paula.jpg";
import adriana from "./assets/adriana.jpg";

export const Team = () => {
  return (
    <div className="container-team">
      <div className="row heading">
        <div className="team-heading">
          <h2 className="team-heading-title">MEET OUR TEAM</h2>
          <p className="team-subheading">We are the Doit! developers</p>
        </div>
      </div>

      <div className="team-row">
        <div className="team-wrap">
          <div className="team-member">
            <div className="team-img">
              <img src={ramon} alt="Ramón" />
              <div className="overlay">
                <div className="team-details">
                  <p className="text-social">
                    Ramón is an empathic and teamworker person. See more about
                    Ramón...
                  </p>
                  <div className="socials">
                    <a href="https://github.com/nyxelviqueira">
                      <img className="github-icon" src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/ram%C3%B3n-viqueira-hierro-0a037b20b/">
                      <img
                        className="linkedin-icon"
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h6 className="team-title">RAMÓN VIQUEIRA</h6>
          </div>
        </div>

        <div className="team-wrap">
          <div className="team-member">
            <div className="team-img">
              <img src={paula} alt="Paula" />
              <div className="overlay">
                <div className="team-details">
                  <p className="text-social">
                    Paula is collaborative and always a good leader. See more
                    about Paula...
                  </p>
                  <div className="socials">
                    <a href="https://github.com/PaULah88">
                      <img className="github-icon" src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/paulaiglesiasamigo/">
                      <img
                        className="linkedin-icon"
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h6 className="team-title">PAULA IGLESIAS</h6>
          </div>
        </div>

        <div className="team-wrap">
          <div className="team-member">
            <div className="team-img">
              <img src={adriana} alt="Adriana" />
              <div className="overlay">
                <div className="team-details">
                  <p className="text-social">
                    Adriana is a creative and communicative employee. See more
                    about Adriana...
                  </p>
                  <div className="socials">
                    <a href="https://github.com/amb933">
                      <img className="github-icon" src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/adriana-mart%C3%ADnez-bamba-901687215/">
                      <img
                        className="linkedin-icon"
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h6 className="team-title">ADRIANA MARTÍNEZ</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
