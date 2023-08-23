import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import image13 from "../assets/images/image13.png";
import image14 from "../assets/images/image14.png";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import TwoColumn from "../components/TwoColumn";
import Vorteile from "../components/Vorteile";
import { Link } from "react-router-dom";
const HomePage = () => {
  const cardDataGemeinsam = [
    {
      imageUrl: image7,
      title: "",
      heading: "Unsere Vision",
      paragraph:
        "Wir wollen mit we.together Deutschlands führende digitale Selbsthilfe Plattform schaffen, die jedem den Zugang zu der richtigen Selbsthilfegruppe ermöglicht.",
      imageWidth: "auto",
      imageHeight: "80",
    },
    {
      imageUrl: image8,
      title: "",
      heading: "Unsere Einstellung",
      paragraph:
        "Wir glauben daran, dass jeder Mensch glücklich sein darf und die Lösung, um das zu erreichen, in sich trägt. Wir bieten mit we.together eine Möglichkeit und einen Weg zu dieser Lösung zu kommen.",
      imageWidth: "auto",
      imageHeight: "80",
    },
    {
      imageUrl: image9,
      title: "",
      heading: "Unser Team",
      paragraph:
        "We.together wird auch bei uns im Team groß geschrieben. Gemeinsam haben wir es uns zur Aufgabe gemacht Menschen in schwierigen Lebenssituationen zu unterstützen und haben damit auch eine Lebensaufgabe gewählt.",
      imageWidth: "auto",
      imageHeight: "80",
    },
  ];

  const cardDataGruppe = [
    {
      imageUrl: image10,
      title: "Depressionsgruppen",
      heading: "",
      paragraph: "",
      imageWidth: "auto",
      imageHeight: "80",
    },
    {
      imageUrl: image11,
      title: "Trauergruppen",
      heading: "",
      paragraph: "",
      imageWidth: "auto",
      imageHeight: "80",
    },
    {
      imageUrl: image12,
      title: "Gruppen für Angehörige",
      heading: "",
      paragraph: "",
      imageWidth: "auto",
      imageHeight: "80",
    },
    {
      imageUrl: image13,
      title: "Alle Gruppen anzeigen",
      heading: "",
      paragraph: "",
      imageWidth: "auto",
      imageHeight: "80",
    },
  ];

  return (
    <>
      <div className="bg-background grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div className="bg-gray-200  flex flex-col justify-center items-center p-4 gap-8">
          <h3 className="text-3xl md:text-4xl lg:text-6xl ">
            Online Selbsthilfegruppen
          </h3>
          <p class="font-sans text-base ">
            Tausche Dich mit anderen Betroffenen aus oder starte eine neue
            Gruppe. Unabhängig von deinem Wohnort und passend zu deiner
            Lebenssituation.
          </p>
          <Button
            url={"/"}
            text={"Jetzt starten"}
            className={"hover:bg-secondary"}
          />
        </div>

        <div className="bg-gray-300 p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div class="h-6 md:h-20 spacing-y-2 bg-secondary rounded"></div>
              <img src={image1} alt="image1.png" />
              <img src={image2} alt="image2.png" />
            </div>
            <div className="space-y-3">
              <img src={image3} alt="image3.png" />
              <div className="h-8 md:h-20 spacing-y-2 bg-extraSecondary rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 px-8 sm:px-6 lg:px-8 mb-2">
        <h3 className="p-4 space-y-3 text-xl text-left font-semibold md:text-2xl">
          Gefördert durch
        </h3>
        <img src={image4} alt="fundedby.png" />
      </div>

      <div className="bg-secondary h-48 flex flex-col justify-center items-center">
        <div className="text-lg w-72 md:w-96 font-medium flex text-justify">
          <p className="text-white font-base text-center">
            In der von Adrian gegründeten Gruppe, spricht Torsten über seine
            Panikattacken und Merve fühlt sich endlich verstanden.
          </p>
        </div>
      </div>

      {/* Vorteile */}
      <div className="container mx-auto py-4 md:p-8">
        <h3 className="mt-4 text-xl text-left font-semibold md:text-2xl ">
          Deine Vorteile mit we.together
        </h3>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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

      {/* Funktioniert */}

      <div className="container mx-auto md:p-8 -mt-8">
        <h3 className="text-xl text-left text-xl font-semibold md:text-2xl mb-8">
          So funktioniert we.together
        </h3>

        {/* Image on the left */}
        <TwoColumn
          image={image5}
          heading="Finde deine Gruppe"
          paragraph="Finde aus zahlreichen Gruppen, die passende(n) für Dich und tausche Dich online, in regelmäßigen Terminen, mit anderen Betroffene aus, die in der gleichen Situation sind wie Du."
          buttonText="Gruppe finden"
          imageOnLeft={true}
          showButton={true}
        />

        {/* Image on the right */}
        <TwoColumn
          image={image6}
          heading="Starte neue Gruppen"
          paragraph="Zu jedem beliebigen Thema hast du die Möglichkeit eine Gruppe zu eröffnen und Menschen zusammenzubringen. Erstelle mit unserer Hilfe in nur vier Schritten deine Selbsthilfegruppe. We.together ist für Gruppen ModeratorInnen komplett kostenlos."
          buttonText="Gruppe starten"
          imageOnLeft={false}
          showButton={true}
        />
      </div>

      {/*Ein monatlicher Preis*/}
      <div className="bg-monatlicher text-center p-4 flex flex-col justify-center items-center mb-2 gap-6">
        <h3 className="mt-4  text-xl text-textColor font-semibold md:text-2xl ">
          Ein monatlicher Preis - unlimitierter Zugang zu Gruppen
        </h3>
        <div className="-mt-2 text-lg w-5/6 font-medium flex text-justify md:w-2/4 ">
          <p className="text-center">
            Teste 5 Gruppen-Termine jetzt kostenlos, danach kannst Du für 19,95
            € / Monat an unbegrenzt vielen Gruppen teilnehmen.
          </p>
        </div>
        <div className="flex bg-[#FCFCFC] text-lg w-full md:w-2/4 font-medium flex text-justify rounded lg:w-2/5">
          <div className="flex grid-cols-2 mt-4 mb-4 p-2 gap-4 ml-3  md:ml-6 lg:ml-6">
            <div className="col-span-1 flex justify-center items-center">
              <div className="bg-monatlicher flex justify-center items-center w-20 h-20 rounded-full">
                <img src={image14} alt="Logo" className="w-12 h-12" />
              </div>
            </div>
            <div className="col-span-1 ">
              <h3 className="mb-2 text-lg font-semibold font-sans text-textColor md:text-xl lg:text-2xl">
                5 Teilnahmen kostenlos
              </h3>
              <p className="text-md text-left text-lg font-sans p-2 text-textColor md:text-base">
                Danach 19,95 € / Monat. Jederzeit kündbar
              </p>
            </div>
          </div>
        </div>

        <p>
          We.together ist kostenlos für Gruppenmoderatoren -{" "}
          <Link to={"/"}>
            <span className="text-primary underline">Jetzt mehr erfahren.</span>
          </Link>
        </p>
        <Button url={"/"} text={"Jetzt testen"} className={"mt-2 mb-6"} />
      </div>

      {/* Gruppe */}
      <div className="container mx-auto md:p-8">
        <h3 className="text-left  space-y-3 text-xl text-textColor font-semibold md:text-2xl p-4">
          Finde Die richtige Gruppe für Dich
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {cardDataGruppe.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              heading={card.heading}
              paragraph={card.paragraph}
              showHeadingAndParagraph={false} // Set to true to show heading and paragraph
              imageHeight={""}
              imageWidth={""}
              showTitle={true} // Set to true to show title
            />
          ))}
        </div>
      </div>

      {/* Gemeinsam */}
      <div className="container mx-auto  md:p-8 -mt-8">
        <h3 className="text-left  text-xl text-textColor font-semibold md:text-2xl p-4">
          Gemeinsam Selbsthilfe ermöglichen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {cardDataGemeinsam.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              heading={card.heading}
              paragraph={card.paragraph}
              showHeadingAndParagraph={true} // Set to true to show heading and paragraph
              imageHeight={""}
              imageWidth={""}
              showTitle={false} // Set to false to hide title
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};
export default HomePage;
