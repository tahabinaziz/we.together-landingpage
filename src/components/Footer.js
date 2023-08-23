import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className=" md:w-1/2 md:my-auto  md:border-l pl-4 md:pl-8"></div>

      <div className="container   mx-auto flex flex-col md:flex-row py-6 px-4 border-t-2 border-lineColor">
        {/* Left Column (Logo) */}

        <div className="mt-8 ml-4 md:w-1/12 md:flex md:justify-center md:items-center mb-4 md:mb-0 ml-16">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </div>
        {/* Right Column (Links) */}
        <div className="mt-8 ml-8 md:w-5/6 md:flex md:flex-col justify-center items-center md:justify-center md:items-start mr-20 lg:mr-32">
          <ul className="md:ml-auto space-y-4 text-center ml-8 md:ml-0">
            <h3 className="text-2xl font-sans text-headingColor">
              Rechtliches
            </h3>
            <li>
              <Link to="/Über-uns">
                <div className="group flex items-center  rounded-md px-4 py-1 text-gray ml-1 md:ml-0 ">
                  <span className="group-hover:text-primary">Über uns</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-1 text-gray">
                  <span className="group-hover:text-primary"> Impressum</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-1 text-gray">
                  <span className="group-hover:text-primary"> Datenschutz</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-1 text-gray">
                  <span className="group-hover:text-primary"> AGB</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-1 text-gray">
                  <span className="group-hover:text-primary">
                    {" "}
                    Wiederufsrecht
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
