import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger from "../assets/icons/menuburger.svg";
import croix from "../assets/icons/croix.svg";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const ToggleMenu = () => {
    setisOpen((open) => !open);
  };
  return (
    <>
      <div className="ContainerBurger w-[20%] h-[20vh] bg-yellow border-l-3 border-r-3 border-b-3 border-black flex justify-center items-center cursor-pointer fixed z-20 right-0">
        <img
          src={burger}
          alt="burger"
          className="object-cover w-16"
          onClick={ToggleMenu}
        />
      </div>
      <div
        className={`Menu absolute z-20 bg-Background w-screen h-screen ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="w-screen h-[20vh] border-b-3 border-black">
          <div className="ContainerBurger w-[20%] h-[20vh] bg-yellow border-l-3 border-r-3 border-b-3 border-black flex justify-center items-center cursor-pointer absolute right-0">
            <img
              src={croix}
              alt="croix"
              className="object-cover w-16"
              onClick={ToggleMenu}
            />
          </div>
        </div>
        <div className="Part_liste w-[80.2%] flex">
          <div className="Menu_Colonne1 w-2/4 h-[80vh] border-r-3 border-black">
            <div className="bg-blue h-[35%] border-b-3 border-black font-Orbitron font-medium text-4xl flex justify-center items-center">
              <Link to="/accueil" onClick={() => setisOpen(false)}>
                Accueil
              </Link>
            </div>
            <div className="h-[65%] font-Orbitron font-medium text-4xl flex justify-center items-center">
              <Link to="/about">Qui sont-ils ?</Link>
            </div>
          </div>

          <div className="Menu_Colonne2 w-2/4 border-r-3 border-black h-[80vh] font-Orbitron font-medium text-4xl flex justify-center items-center">
            <Link to="/infos">Infos</Link>
          </div>

          <div className="Menu_Colonne3 w-2/4 border-r-3 border-black h-[80vh] font-Orbitron font-medium text-4xl">
            <div className="h-[70%] flex justify-center items-center border-b-3 border-black"><Link to="/Oeuvres">Oeuvres</Link></div>
            <div className="h-[30%] flex justify-center items-center bg-beige"><Link to="/Contacts">Contacts</Link></div>
              

              
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
