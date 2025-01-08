import React, { useEffect, useState } from "react";
// npm install js-cookie
// import du js-cookie
import Cookies from "js-cookie";

function CookieBanner() {
  // 1) création et initialisation du Hook useState. Je créer 2 variable, "Isvisible" contient l'état de départ tandis que "setIsvisible" servira à apporter une mise à jour de l'état.
  const [Isvisible, setIsvisible] = useState(false);

  // 2) Création du Hook useEffect permettant de mettre à jour l'état de mon cookie après que le composant soit monté.
  // ----> Le Hook verifi si mon cookie existe pas. Si c'est c'est le cas, il met à jour l'état de celui-ci et la bannière est reaffichée.
  // ----> "Cookies.get" est une métode fournie par "js-cookie" permettant la récupération de la valeur d'un cookie.
  useEffect(() => {
    if (!Cookies.get("MyCookieArp")) {
      console.log("Mise à jour");
      setIsvisible(true);
    }
  }, []);
  // 3) Fonction pour le bouton "Refuser".
  // ----> A l'intérieur de cette fonction, j'utilise la méthode "remove" de la bibliothèque js-cookie pour supprimer le Cookie.
  // Je lui ai aussi mis un chemin pour être sûr qu'il soit supprimé partout dans mon site.
  const Refuser = () => {
    // Supprimer le cookie
    Cookies.remove("MyCookieArp", { path: "/" });
    console.log("Supprimé ! :", Cookies.get("MyCookieArp"));
    setIsvisible(false);
  };
  // 4) Fonction pour le bouton "Accepter".
  // ----> A l'intérieur de cette fonction, j'utilise la méthode "set" de la bibliothèque js-cookie pour ajouter le Cookie.
  // Je lui ai attribué un nom: "CookieArp", une valeur: "JeSuisunCookie", une durée: "365jours" et un chemin global.
  const Accepter = () => {
    Cookies.set("MyCookieArp", "JeSuisunCookie", { expires: 365, path: "/" });
    console.log("Cookie crée ! :", Cookies.get("MyCookieArp"));
    setIsvisible(false);
  };
  // 5) Si la Bannière de mon cookie n'est pas visible, alors ça retourne null et donc mon élément ne sera pas rendu.
  if (!Isvisible) {
    return null;
  }
  return (
    <div className="container_cookie relative w-full h-full">
      <div className="fixed z-100 bottom-0 w-full h-[35%] flex justify-between items-end">
        <div className="Banner_cookie w-full h-[40%] bg-white border-3 border-black bg-opacity-95 flex">
          <div className="msg h-full lg:w-[75%] md:w-[65%] sm:w-[60%] phone:w-[60%] flex justify-center items-center font-Orbitron font-medium lg:text-base md:text-sm sm:text-xs phone:text-[55%]">
            <p className="pl-8">
              Notre site utilise des cookies pour améliorer votre expérience. En
              continuant, vous acceptez notre politique de cookies.
            </p>
          </div>
          <div className="btns_cookie flex lg:gap-9 md:gap-4 phone:gap-2 justify-center items-center lg:w-[25%] md:w-[35%] sm:w-[40%] phone:w-[40%] font-Orbitron font-normal lg:text-base md:text-sm sm:text-xs phone:text-[50%]">
            <button
              className="bg-white border-2 border-black h-[40%] Padding-Btns"
              type="submit"
              // Création d'un évenement click dans lequel j'introduit une fonction anonyme permettant d'indiquer que "Refuser" ne doit être executé seulement à l'évenement click.
              onClick={() => Refuser()}
            >
              Refuser
            </button>
            <button
              className="bg-black border-3 border-black h-[40%] text-white Padding-Btns"
              type="submit"
              onClick={() => Accepter()}
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
