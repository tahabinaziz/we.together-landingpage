import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <!-- Left side: Links (Hidden on mobile) --> */}
          <div className="hidden md:flex items-center p-4">
            <Link to="/Startseite">
              <div className="text-gray hover:text-primary p-2">Startseite</div>
            </Link>
            <Link to="/Gruppen">
              <div className="text-gray hover:text-primary p-2">Gruppen</div>
            </Link>
            <Link to="/Blog">
              <div className="text-gray hover:text-primary p-2">Blog</div>
            </Link>
            <Link to="/Preisübersicht">
              <div className="text-gray hover:text-primary p-2">
                Preisübersicht
              </div>
            </Link>
            <Link to="/Über-uns">
              <div className="text-gray hover:text-primary p-2">Über uns</div>
            </Link>
          </div>

          {/* <!-- Center: Logo --> */}
          <div className="flex justify-center">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* <!-- Right side: Button (Hidden on mobile) --> */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="search"
              className="bg-purple-white shadow rounded border-0 p-2 outline-primary md:w-14 lg:w-44"
              placeholder="Gruppe suchen"
            />
            <Link to="/Anmelden">
              <div className="text-gray hover:text-primary p-2">Anmelden</div>
            </Link>
            <Button
              url={"/Mitgliedwerden"}
              text={"Mitglied werden"}
              className={"hover:bg-secondary"}
            />
          </div>

          {/* <!-- Mobile menu button (Hidden on desktop) --> */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-gray hover:text-primary"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu (hidden on larger screens) --> */}
      <div
        className={`md:hidden ${isMenuOpen ? "" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <ul className="mt-6 space-y-2 tracking-wide">
            <li className="min-w-max">
              <Link to="/Startseite">
                <div
                  aria-label="Startseite"
                  className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  <span className="group-hover:text-primary">Startseite </span>
                </div>
              </Link>
            </li>
            <li className="min-w-max">
              <Link to="/gruppen">
                <div className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                  <span className="group-hover:text-primary">Gruppen</span>
                </div>
              </Link>
            </li>
            <li className="min-w-max">
              <Link to="/Blog">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <span className="group-hover:text-primary">Blog</span>
                </div>
              </Link>
            </li>
            <li className="min-w-max">
              <Link to="/preisübersicht">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="group-hover:text-primary">
                    Preisübersicht
                  </span>
                </div>
              </Link>
            </li>
            <li className="min-w-max">
              <Link to="/Über-uns">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <span className="group-hover:text-primary">Über uns</span>
                </div>
              </Link>
            </li>
            <li>
              <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray">
                <input
                  type="search"
                  className="bg-purple-white shadow rounded border-0 p-2 outline-primary"
                  placeholder="Gruppe suchen"
                />
              </div>
            </li>
            <li>
              <Link to="Anmelden">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <span className="group-hover:text-primary">Anmelden</span>
                </div>
              </Link>
            </li>
            <li>
              <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray">
                <Button
                  url={"/Mitgliedwerden"}
                  text={"Mitglied werden"}
                  className={"hover:bg-secondary"}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
