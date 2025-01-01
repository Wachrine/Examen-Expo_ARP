import React from "react";
import Portrait1 from "../assets/Images/portrait couple.jpg";
import fleche from "../assets/Images/fleche_KeepScroll.svg";
import FondImage from "../assets/Images/Fond_Portrait.png";
import Portrait2 from "../assets/Images/sophie_jean.png";
import Ligne from "../assets/Images/Artiste_ligne.svg";

function Infos() {
  return (
    <>
      <section className="Artistes flex w-screen h-full box-border bg-Background border-l-3 border-black relative">
        <div className="FondImage w-full h-full absolute z-10">
          <img
            src={FondImage}
            alt="FondImage"
            className="object-cover w-[22%] absolute bottom-0 right-0"
          />
          <img
            src={Ligne}
            alt="Ligne"
            className="object-cover w-[15%] absolute bottom-12 left-52"
          />
        </div>

        <div className="colonne1 w-1/5  border-r-3 border-black">
          <div className="HAUT">
            <img
              src={Portrait1}
              alt="Fontaine"
              className="w-full h-[100%] opacity-45"
            />
          </div>
          <div className="BAS"></div>
        </div>
        <div className="colonne2 w-3/5">
          <div className="HAUT">
            <div className="text_pres font-Orbitron font-normal text-lg text-center flex justify-center items-center h-full pl-20 pr-20 pt-12 pb-12">
              <p>
                <span className="font-bold">Hans/Jean Arp </span> (1886–1966) et{" "}
                <span className="font-bold">Sophie Taeuber-Arp </span>
                (1889–1943), deux artistes majeurs de l’avant-garde du{" "}
                <span className="font-bold">XXe siècle</span>, comptent parmi
                les couples d’artistes les plus célèbres. Ils se rencontrent à
                Zurich en 1915 et ne se quittent plus.{" "}
                <span className="font-bold">Pionniers de l’art abstrait </span>,
                ils créent une œuvre unique ; tous deux sont doués et explorent
                de nombreux genres. Comme d’autres couples d’artistes, ils
                développent une intimité non seulement émotionnelle mais aussi
                artistique, car ils suivent de près la création de l’œuvre de
                leur partenaire et discutent intensément de leurs aspirations.
                Du <span className="font-bold">dessin</span> à la{" "}
                <span className="font-bold">construction</span>, du{" "}
                <span className="font-bold">textile</span> à la{" "}
                <span className="font-bold">peinture murale</span>, chaque forme
                rythme leur vie, ouvrant l’abstraction géométrique et organique
                à la danse, au décor, à l’architecture, à la sculpture et aux
                arts appliqués. 
              </p>
            </div>
          </div>
          <div className="BAS bg-Myred"></div>
        </div>
        <div className="colonne3 w-1/5 border-r-3 border-l-3 border-black">
          <div className="KeepScrolling flex flex-col justify-center items-center h-[40%]">
            <img src={fleche} alt="fleche" className="object-cover w-32" />
            <p className="font-Orbitron font-normal text-xl mt-7">
              Keep Scrolling
            </p>
          </div>
          <div className="h-[60%] border-t-3 border-black relative">
            <img src={Portrait2} alt="FondImage" className="object-cover w-60 absolute z-20 bottom-14" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Infos;
