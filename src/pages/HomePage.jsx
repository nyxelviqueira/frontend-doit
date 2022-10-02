import { HomePageCards } from "../components/homePage/HomePageCard";
import { Team } from "../components/team/Team";

export const HomePage = () => {
  return (
    <main>
      <h1>List Services</h1>
      <input type="text" placeholder="Search a service"></input>
      <button>Search</button>
      <div>
        OJO, TENEMOS QUE PONER EL MISMO TAMAÑO PARA LAS FOTOS, SI NO QUEDA MAL
      </div>
      <HomePageCards className="cardsHomePage" />
      <Team />
    </main>
  );
};
