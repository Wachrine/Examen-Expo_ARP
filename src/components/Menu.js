import React, { useState } from "react";
import { Link } from "react-router-dom";
// Imports Images
import burger from "../assets/icons/menuburger.svg";
import croix from "../assets/icons/croix.svg";
import illu1 from "../assets/icons/form carre.png";
import illu2 from "../assets/icons/forme_demi_cercle.png";
import PortraitSophie from "../assets/Images/PORTRAIT_SOPHIE.png";

function Header() {
  // 1) Création et initialisation d'un useRef permettant de viser ensuite l'élément du DOM à animer.
  // ----> ce useRef va permettre de détecter si mon menu est ouvert.
  const [isOuvert, setisOuvert] = useState(false);
  // 2) Création d'une fonction permettant de fermer mon menu si il est ouvert et inversement et sera utilisé à l'évenement click.
  // Dans cette fonction j'utilise un callback ----> "open" c'est la valeur actuel de l'état et "!open" c'est la valeur inverse.
  const Switch_menu = () => {
    setisOuvert((ouvert) => !ouvert);
  };
  return (
    <>
      <div className="ContainerBurger w-[20%] h-[15vh] bg-yellow border-l-3  border-b-3 border-black flex justify-center items-center cursor-pointer fixed z-20 right-0">
        <img
          src={burger}
          alt="burger"
          className="object-cover lg:w-16 md:w-14 sm:w-12 phone:w-11"
          onClick={Switch_menu}
        />
      </div>
      <div
        className={`Menu absolute z-20 bg-Background w-screen h-screen ${
          isOuvert ? "block" : "hidden"
        }`}
      >
        <img
          src={PortraitSophie}
          alt="PortraitSophie"
          className="object-cover lg:w-44 md:w-36 sm:w-20 phone:w-14 absolute lg:bottom-20 lg:right-56 md:bottom-20 md:right-24 sm:bottom-[20%] sm:right-24 phone:bottom-[20%] phone:right-14 z-50"
        />
        <div className="w-screen h-[15vh] border-b-3 border-black">
          <div className="ContainerBurger w-[20%] h-[15vh] bg-yellow border-l-3 border-b-3 border-black flex justify-center items-center cursor-pointer absolute right-0">
            <img
              src={croix}
              alt="croix"
              className="object-cover lg:w-16 md:w-14 sm:w-12 phone:w-11"
              onClick={Switch_menu}
            />
          </div>
        </div>
        <div className="Part_liste w-[80.2%] h-[85vh] flex relative">
          <div className="absolute z-30 w-full h-full">
            <img
              src={illu1}
              alt="illu1"
              className="object-cover lg:w-16 md:w-12 sm:w-8 phone:w-8 absolute lg:top-44 lg:left-[30%] md:top-48 md:left-[30%] sm:top-[32%] sm:left-44 phone:top-[32%] phone:left-20"
            />
            <img
              src={illu2}
              alt="illu2"
              className="object-cover lg:w-16 md:w-12 sm:w-8 phone:w-8 absolute lg:bottom-40 lg:left-[64%] md:bottom-44 md:left-[64%] sm:bottom-44 sm:left-[64%] phone:bottom-40 phone:left-[62%] rotate-45"
            />
          </div>
          <div className="Menu_Colonne1 w-2/4 h-[85vh] border-r-3 border-black">
            <div className="bg-blue h-[35%] border-b-3 border-black flex justify-center items-center">
              <Link
                className="pointer-events-auto relative z-50 hover:underline"
                to="/accueil"
                onClick={() => setisOuvert(false)}
              >
                Accueil
              </Link>
            </div>
            <div className="h-[65%] flex justify-center items-center">
              <Link
                className="pointer-events-auto relative z-50 hover:text-Myred"
                to="/about"
                onClick={() => setisOuvert(false)}
              >
                Qui sont-ils ?
              </Link>
            </div>
          </div>

          <div className="Menu_Colonne2 w-2/4 border-r-3 border-black h-[85vh] flex justify-center items-center">
            <Link
              className="pointer-events-auto relative z-50 hover:underline"
              to="/infos"
              onClick={() => setisOuvert(false)}
            >
              Infos
            </Link>
          </div>

          <div className="Menu_Colonne3 w-2/4 border-r-3 border-black h-[85vh]">
            <div className="h-[70%] flex justify-center items-center border-b-3 border-black">
              <Link
                className="pointer-events-auto relative z-50 hover:text-Myred"
                to="/Oeuvres"
                onClick={() => setisOuvert(false)}
              >
                Oeuvres
              </Link>
            </div>
            <div className="h-[30%] flex justify-center items-center bg-beige">
              <Link
                className="pointer-events-auto relative z-50 hover:text-Myred"
                to="/Contacts"
                onClick={() => setisOuvert(false)}
              >
                Contacts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
