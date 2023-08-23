import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Page404() {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/");
  };

  return (
    <div className={""}>
      <header className="w-full h-16 bg-primary text-white flex justify-center items-center">
        <h1 className="font-medium text-2xl font-sans">We.Together </h1>
      </header>
      <div className="bg-secondary py-16 h-screen md:py-56 lg:py-24 xl:py-24">
        <div className="text-center w-full justify-center items-center text-gray-600 mb-4 -mt-8 ">
          <img
            className="inline-block"
            src={logo}
            alt="ambridge-logo"
            // width={250}
            // height={100}
          />
        </div>
        <div className=" xs: max-w-xs  md:max-w-[700px] lg:max-w-lg xl:max-w-xl mx-auto bg-primary shadow-xl rounded">
          <div className="bg-gray-200 pt-8 pb-16 ">
            <form>
              <div className="w-4/5 mx-auto">
                <div className=" mb-8 text-center">
                  <h1 className="text-white text-3xl">Page Not Found 404</h1>
                </div>

                <button
                  onClick={onSubmit}
                  className="bg-white hover:bg-gray text-primary block mx-auto  text-sm uppercase rounded shadow-md px-6 py-2"
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
