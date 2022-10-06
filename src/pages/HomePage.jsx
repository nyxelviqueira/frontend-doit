import { HomePageCards } from "../components/homePage/HomePageCard";
import { ServiceFinder } from "../components/serviceFinder/ServiceFinder";

import { Team } from "../components/team/Team";

export const HomePage = () => {
  return (
    <main>
      <p className="home-page-name">Welcome to DoIt!</p>
      <p className="home-page-description">
        DoIt! Is an application where you can find all kind of services offered
        by houndred of freelancer specialised in differents categories.
      </p>

      <ServiceFinder />

      <HomePageCards className="cardsHomePage" />

      <Team />
    </main>
  );
};
