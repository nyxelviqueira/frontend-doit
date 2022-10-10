import { HomePageCards } from "../components/homePage/HomePageCard";
import { ServiceFinder } from "../components/serviceFinder/ServiceFinder";

import { Team } from "../components/team/Team";

export const HomePage = () => {
  return (
    <main>
      <section>
      <h1 className="home-page-name">Welcome to DoIt!</h1>
      <p className="home-page-description">
        DoIt! Is an application where you can find all kind of services offered
        by houndred of freelancer specialised in differents categories.
      </p>
      </section>

      <ServiceFinder />

      <HomePageCards className="cardsHomePage" />

      <Team />
    </main>
  );
};
