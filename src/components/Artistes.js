import React from "react";
import Portrait1 from "../assets/Images/portrait couple.jpg";
import FondImage from "../assets/Images/Fond_Portrait.png";
import Portrait2 from "../assets/Images/sophie_jean.png";
import Ligne from "../assets/Images/Artiste_ligne.svg";

function Artistes() {
  return (
    <>
      <section className="Artistes flex h-[85vh] box-border  border-b-3 border-black relative pointer-events-auto bg-Background">
        <div className="FondImage w-full h-full absolute z-10">
          <img
            src={FondImage}
            alt="FondImage"
            className="object-cover lg:w-[22%] absolute lg:bottom-16 lg:right-1 md:w-[27%] md:bottom-32 md:right-0 sm:w-[25%] sm:bottom-32 sm:right-0 phone:w-[30%] phone:bottom-32 phone:right-0"
          />
          <img
            src={Ligne}
            alt="Ligne"
            className="object-cover lg:w-[15%] md:w-[15%] sm:w-[15%] absolute lg:bottom-12 lg:left-52 md:bottom-24 md:left-32 sm:bottom-24 sm:left-32 phone:w-[25%] phone:bottom-[7rem] phone:left-10"
          />
        </div>

        <div className="colonne1 w-[20%]  border-r-3 border-black">
          <div className="HAUT">
            <img
              src={Portrait1}
              alt="Fontaine"
              className="w-full h-[100%] opacity-45"
            />
          </div>
          <div className="BAS"></div>
        </div>
        <div className="colonne2 w-[58%]">
          <div className="HAUT">
            <div className="text_pres font-Orbitron font-normal lg:text-base md:text-xs sm:text-xs phone:text-[45%] text-center flex justify-center items-center h-full lg:pl-20 lg:pr-20 lg:pt-12 lg:pb-12 md:pl-16 md:pr-16 md:pt-12 md:pb-12 sm:pl-14 sm:pr-14 sm:pt-12 sm:pb-12 phone:pl-10 phone:pr-10 phone:pt-12 phone:pb-12">
              <p>
                <span className="font-bold">Hans/Jean Arp </span> (1886–1966) et
                <span className="font-bold"> Sophie Taeuber-Arp </span>
                (1889–1943), deux artistes majeurs de l’avant-garde du
                <span className="font-bold">XXe siècle</span>, comptent parmi
                les couples d’artistes les plus célèbres. Ils se rencontrent à
                Zurich en 1915 et ne se quittent plus.
                <span className="font-bold">Pionniers de l’art abstrait </span>,
                ils créent une œuvre unique ; tous deux sont doués et explorent
                de nombreux genres. Comme d’autres couples d’artistes, ils
                développent une intimité non seulement émotionnelle mais aussi
                artistique, car ils suivent de près la création de l’œuvre de
                leur partenaire et discutent intensément de leurs aspirations.
                Du <span className="font-bold">dessin</span> à la
                <span className="font-bold">construction</span>, du
                <span className="font-bold">textile</span> à la
                <span className="font-bold">peinture murale</span>, chaque forme
                rythme leur vie, ouvrant l’abstraction géométrique et organique
                à la danse, au décor, à l’architecture, à la sculpture et aux
                arts appliqués. 
              </p>
            </div>
          </div>
          <div className="BAS bg-Myred"></div>
        </div>
        <div className="colonne3 w-[22%] border-r-3 border-l-3 border-black relative">
          <img
            src={Portrait2}
            alt="FondImage"
            className="object-cover absolute z-20 lg:w-60 lg:bottom-36 lg:right-14 md:w-80 md:bottom-44 md:right-8 sm:w-60 sm:bottom-44 sm:right-8 phone:w-60 phone:bottom-40 phone:right-4"
          />
        </div>
      </section>
    </>
  );
}

export default Artistes;
