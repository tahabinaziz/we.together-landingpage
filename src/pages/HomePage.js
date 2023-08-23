import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import Button from "../components/Button";
import Vorteile from "../components/Vorteile";
const HomePage = () => {
  return (
    <>
      <div class="bg-background grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div class="bg-gray-200  flex flex-col justify-center items-center p-4 gap-8">
          <h3 class="text-3xl md:text-4xl lg:text-6xl ">
            Online Selbsthilfegruppen
          </h3>
          <p class="font-sans text-base ">
            Tausche Dich mit anderen Betroffenen aus oder starte eine neue
            Gruppe. Unabhängig von deinem Wohnort und passend zu deiner
            Lebenssituation.
          </p>
          <Button url={"/"} text={"Jetzt starten"} />
        </div>

        <div class="bg-gray-300 p-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="h-6 md:h-20 spacing-y-2 bg-primary rounded"></div>
              <img src={image1} alt="image1.png" />
              <img src={image2} alt="image2.png" />
            </div>
            <div>
              <img src={image3} alt="image3.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 px-8 sm:px-6 lg:px-8 mb-2">
        <h3 className="space-y-3 text-medium font-semibold md:text-2xl ">Gefördert durch</h3>
        <img src={image4} alt="fundedby.png" />
      </div>

      <div className="bg-secondary h-48 flex flex-col justify-center items-center mb-2">
        <div className="text-lg w-72 md:w-96 font-medium flex text-justify">
          {/* <div className=""> */}
            <p className="text-white font-base text-center">
              In der von Adrian gegründeten Gruppe, spricht Torsten über seine
              Panikattacken und Merve fühlt sich endlich verstanden.
            </p>
          {/* </div> */}
        </div>
      </div>

      <div className="mt-4 px-8 sm:px-6 lg:px-8 mb-2 gap-4">
        <h3 className="space-y-3 text-medium font-semibold md:text-2xl ">
          Deine Vorteile mit we.together
        </h3>

        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex">
            <Vorteile
              number={"01"}
              text1={"Fortlaufende Gruppen"}
              text2={
                "Tausch Dich regelmäßig mit Menschen aus, die in einer ähnlichen Situation sind wie Du um gemeinsam zu heilen."
              }
            />
          </div>
          <div className="flex">
            <Vorteile
              number={"02"}
              text1={"Anonymität"}
              text2={
                "Deine Sicherheit liegt uns besonders am Herzen, deshalb achten wir sehr auf Deine Anonymität auf der Plattform."
              }
            />
          </div>
          <div className="flex">
            <Vorteile
              number={"03"}
              text1={"Jederzeit zugänglich"}
              text2={
                "Alle Gruppen finden online per Video-Call statt. Unabhängig von deinem Wohnort und deiner Lebenssituation."
              }
            />
          </div>
          <div className="flex">
            <Vorteile
              number={"04"}
              text1={"Von Psychologen entwickelt"}
              text2={
                "Unsere Gruppen-Konzepte werden von Psycholog/innen mit dem Feedback von Betroffenen entwickelt. "
              }
            />
          </div>
          <div className="flex">
            <Vorteile
              number={"05"}
              text1={"Kostenlos ausprobieren"}
              text2={
                "Um zu schauen, ob dir we.together hilft, hast du die Möglichkeit es kostenlos in 5 Terminen unverbindlich auszuprobieren."
              }
            />
          </div>
          <div className="flex">
            <Vorteile
              number={"06"}
              text1={"Keine Wartezeit"}
              text2={
                "Auf we.together findest Du zahlreiche Selbsthilfegruppen zu verschiedenen Themen mit täglichen Angeboten."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
