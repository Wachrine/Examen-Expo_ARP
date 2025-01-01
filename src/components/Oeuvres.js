import React from "react";
// import FiltreSophie from "../assets/Images/illu filtre sophie.png";
// import FiltreJean from "../assets/Images/cercle_filtre_jean.png";

// IMAGES OEUVRES
import Oeuvre1 from "../assets/Oeuvres/Jean_1.jpg";
import Oeuvre2 from "../assets/Oeuvres/Jean_2.jpg";
import Oeuvre3 from "../assets/Oeuvres/Sculpture_Sophie.png";
import Oeuvre4 from "../assets/Oeuvres/Sophie_Lignes.jpg";
import Oeuvre5 from "../assets/Oeuvres/arp_construction_elementaire_1916.jpg";
import Oeuvre6 from "../assets/Oeuvres/elementary-forms-1917.jpg";
import Oeuvre7 from "../assets/Oeuvres/hans-jean-arp.png";
import Oeuvre8 from "../assets/Oeuvres/thumb_large.jpg";

function Infos() {
  return (
    <>
      <section className="Oeuvres flex flex-col w-screen h-full box-border bg-Background ">
        <div className="HAUT_Oeuvres w-full h-[20%] border-b-3 border-r-3 border-black flex">
          <div className="title border-r-3 border-black w-[40%] flex justify-center items-center h-full">
            <h1 className="font-Montserrat font-black text-6xl">Oeuvres</h1>
          </div>
          <div className="Infos_Contacts font-Orbitron text-2xl font-normal flex justify-between items-center w-[60%] pr-32 pl-32 relative">
            <div className="Filtre_Sophie">
              <p className="hover:text-Myred">Sophie</p>
            </div>
            <div className="Filtre_Jean">
              <p className="hover:text-Myred">Hans/Jean</p>
            </div>
          </div>
        </div>
        <div className="BAS_Oeuvres w-full h-[80%]">
          <div className="Range1_Oeuvres h-[50%] w-full border-b-3 border-black flex">
            <div className="Colonne_Oeuvres">
              <img
                src={Oeuvre1}
                alt="Oeuvre1"
                className="object-cover w-[60%]"
              />
            </div>
            <div className="Colonne_Oeuvres">
              <img
                src={Oeuvre2}
                alt="Oeuvre2"
                className="object-cover w-[60%]"
              />
            </div>
            <div className="Colonne_Oeuvres">
              <img
                src={Oeuvre3}
                alt="Oeuvre3"
                className="object-cover w-[35%]"
              />
            </div>
            <div className="Colonne_Oeuvres">
              <img
                src={Oeuvre4}
                alt="Oeuvre4"
                className="object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="Range2_Oeuvres h-[50%] w-full flex">
            <div className="Colonne_Oeuvres">
              <img
                src={Oeuvre5}
                alt="Oeuvre5"
                className="object-cover w-[45%]"
              />
            </div>
            <div className="Colonne_Oeuvres">
              <img
                src={Oeuvre6}
                alt="Oeuvre6"
                className="object-cover w-[50%]"
              />
            </div>
            <div className="Colonne_Oeuvres">
              <img
                src={Oeuvre7}
                alt="Oeuvre7"
                className="object-cover w-[40%]"
              />
            </div>
            <div className="Colonne_Oeuvres">
              <img
                src={Oeuvre8}
                alt="Oeuvre8"
                className="object-cover w-[50%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Infos;
