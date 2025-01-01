import React from "react";
import logoBOZAR from "../assets/Images/bozar_logo.png";
import iconCercle from "../assets/Images/cercleBozar.png";
import imageMusee from "../assets/Images/bozar_image.jpg";
import Fleche_Concours from "../assets/Images/fleche_Concours.svg";
import Fontaine from "../assets/Images/fontaine dada.png";

function Infos() {
  return (
    <>
      <section className="Infos flex flex-col w-screen h-full box-border bg-Background relative">

          <div className="Fontaine w-full h-full absolute z-20">
            <img
              src={Fontaine}
              alt="Fontaine"
              className="w-32 object-cover absolute bottom-24 left-[23%]"
            />
          </div>


        <div className="HAUT flex relative">
          <div className="w-full absolute">
            <img
              src={iconCercle}
              alt="iconCercle"
              className="object-cover w-24 absolute top-32 left-[52%]"
            />
          </div>
          <div className="GCH border-r-3 border-l-3 border-black w-[55%]">
            <div className="text_pres font-Orbitron font-normal text-lg text-left flex justify-center items-center h-full pl-20 pr-20 pt-12 pb-12">
              <p>
                <span className="font-bold text-xl">BOZAR </span>
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
          </div>
          <div className="DR  w-[45%]">
            <div className="flex justify-center items-center h-full">
              <img
                src={logoBOZAR}
                alt="logoBOZAR"
                className="object-cover w-96"
              />
            </div>
          </div>
        </div>

        <div className="BAS flex relative">
          <div className="w-full h-full absolute">
            <img
              src={Fleche_Concours}
              alt="Fleche_Concours"
              className="object-cover w-32 absolute bottom-5 right-14"
            />
          </div>
          <div className="border-r-3 border-l-3 border-black h-full w-[30vw]">
            <img
              src={imageMusee}
              alt="imageMusee"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="bg-blue flex flex-col justify-center items-center w-[80vw]">
            <h2 className="font-Montserrat font-bold text-3xl">
              Participez dès maintenant au concours !
            </h2>
            <p className="font-Orbitron font-normal text-base w-72 text-center">
              et tentez de gagner des tickets pour l’exposition
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Infos;
