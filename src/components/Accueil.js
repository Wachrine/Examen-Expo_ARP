import React from "react";
import Logo from "../assets/Images/Logo.png";
import Oeuvre1 from "../assets/Images/Composition_dada_Arp.png";
import Oeuvre2 from "../assets/Images/OeuvresLine.png";
import Oeuvre3 from "../assets/Images/OeuvresOrganiques.png";
import Oeuvre4 from "../assets/Images/picksimg_large-5.png";
import fleche from "../assets/Images/fleche_KeepScroll.svg";

function Accueil() {
  return (
    <>
      <section className="flex w-full h-[80vh] absolute bottom-0">
        <div className="colonne1 w-1/5  border-r-3 border-black">
          <div className="h-[70%] w-full flex justify-center items-center">
            <img src={Oeuvre1} alt="Oeuvre1" className="object-cover w-56" />
          </div>
          <div className="h-[30%] border-t-3 border-black bg-blue font-Orbitron font-bold text-xl">
            <div className="w-full h-full flex flex-col">
              <div className="h-14 flex items-center">
                <p className="pl-10">Friends,</p>
              </div>

              <div className="h-14 flex items-center">
                <p className="pl-20">Lovers,</p>
              </div>

              <div className="h-14 flex items-center">
                <p className="pl-28">Partners</p>
              </div>
            </div>
          </div>
        </div>
        <div className="colonne2 w-3/5">
          <div className="range1 w-full h-[70%] flex justify-center items-center">
            <img src={Logo} alt="Logo" className="object-cover w-72" />
          </div>
          <div className="range2 w-full flex h-[30%]">
            <div className="border-t-3 border-black w-[40%] flex justify-center items-center">
              <img src={Oeuvre2} alt="Oeuvre2" className="object-cover w-28" />
            </div>
            <div className="border-t-3 border-l-3 border-black w-[60%] flex justify-center items-center">
              <img src={Oeuvre3} alt="Oeuvre3" className="object-cover w-32" />
            </div>
          </div>
        </div>
        <div className="colonne3 w-1/5 border-l-3 border-black">
          <div className="range1 w-full h-[70%]">
            <div className="flex flex-col justify-center items-center h-[45%]">
              <img src={fleche} alt="fleche" className="object-cover w-32" />
              <p className="font-Orbitron font-normal text-xl mt-7">
                Keep Scrolling
              </p>
            </div>
            <div className="font-Orbitron font-bold text-xl flex flex-col items-center justify-center border-t-3 border-black h-[55%] bg-beige">
              <p>20.09.2024</p>
              <p>&gt;</p>
              <p>19.01.2025</p>
            </div>
          </div>
          <div className="range2 w-full h-[30%] border-t-3 border-black flex justify-center items-center">
              <img src={Oeuvre4} alt="Oeuvre4" className="object-cover w-36" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Accueil;
