import { HomePageCards } from "../components/homePage/HomePageCard";
import { ServiceFinder } from "../components/serviceFinder/ServiceFinder";

export const HomePage = () => {
  return (
    <>
      <main>
        <ServiceFinder />
        <div>
          OJO, TENEMOS QUE PONER EL MISMO TAMAÑO PARA LAS FOTOS, SI NO QUEDA MAL
        </div>

        {/* <HomePageCards className="cardsHomePage" /> */}
      </main>
    </>
  );
};
