import image1 from "../assets/images/uber-uns/image1.jpeg";
import image2 from "../assets/images/uber-uns/image2.jpeg";
import image3 from "../assets/images/uber-uns/image3.jpeg";
import image4 from "../assets/images/uber-uns/image4.jpeg";
import image5 from "../assets/images/uber-uns/image5.jpeg";
import image6 from "../assets/images/uber-uns/image6.jpeg";
import Footer from "../components/Footer";
import TwoColumn from "../components/TwoColumn";
import ImageAndDivComponent from "../components/about/ImageWithDiv";

const UberUns = () => {
  return (
    <>
      <div className="bg-background">
        <div className="flex flex-col justify-center items-center p-8 gap-4">
          <h3 className="text-xl w-2/3 text-sans text-center font-thin md:text-3xl w-1/2 font-thin lg:w-1/4 text-5xl">
            Wir demokratisieren Selbsthilfegruppen
          </h3>
          <div className="text-justify justify-center flex">
            <p className="font-sans text-base font-normal p-4 text-center item-center md:w-5/6 lg:w-1/2  ">
              Gemeinsam haben wir es uns zur Aufgabe gemacht Menschen in
              schwierigen Lebenssituationen zu unterstützen und haben damit auch
              eine Lebensaufgabe gewählt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
          <img src={image1} alt="Image 1" className="w-80 rounded h-72" />
          <ImageAndDivComponent
            imageSrc={image2}
            divContent={
              <div className="bg-secondary w-80 h-20 mt-4 rounded xs:w-64 md:w-44 lg:w-80 "></div>
            }
            imageOnTop={false} // Set to true to have the image on top
          />
          <ImageAndDivComponent
            imageSrc={image3}
            divContent={
              <div className="bg-primary w-80 h-20 mt-4 rounded xs:w-64 md:w-44 lg:w-80"></div>
            }
            imageOnTop={true} // Set to true to have the image on top
          />
          <img src={image4} alt="Image 4" className="w-80 rounded h-72" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {/* Image on the left */}

          <div className="col-span-1">
            <h3 className="text-xl text-textColor font-semibold mb-2">Unsere Mission</h3>
            <p className="text-base text-left text- font-sans text-textColor ">
              ist es, Menschen zu verbinden und ihnen Zugang zur richtigen
              Selbsthilfegruppe zu ermöglichen. Durch unsere Online-Plattform
              schaffen wir eine sichere und unterstützende Umgebung, in der
              Menschen ihre Herausforderungen teilen können, um Heilung, Stärke
              und gemeinsamen Fortschritt zu finden. Bei we.together sind wir
              bestrebt, jedem die Möglichkeit zu geben, sich selbst zu helfen
              und gemeinsam zu wachsen.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl text-textColor font-semibold mb-2">Unsere Vision</h3>
            <p className="text-base text-left  font-sans text-textColor">
              ist es, dass jeder Mensch den Zugang zu psychologischer
              Unterstützung bekommt. Wir streben danach, eine Gemeinschaft zu
              schaffen, in der Menschen Unterstützung, Inspiration und
              Ressourcen finden, um ihr Potenzial zu entfalten. Durch unsere
              innovative Plattform möchten wir eine Brücke bauen, die Menschen
              zusammenführt, um sich gegenseitig zu stärken, zu ermutigen und
              gemeinsam zu wachsen.
            </p>
          </div>
          <div className="col-span-1 text-justify" >
            <h3 className="text-xl text-textColor font-semibold mb-2">Unser Team</h3>
            <p className="text-base text-left font-sans text-textColor">
              ibesteht aus Expertinnen und Experten, die stetig die Bedürfnisse
              unsere NutzerInnen im Blick haben und dahingehend we.together
              kontinuierlich weiterentwickeln. Unser Team zeichnet sich vor
              allem durch hohe Motivation aus sowie Empathie und Verständnis für
              psychische Erkrankungen.
            </p>
          </div>
        </div>

        <div className="container mx-auto md:p-8 -mt-8">
          {/* Image on the left */}
          <TwoColumn
            image={image5}
            heading="Du möchtest Teil des Teams werden?"
            paragraph="Schicke uns gerne deine Bewerbungsunterlagen zu  an bewerbung@hellowetogether.de."
            buttonText="Gruppe finden"
            imageOnLeft={true}
            showButton={false}
            imageHeight={"h-72"}
            imageWidth={"w-80"}
          />

          {/* Image on the right */}
          <TwoColumn
            image={image6}
            heading="Ihr seid ein Unternehmen und wollt mit uns in Kontakt treten?"
            paragraph="Schreibt uns gerne eine Nachricht an info@hellowetogether.de"
            buttonText="Gruppe starten"
            imageOnLeft={false}
            showButton={false}
            imageHeight={"h-72"}
            imageWidth={"w-80"}
          />
        </div>

        <div className="container mx-auto md:p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Unsere Partner uns Förderer
          </h2>
          <p className="text-gray-600">
            Hier findet ihr eine Liste unserer Partner mit denen wir zusammen
            daran arbeiten Menschen miteinander zu verbinden und ihnen Zugang zu
            Selbsthilfegruppen zu ermöglichen.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default UberUns;
