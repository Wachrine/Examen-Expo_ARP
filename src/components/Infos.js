import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// Imports Images
import logoBOZAR from "../assets/Images/bozar_logo.png";
import iconCercle from "../assets/Images/cercleBozar.png";
import imageMusee from "../assets/Images/bozar_image.jpg";
import Fleche_Concours from "../assets/Images/fleche_Concours.svg";
import Fontaine from "../assets/Images/fontaine dada.png";

function Infos() {
  // Animation GSAP
  // 1) Création et initialisation d'un useRef permettant de viser ensuite l'élément du DOM à animer.
  const ArrowRef = useRef(null);

  // 2) Création du useEffect permettant d'appliquer l'animation après que le composant soit monté.
  // ----> pour pouvoir appliquer mon animation je dois utiliser "ref.current" donc dans ce cas "ArrowRef.current".
  // Je stock la valeur du DOM dans "current".
  useEffect(() => {
    gsap.fromTo(
      ArrowRef.current,
      {
        y: -15,
      },
      {
        y: 9,
        duration: 1,
        repeat: -1,
      }
    );
    // 3) Au démontage, nettoyage des animations.
    return () => {
      gsap.killTweensOf(ArrowRef);
    };
  }, []);
  return (
    <>
      <section className="Infos flex flex-col h-[85vh] w-full box-border relative bg-Background border-b-3 border-black">
        <div className="Fontaine w-full h-full absolute z-20">
          <img
            src={Fontaine}
            alt="Fontaine"
            className="lg:w-32 md:w-32 sm:w-32 phone:w-20 object-cover absolute lg:bottom-28 lg:left-[22%] md:bottom-28 md:left-[17%] sm:bottom-28 sm:left-[15%] phone:bottom-28 phone:left-[40%]"
          />
        </div>
        <div className="HAUT flex relative">
          <div className="w-full absolute">
            <img
              src={iconCercle}
              alt="iconCercle"
              className="object-cover lg:w-24 md:w-20 sm:w-16 phone:w-12 absolute lg:top-32 lg:left-[49%] md:left-[45%] md:top-40 sm:left-[46%] sm:top-40 phone:left-[44%] phone:top-40"
            />
          </div>

          <div className="GCH border-r-3 border-black xl:w-[55%] max-2xl:w-[55%] w-[55%] lg:w-[55%] md:w-[50%] sm:w-[50%] phone:w-[50%] font-Orbitron font-normal lg:text-lg md:text-xs sm:text-xs phone:text-[55%] lg:text-left lg:flex lg:justify-center lg:items-center lg:h-full
          md:text-left md:flex md:justify-center md:items-center md:h-full sm:text-left sm:flex sm:justify-center sm:items-center sm:h-full phone:text-left phone:flex phone:justify-center phone:items-center phone:h-full ">
            <p className="Texte absolute z-30 xl:pl-20 xl:pr-20 max-2xl:pl-20 max-2xl:pr-20 lg:pl-20 lg:pr-20 lg:pt-0 lg:pb-12 md:pl-16 md:pr-16 md:pt-4 md:pb-4 sm:pl-12 sm:pr-12 sm:pt-4 sm:pb-4 phone:pl-6 phone:pr-6 phone:pt-12 phone:pb-12">
              <span className="font-bold lg:text-xl md:text-xl sm:text-xl phone:text-[70%]">
                BOZAR
              </span>
              présente une exposition immersive dédiée à
              <span className="font-bold"> Hans/Jean Arp </span>
              et <span className="font-bold">Sophie Taeuber-Arp</span>, couple
              emblématique de l’avant-garde du XXe siècle. Plongez dans leur
              univers poétique et abstrait, où dadaïsme et art géométrique
              s’entrelacent. Sculptures, textiles, peintures et installations
              vous invitent à explorer leur vision commune, entre dialogue
              artistique et créativité foisonnante.
            </p>
          </div>

          <div className="DR max-2xl:w-[50%] xl:w-[50%] lg:w-[45%] md:w-[50%] sm:w-[50%] phone:w-[50%]">
            <div className="flex justify-center items-center h-full">
              <img
                src={logoBOZAR}
                alt="logoBOZAR"
                className="object-cover lg:w-96 md:w-48 sm:w-36 phone:w-20"
              />
            </div>
          </div>
        </div>

        <div className="BAS flex relative">
          <div className="w-full h-full absolute">
            <img
              src={Fleche_Concours}
              alt="Fleche_Concours"
              className="object-cover cursor-pointer lg:w-28 md:w-28 sm:w-28 phone:w-10 absolute lg:bottom-16 lg:right-14 rotate-90 md:right-0 md:bottom-16 sm:right-0 sm:bottom-20  phone:right-0 phone:bottom-8"
              ref={ArrowRef}
            />
          </div>
          <div className="border-r-3  border-black h-full lg:w-1/4 md:w-1/4 sm:w-1/4 phone:w-2/4">
            <img
              src={imageMusee}
              alt="imageMusee"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="bg-blue flex flex-col justify-center items-center lg:w-3/4 md:w-3/4 sm:w-3/4 phone:w-2/4 phone:pl-2 phone:pr-2">
            <h2 className="font-Montserrat font-bold lg:text-3xl md:text-lg sm:text-base phone:text-xs">
              Participez dès maintenant au concours !
            </h2>
            <p className="font-Orbitron font-normal lg:text-base md:text-base sm:text-base phone:text-[50%] lg:w-72 md:w-72 sm:w-72 phone:w-44 lg:text-center md:text-center sm:text-center phone:text-left">
              et tentez de gagner des tickets pour l’exposition
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Infos;
