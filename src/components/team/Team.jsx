export const Team = () => {
  return (
    <div className="container">
      <div className="row heading">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center bottom-line">Meet Our Team</h2>
          <p className="subheading text-center">Creative Nerds</p>
        </div>
      </div>

      <div className="row team-row">
        <div className="col-md-4 col-sm-6 team-wrap">
          <div className="team-member text-center">
            <div className="team-img">
              <img
                src="http://deothemes.com/envato/enigma/html/img/team_1.jpg"
                alt=""
              />
              <div className="overlay">
                <div className="team-details text-center">
                  <p>
                    Our web design team will spend time with our digital
                    marketing team.
                  </p>
                  <div className="socials mt-20"></div>
                </div>
              </div>
            </div>
            <h6 className="team-title">John Marshall</h6>
            <span>Designer</span>
          </div>
        </div>

        <div class="col-md-4 col-sm-6 team-wrap">
          <div class="team-member text-center">
            <div class="team-img">
              <img
                src="http://deothemes.com/envato/enigma/html/img/team_2.jpg"
                alt=""
              />
              <div class="overlay">
                <div class="team-details text-center">
                  <p>
                    Our web design team will spend time with our digital
                    marketing team.
                  </p>
                  <div class="socials mt-20"></div>
                </div>
              </div>
            </div>
            <h6 class="team-title">Steve Roberts</h6>
            <span>Photographer</span>
          </div>
        </div>

        <div class="col-md-4 col-sm-6 team-wrap">
          <div class="team-member last text-center">
            <div class="team-img">
              <img
                src="http://deothemes.com/envato/enigma/html/img/team_3.jpg"
                alt=""
              />
              <div class="overlay">
                <div class="team-details text-center">
                  <p>
                    Our web design team will spend time with our digital
                    marketing team.
                  </p>
                  <div class="socials mt-20"></div>
                </div>
              </div>
            </div>
            <h6 class="team-title">Michael Cartney</h6>
            <span>Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
