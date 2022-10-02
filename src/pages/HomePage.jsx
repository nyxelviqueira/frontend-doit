import { HomePageCards } from "../components/homePage/HomePageCard";
import { ServiceFinder } from "../components/serviceFinder/ServiceFinder";

import { Team } from "../components/team/Team";

export const HomePage = () => {
  return (
    <main>
      <ServiceFinder />
      {/* <h1>List Services</h1>
      <input type="text" placeholder="Search a service"></input>
      <button>Search</button> */}

      <HomePageCards className="cardsHomePage" />

      <Team />
    </main>
  );
};
