import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
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

function Oeuvres() {
  const [isotope, setIsotope] = useState(null);
  const gridRef = useRef(null);

  // Initialisation d'Isotope
  useEffect(() => {
    if (gridRef.current) {
      const iso = new Isotope(gridRef.current, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });

      setIsotope(iso);
    }
    // Cleanup à la destruction du composant
    return () => {
      if (isotope) {
        isotope.destroy();
      }
    };
  }, []);
  const handleFilterClick = (filterValue) => {
    if (isotope) {
      filterValue = filterValue === "*" ? "*" : `.${filterValue}`;
      isotope.arrange({ filter: filterValue });
    }
  };

  return (
    <>
      <section className="Oeuvres flex flex-col w-screen h-full box-border bg-Background relative">
        <div className="HAUT_Oeuvres w-full h-[20%]  border-r-3 border-b-3 border-black flex ">
          <div className="title border-r-3 border-black w-[40%] flex justify-center items-center h-full">
            <h1 className="font-Montserrat font-black text-6xl">Oeuvres</h1>
          </div>
          <div className="Infos_Contacts font-Orbitron text-2xl font-normal flex justify-between items-center w-[60%] pr-32 pl-32 relative">
            <div className="Filtre_tous">
              <button
                type="submit"
                className="hover:text-Myred"
                onClick={() => handleFilterClick("*")}
              >
                Tous
              </button>
            </div>
            <div className="Filtre_Sophie">
              <button
                type="submit"
                className="hover:text-Myred"
                onClick={() => handleFilterClick("Sophie")}
              >
                Sophie
              </button>
            </div>
            <div className="Filtre_Jean">
              <button
                type="submit"
                className="hover:text-Myred"
                onClick={() => handleFilterClick("Jean")}
              >
                Hans/Jean
              </button>
            </div>
          </div>
        </div>
        {/* Grille arrière */}
        <div className="Grille-Arriere w-full h-[80%] grid grid-cols-4 grid-rows-2 absolute bottom-0 z-10">
          <div className=" border-r-3 border-b-3 border-black"></div>
          <div className=" border-r-3 border-b-3 border-black"></div>
          <div className=" border-r-3 border-b-3 border-black"></div>
          <div className=" border-r-3 border-b-3 border-black"></div>
          <div className=" border-r-3 border-black"></div>
          <div className=" border-r-3 border-black"></div>
          <div className=" border-r-3 border-black"></div>
          <div className=" border-r-3 border-black"></div>
        </div>

        {/* Grille filtrable */}
        <div className="Grille-Filtrable w-full h-[80%] flex flex-wrap content-start gap-96 absolute z-20" ref={gridRef}>
          <div className="grid-item Jean  w-1/4 h-1/2 p-28 flex justify-center items-center ">
            <img src={Oeuvre1} alt="Oeuvre1" className="object-cover w-[90%]" />
          </div>
          <div className="grid-item Jean  w-1/4 h-1/2 p-28 flex justify-center items-center ">
            <img src={Oeuvre2} alt="Oeuvre2" className="object-cover w-[90%]" />
          </div>
          <div className="grid-item Sophie  w-1/4 h-1/2 h-1-2 p-28 flex justify-center items-center ">
            <img src={Oeuvre3} alt="Oeuvre3" className="object-cover w-[80%]" />
          </div>
          <div className="grid-item Sophie  w-1/4 h-1/2 p-28 flex justify-center items-center ">
            <img src={Oeuvre4} alt="Oeuvre4" className="object-cover w-[90%]" />
          </div>
          <div className="grid-item Jean  w-1/4 h-1/2 p-28 flex justify-center items-center ">
            <img src={Oeuvre5} alt="Oeuvre5" className="object-cover w-[90%]" />
          </div>
          <div className="grid-item Sophie  w-1/4 h-1/2 p-28 flex justify-center items-center ">
            <img src={Oeuvre6} alt="Oeuvre6" className="object-cover w-[90%]" />
          </div>
          <div className="grid-item Jean  w-1/4 h-1/2 p-28 flex justify-center items-center ">
            <img src={Oeuvre7} alt="Oeuvre7" className="object-cover w-[90%]" />
          </div>
          <div className="grid-item Sophie w-1/4 h-1/2 p-28 flex justify-center items-center ">
            <img src={Oeuvre8} alt="Oeuvre8" className="object-cover w-[90%]" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Oeuvres;
