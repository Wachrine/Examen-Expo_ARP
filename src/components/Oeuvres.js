import React, { useEffect, useRef, useState } from "react";
// npm install isotope-layout
import Isotope from "isotope-layout";
// Imports IMAGES
import FiltreSophie from "../assets/Images/illu filtre sophie.png";
import FiltreJean from "../assets/Images/cercle_filtre_jean.png";
import Oeuvre1 from "../assets/Oeuvres/Jean_1.jpg";
import Oeuvre2 from "../assets/Oeuvres/Jean_2.jpg";
import Oeuvre3 from "../assets/Oeuvres/Sculpture_Sophie.png";
import Oeuvre4 from "../assets/Oeuvres/Sophie_Lignes.jpg";
import Oeuvre5 from "../assets/Oeuvres/arp_construction_elementaire_1916.jpg";
import Oeuvre6 from "../assets/Oeuvres/elementary-forms-1917.jpg";
import Oeuvre7 from "../assets/Oeuvres/hans-jean-arp.png";
import Oeuvre8 from "../assets/Oeuvres/thumb_large.jpg";

function Oeuvres() {
  // 1) Création de 2 Hook useState dont l'un sera pour mon filtre et l'autre pour le container de mes éléments à filtrer.
  const [Filtre, setFiltre] = useState(null);
  const gridRef = useRef(null);

  // 2) Création du useEffect permettant d'appliquer l'animation après que le composant soit monté.
  // Initialisation d'Isotope ---- > Si "gridRef.current" existe alors création de l'isotope avec "new Isotope".
  // J'appel, ensuite "setFiltre()" pour mettre à jour.
  useEffect(() => {
    if (gridRef.current) {
      const isotope_Filtre = new Isotope(gridRef.current, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });

      setFiltre(isotope_Filtre);
    }
    //Cleanup à la destruction du composant
    return () => {
      if (Filtre) {
        Filtre.destroy();
      }
    };
  }, []);
  // 3) Création de la fonction "handleFilterClick" pour férer le filtre.
  const handleFilterClick = (filterValue) => {
    if (Filtre) {
      // Si filterValue est égale à "*" alors affiche tout sinon il affiche le contenu de la class du bouton sur lequel on appuye.
      filterValue = filterValue === "*" ? "*" : `.${filterValue}`;
      // arrange(), étant une méthode isotope, permet de réorganiser le contenu selon le filtre.
      Filtre.arrange({ filter: filterValue });
    }
  };

  return (
    <>
      <section className="Oeuvres flex flex-col h-[80vh] box-border relative pointer-events-auto bg-Background  border-b-3 border-black">
        <div className="HAUT_Oeuvres w-full h-[20%]  border-r-3 border-b-3 border-black flex ">
          <div className="title border-r-3 border-black lg:w-[40%] md:w-[40%] sm:w-[30%] phone:w-[20%] flex justify-center items-center h-full">
            <h1 className="font-Montserrat font-black lg:text-6xl md:text-3xl sm:text-2xl phone:text-xl">
              Oeuvres
            </h1>
          </div>
          <div className="FILTRES font-Orbitron lg:text-xl md:text-sm sm:text-sm phone:text-sm font-normal flex lg:gap-24 md:gap-0 phone:gap-10 lg:w-[60%] md:w-[60%] sm:w-[70%] phone:w-[80%] h-full lg:pr-16 lg:pl-16 md:pr-16 md:pl-16 sm:pr-0 sm:pl-0 relative">
            <div className="Filtre_tous Filtre_align lg:w-[20%] md:w-[10%] sm:w-[10%] phone:w-[5%]">
              <button
                type="submit"
                className="hover:text-Myred focus:text-Myred"
                // Création d'un évenement click dans lequel j'introduit une fonction anonyme permettant d'indiquer que "handleFilterClick("*")" ne doit être executé seulement à l'évenement click.
                onClick={() => handleFilterClick("*")}
              >
                Tous
              </button>
            </div>
            <div className="Filtre_Sophie relative Filtre_align lg:w-[40%] md:w-[45%] sm:w-[45%] phone:w-[47,5%] md:justify-center">
              <button
                type="submit"
                className="hover:text-Myred focus:text-Myred absolute z-200"
                onClick={() => handleFilterClick("Sophie")}
              >
                Sophie
              </button>
              <img
                src={FiltreSophie}
                alt="FiltreSophie"
                className="object-cover z-0 lg:w-[67%]  md:w-[80%] sm:w-[40%]"
              />
            </div>
            <div className="Filtre_Jean Filtre_align md:justify-center lg:w-[40%] md:w-[45%] sm:w-[45%] phone:w-[47,5%]">
              <button
                type="submit"
                className="hover:text-Myred focus:text-Myred absolute z-200"
                onClick={() => handleFilterClick("Jean")}
              >
                Hans/Jean
              </button>
              <img
                src={FiltreJean}
                alt="FiltreJean"
                className="object-cover lg:w-60 md:w-44 sm:w-20 absolute z-0"
              />
            </div>
          </div>
        </div>
        {/* GRILLE DE FOND*/}
        <div className="Grille-Arriere w-full h-[80%] grid grid-cols-4 grid-rows-2 absolute bottom-0 z-10 overflow-x-hidden">
          <div className=" border-r-3 border-b-3 border-black bg-Myred"></div>
          <div className=" border-r-3 border-b-3 border-black"></div>
          <div className=" border-r-3 border-b-3 border-black"></div>
          <div className=" border-r-3 border-b-3 border-black"></div>
          <div className=" border-r-3 border-black"></div>
          <div className=" border-r-3 border-black bg-beige"></div>
          <div className=" border-r-3 border-black"></div>
          <div className=" border-r-3 border-black bg-blue"></div>
        </div>

        {/* GRILLE FILTRABLE */}
        <div
          className="Grille-Filtrable w-full h-[80%] flex flex-wrap content-start absolute z-20 md:gap-y-96"
          ref={gridRef}
        >
          <div className="grid-item Jean  w-1/4 h-1/2 oeuvres_padding-lg oeuvres_padding-md oeuvres_padding-sm  flex justify-center items-center">
            <img
              src={Oeuvre1}
              alt="Oeuvre1"
              className="object-cover lg:w-[90%] md:w-[100%] sm:w-[10%]"
            />
          </div>
          <div className="grid-item Jean  w-1/4 h-1/2 oeuvres_padding-lg oeuvres_padding-md oeuvres_padding-sm flex justify-center items-center">
            <img
              src={Oeuvre2}
              alt="Oeuvre2"
              className="object-cover lg:w-[90%] md:w-[100%] sm:w-[10%]"
            />
          </div>
          <div className="grid-item Sophie  w-1/4 h-1/2 h-1-2 oeuvres_padding-lg oeuvres_padding-md oeuvres_padding-sm flex justify-center items-center">
            <img
              src={Oeuvre3}
              alt="Oeuvre3"
              className="object-cover lg:w-[80%] md:w-[60%] sm:w-[10%]"
            />
          </div>
          <div className="grid-item Sophie  w-1/4 h-1/2 oeuvres_padding-lg oeuvres_padding-md oeuvres_padding-sm flex justify-center items-center">
            <img
              src={Oeuvre4}
              alt="Oeuvre4"
              className="object-cover lg:w-[90%] md:w-[60%] sm:w-[10%]"
            />
          </div>
          <div className="grid-item Jean  w-1/4 h-1/2 oeuvres_padding-lg oeuvres_padding-md oeuvres_padding-sm flex justify-center items-center">
            <img
              src={Oeuvre5}
              alt="Oeuvre5"
              className="object-cover lg:w-[90%] md:w-[60%] sm:w-[10%]"
            />
          </div>
          <div className="grid-item Sophie  w-1/4 h-1/2 oeuvres_padding-lg oeuvres_padding-md oeuvres_padding-sm flex justify-center items-center">
            <img
              src={Oeuvre6}
              alt="Oeuvre6"
              className="object-cover lg:w-[90%] md:w-[60%] sm:w-[10%]"
            />
          </div>
          <div className="grid-item Jean  w-1/4 h-1/2 oeuvres_padding-lg oeuvres_padding-md oeuvres_padding-sm flex justify-center items-center">
            <img
              src={Oeuvre7}
              alt="Oeuvre7"
              className="object-cover lg:w-[90%] md:w-[60%] sm:w-[10%]"
            />
          </div>
          <div className="grid-item Sophie w-1/4 h-1/2 oeuvres_padding-lg oeuvres_padding-md oeuvres_padding-sm flex justify-center items-center">
            <img
              src={Oeuvre8}
              alt="Oeuvre8"
              className="object-cover lg:w-[90%] md:w-[60%] sm:w-[10%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Oeuvres;
