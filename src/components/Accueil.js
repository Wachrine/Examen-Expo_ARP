import React, { useEffect, useRef } from "react";
// npm install gsap
import gsap from "gsap";
// Imports des Images
import Logo from "../assets/Images/Logo.png";
import Oeuvre1 from "../assets/Images/Composition_dada_Arp.png";
import Oeuvre2 from "../assets/Images/OeuvresLine.png";
import Oeuvre3 from "../assets/Images/OeuvresOrganiques.png";
import Oeuvre4 from "../assets/Images/picksimg_large-5.png";
import Oeuvre5 from "../assets/Images/etoile_sculpture.png";

function Accueil() {
  // ----> Animation pour les images qui se déplaceront en suivant le curseur:
  // 1) Création et initialisation de 2 Hook useRef dont l'un sera le container de mes images et l'autre sera pour mes images.
  const ContainerImagesRef = useRef(null);
  // useRef contenant un tableau vide.
  const MyImagesRef = useRef([]);

  // 2) Création du useEffect permettant d'appliquer l'animation après que le composant soit monté.
  useEffect(() => {
    // Création de la fontion Mouse:
    const Mouse = (e) => {
      // a) Récupération de la position du curseur.
      //  J'utilise la méthode "getBoundingClientRect()" pour pouvoir récupérer les informations de manière détaillées (géométriques).
      const { clientX: mouseX, clientY: mouseY } = e;
      // console.log(e);
      const { left, top, width, height } =
        ContainerImagesRef.current.getBoundingClientRect();
      // Calcule de la position du curseur par rapport à la largeur et hauteur du container de mes images.
      const offsetX = mouseX - left - width / 2;
      const offsetY = mouseY - top - height / 2;

      // b) Application de l'Animation ----> J'applique mon animation en utilisant gsap et en récupérant les données de mon curseur. 
      // Enfin, mes images pourront se déplacer vers lui.
      gsap.to(MyImagesRef.current, {
        duration: 0.8,
        x: offsetX / 12,
        y: offsetY / 12,
        ease: "power2.out",
      });
    };
    // 3) Enfin, j'attribut au container de mes images l'évenement "mousemove" et j'appel ma fonction "Mouse".
    // ----> L'évenement "mousemove" est déclanché à chaque fois que la souris bouge et du coup à chaque déplacement j'appel la fonction Mouse pour récupérer les données de sa positon, faire le rapport avec le container de mes images et j'applique ensuite l'animation.
    ContainerImagesRef.current.addEventListener("mousemove", Mouse);

    // Nettoyage de l'animation gsap.
    return () => {
      gsap.killTweensOf(MyImagesRef.current);
    };
  }, []);
  const addToRefs = (el) => {
    if (el && !MyImagesRef.current.includes(el)) {
      MyImagesRef.current.push(el);
    }
};


  return (
    <>
      <section
        className="Accueil grid lg:grid-cols-[23%_58%_19%] md:grid-cols-[23%_58.9%_18.1%] sm:grid-cols-[23%_58.9%_18.1%] phone:grid-cols-[50%_50%_50%] lg:grid-rows-[70%_30%] phone:grid-rows-[50%_50%] box-border h-[85vh] bg-Background pointer-events-auto border-b-3 border-black"
        ref={ContainerImagesRef}
      >
        <div className="Container_image grid-item item bordure-grid-item items-center">
          <img
            src={Oeuvre1}
            alt="Oeuvre1"
            className="object-cover lg:w-48 md:w-44 sm:w-24 phone:w-20"
            ref={addToRefs}
          />
        </div>
        <div className="grid-item item  bordure-grid-item items-center">
          <img
            src={Logo}
            alt="Logo"
            className="object-contain lg:w-72 md:w-44 sm:w-36 phone:w-32"
          />
        </div>
        <div className="grid-item item  flex-col">
          <div className="Container_image flex flex-col justify-center items-center h-[45%]">
            <img
              src={Oeuvre3}
              alt="Oeuvre3"
              className="object-cover lg:w-32 md:w-24 sm:w-16 phone:w-4"
              ref={addToRefs}
            />
          </div>
          <div className="flex flex-col items-center justify-center border-t-3 border-black h-[55%] bg-beige">
            <p className="font-Orbitron font-bold lg:text-xl md:text-lg sm:text-sm phone:text-[20%]">
              20.09.2024
            </p>
            <p className="font-Orbitron font-bold lg:text-xl md:text-lg sm:text-sm phone:text-[20%]">
              &gt;
            </p>
            <p className="font-Orbitron font-bold lg:text-xl md:text-lg sm:text-sm phone:text-[20%]">
              19.01.2025
            </p>
          </div>
        </div>
        <div className="grid-item bordure-grid-item bg-blue flex-col">
          <div className="h-14 flex items-center">
            <p className="phrase lg:pl-[10%] md:pl-[10%] sm:pl-[10%] phone:pl-[10%]">
              Friends,
            </p>
          </div>

          <div className="h-14 flex items-center">
            <p className="phrase lg:pl-[35%] md:pl-[25%] sm:pl-[25%] phone:pl-[25%]">
              Lovers,
            </p>
          </div>

          <div className="h-14 flex items-center">
            <p className="phrase lg:pl-[60%] md:pl-[45%] sm:pl-[40%] phone:pl-[40%]">
              Partners
            </p>
          </div>
        </div>
        <div className="grid-item bordure-grid-item w-full h-full">
          <div className="Container_image oeuvre_bas border-r-3 border-black w-[40%]">
            <img
              src={Oeuvre2}
              alt="Oeuvre2"
              className="object-cover lg:w-28 md:w-24 sm:w-20 phone:w-10"
              ref={addToRefs}
            />
          </div>
          <div className="Container_image oeuvre_bas w-[60%]">
            <img
              src={Oeuvre5}
              alt="Oeuvre5"
              className="object-cover lg:w-24 md:w-20 sm:w-16 phone:w-16"
              ref={addToRefs}
            />
          </div>
          <div></div>
        </div>
        <div className="Container_image grid-item">
          <img
            src={Oeuvre4}
            alt="Oeuvre4"
            className="object-cover lg:w-36 md:w-28 sm:w-14 phone:w-14"
            ref={addToRefs}
          />
        </div>
      </section>
    </>
  );
}

export default Accueil;
