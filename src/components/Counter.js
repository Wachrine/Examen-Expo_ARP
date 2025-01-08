import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

function Counter() {
  // Voulant que ce composant s'auto supprime après avoir effectué tous ses useEffects, j'ai crée 3 Hook useState retournant "false".
  // ---> Hook gérant la suppression du composant.
  // ---> Au début: le composant est visible.
  const [verifRemove, setverifRemove] = useState(false);
  // ---> J'utiliserai "seteffet1_terminé/seteffet2_terminé/seteffet3_terminé(true)" dans les useEffects pour indiquer la fin des animations.
  const [effet1_terminé, seteffet1_terminé] = useState(false);
  const [effet2_terminé, seteffet2_terminé] = useState(false);
  const [effet3_terminé, seteffet3_terminé] = useState(false);

  // 1) Création et initialisation du Hook useState. Je crée une variable ayant l'état de initial et une variable de mise à jour.
  const [counter, setCounter] = useState(0);
  // 2) Création du useEffect permettant d'appliquer une mise à jour de l'état après que le composant soit monté.
  useEffect(() => {
    // Introduction d'un compteur s'incrémentant toutes les 28 millisecondes. Il s'incrémente de 1 jusque 100.
    const intervalle = setInterval(() => {
      setCounter((count) => {
        // Condition ---> Si le compteur est supérieur ou égale à 100, il s'arrête sinon il continue d'incrémenter.
        if (count >= 100) {
          clearInterval(intervalle);
          // revoi de la valeur
          return count;
        }
        return count + 1;
      });
      seteffet1_terminé(true);
    }, 20);

    // Nettoyage
    return () => clearInterval(intervalle);
  }, [counter]);

  // Animation GSAP du nombre
  const AnimNumberRef = useRef(null);
  useEffect(() => {
    const CompleteNumber = gsap.timeline({
      onComplete: () => {
        seteffet2_terminé(true);
      },
    });
    CompleteNumber.to(AnimNumberRef.current, { delay: 2.5, opacity: 0 });
    // Nettoyage
    return () => {
      gsap.killTweensOf(AnimNumberRef);
    };
  }, []);

  // Animation GSAP des barres
  // 1) Création et initialisation d'un useRef avec un tableau.
  const AnimBarRefs = useRef([]);
  const Barre = AnimBarRefs.current;

  useEffect(() => {
    const CompleteBarre = gsap.timeline({
      onComplete: () => {
        seteffet3_terminé(true);
      },
    });
    CompleteBarre.to(AnimBarRefs.current, {
      delay: 2.5,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });
    // Nettoyage de chaque barre à l'aide de "foreach".
    return () => {
      Barre.forEach((e) => gsap.killTweensOf(e));
    };
  }, []);

  // Si "effet1_terminé" et "effet2_terminé" et "effet3_terminé" sont terminés alors "setverifRemove(true)" est déclenché et le composant est supprimé.
  useEffect(() => {
    if (effet1_terminé && effet2_terminé && effet3_terminé) {
      setverifRemove(true);
    }
  }, [effet1_terminé, effet2_terminé, effet3_terminé]); // useEffect ne se déclenche uniquement si l'état des variables "effet1_terminé",etc change.
  // Suppression
  if (verifRemove) {
    return null;
  }
  return (
    <>
      <h1
        className="fixed w-full h-full flex justify-end items-end z-900 text-white font-Orbitron font-bold lg:text-9xl md:text-7xl sm:text-4xl phone:text-7xl lg:pb-7 lg:pr-28 md:pb-7 md:pr-28 sm:pb-7 sm:pr-28 phone:pb-4 phone:pr-10"
        ref={AnimNumberRef}
      >
        {counter}
      </h1>
      <div className="overlay fixed w-screen h-screen z-800 flex">
        <div
          className="barre w-[25%] h-[105vh] bg-black"
          ref={(b) => (AnimBarRefs.current[0] = b)}
        ></div>
        <div
          className="barre w-[25%] h-[105vh] bg-black"
          ref={(b) => (AnimBarRefs.current[1] = b)}
        ></div>
        <div
          className="barre w-[25%] h-[105vh] bg-black"
          ref={(b) => (AnimBarRefs.current[2] = b)}
        ></div>
        <div
          className="barre w-[25%] h-[105vh] bg-black"
          ref={(b) => (AnimBarRefs.current[3] = b)}
        ></div>
      </div>
    </>
  );
}

export default Counter;
