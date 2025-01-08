import React, { useState,useRef } from "react";
// Imports IMAGES
import illu1 from "../assets/Images/Illu1_Contact.png";
import illu2 from "../assets/Images/forme demi_cercle2.png";

function Contacts() {
  // 1) Création du Hook useState avec la variable d'état initial et la variable d'état de mise à jour.
  // Dans le useState, j'initialise toutes les valeurs de mon formulaire en mettant des valeurs null.
  const [ValueForm, setValueForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    conf_Mail: "",
  });
  // Création du Hook useRef avec la variable d'état initial et la variable d'état de mise à jour pour viser mon formulaire.
  const FormulaireRef = useRef(null)
  // 2) Création de 2 autres useState pour les messages que j'initialise en lesB mettant vide.
  const [Erreur, setErreur] = useState("");
  const [Success, setSuccess] = useState("");

  // 3) Je crée une fonction permettant de mettre à jour les valeurs de mes inputs, qui étaient de base null (vide).
  // De plus, cette fonction sera appelée dès qu'on introduit quelque chose dans un input grâce à l'évenement onChange.
  const MiseAJour = (e) => {
    // "e.target" fait référence à un élément du DOM et donc ici mes inputs.
    const { name, value } = e.target;
    // J'appel "setValueForm" pour modifier les valeurs de mon formulaire.
    // ---> "...ValueForm" sert à retourner un nouvel objet.
    // Par exemple, au départ j'ai {nom:"",prenom:"",email:"",conf_email:""} et j'introduit, ensuite, une valeur dans l'input nom. Il me retourne alors {nom:"souraya",prenom:"",email:"",conf_email:""}.
    // De plus, chaque input est mis à jour individuellemnt.
    setValueForm({ ...ValueForm, [name]: value });
    // Les variables d'état pour les messages sont vide avant d'appuyer sur le bouton.
    setErreur("");
    setSuccess("");
  };
  // 4) -----> Traitement du formulaire:
  // Je crée une variable avec une fonction dans laquel je crée des variables pour chaque éléments de mon formulaire.
  // A chacune de ces variables je leur attribut la variable d'état initial.
  // Je crée ensuite une condition pour afficher mes messages ---> Si mes inputs sont vides, j'appel "setErreur()" avec un msg. Ou si l'email dans l'input "email" diffère avec l'email de l'input "confirmation email" alors j'appel "setErreur()" avec un msg.
  // Et finalement, si tout les champs sont remplis et corrects alors j'appel dans ce cas là la variable d'état setSuccess()
  const Click = (e) => {
    e.preventDefault();
    // Sert à envoyer toutes les données au fichier "email.php"
    const Data_Formulaire = new FormData(FormulaireRef.current)
    if (Data_Formulaire) {
      fetch("./../Email.php", {
        method: "POST",
        body: Data_Formulaire,
      });
    }
    const { nom, prenom, email, conf_Mail } = ValueForm;

    if (!nom || !prenom || !email || !conf_Mail) {
      setErreur("Veuillez remplir tous les champs");
      return;
    } else if (email !== conf_Mail) {
      setErreur("Les adresses mail ne correspondent pas");
      return;
    } else {
      setSuccess("Votre Formulaire est envoyé !");
    }
  };
  return (
    <>
      <section className="Contacts flex flex-col h-[85vh] box-border relative pointer-events-auto bg-Background">
        <div className="Illustration_Contacts absolute h-full w-full pointer-events-none">
          <img
            src={illu1}
            alt="illu1"
            className="object-cover lg:w-[12%] md:w-[12%] sm:w-[12%] phone:w-[18%] absolute lg:bottom-44 lg:left-[34%] md:bottom-48 md:left-[34%] sm:bottom-52 sm:left-[34%] phone:bottom-52 phone:left-[31%]"
          />
          <img
            src={illu2}
            alt="illu2"
            className="object-cover lg:w-[4%] md:w-[4%] sm:w-[4%] phone:w-[7%] absolute lg:bottom-5 lg:right-10 md:right-5 sm:right-4 phone:right-4 phone:bottom-5 -rotate-12"
          />
        </div>
        <div className="HAUT_Contacts w-full h-[20%] border-b-3 border-r-3 border-black flex">
          <div className="title border-r-3 border-black w-[40%] flex justify-center items-center h-full">
            <h1 className="font-Montserrat font-black lg:text-6xl md:text-3xl sm:text-2xl phone:text-xl">
              Concours
            </h1>
          </div>
          <div className="Infos_Contacts flex justify-between items-center w-[60%] lg:pr-32 lg:pl-32 md:pr-20 md:pl-20 sm:pr-5 sm:pl-5 phone:pr-5 phone:pl-5 relative">
            <div className="Adresse">
              <p className="font-Montserrat lg:text-2xl md:text-xl sm:text-sm phone:text-[90%] font-bold">
                Adresse
              </p>
              <p className="font-Orbitron lg:text-base md:text-sm sm:text-xs phone:text-[48%] font-normal lg:w-56 md:w-56 sm:w-56 phone:w-24">
                Rue Ravensteinstraat 23,1000 Brussels
              </p>
            </div>
            <div className="Email">
              <p className="font-Montserrat lg:text-2xl md:text-xl sm:text-sm phone:text-[90%] font-bold">
                Contacts
              </p>
              <p className="font-Orbitron lg:text-base md:text-sm sm:text-xs phone:text-[48%] font-normal underline">
                tickets@bozar.be
              </p>
            </div>
          </div>
        </div>
        <div className="BAS_Contacts w-full h-[80%] flex">
          <div className="Colonne1_Contact border-r-3 border-black w-[40%] flex flex-col justify-center items-center h-full">
            <div className="h-[50%] border-b-3 border-black flex justify-center items-center">
              <p className="font-Orbitron lg:text-lg md:text-base sm:text-sm phone:text-[45%] text-center text_concours_padding-lg text_concours_padding-md text_concours_padding-sm text_concours_padding-phone">
                Décrochez vos chances de vivre une expérience immersive !
                Participez à notre concours exclusif et tentez de remporter des
                billets pour l'exposition exceptionnelle qui vous attend.
              </p>
            </div>
            <div className="h-[50%]  w-full">
              <div className="flex flex-col gap-6 justify-center items-center h-full">
                {/* J'assigne un évenement click au bouton qui appel la fonction click */}
                <button
                  type="submit"
                  onClick={Click}
                  className="bg-blue border-2 border-black pl-5 pr-5 pt-2 pb-2 font-Orbitron text-xl font-normal lg:scale-100 md:scale-100 sm:scale-100 phone:scale-50  transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  Envoyer
                </button>
                {/* Affichage de mes message */}
                {/* Si c'est une erreur, il affiche le message d'erreur */}
                <p className="font-Orbitron text-lg text-red-700 ml-3">
                  {Erreur}
                </p>
                {/* Si c'est un succes, il affiche le message de succes*/}
                <p className="font-Orbitron text-lg text-green-700 ml-3">
                  {Success}
                </p>
              </div>
            </div>
          </div>
          <div className="Colonne2_Contact w-[60%] flex h-full justify-center items-center">
            <form className="flex flex-col gap-5 w-[80%] max-w-[400px]" ref={FormulaireRef}>
              <div className="Container_prenom w-full">
                {/* A chacun de mes inputs, j'assigne un évenement onChange appelant la fonction de mise à jour des données */}
                <label className="flex flex-col font-Orbitron lg:text-xl md:text-xl sm:text-xl phone:text-sm text-left">
                  Prénom
                  <input
                    type="text"
                    className="prenom border_form lg:text-xl md:text-xl sm:text-xl phone:text-sm font-Montserrat w-full p-2 mt-1"
                    name="prenom"
                    value={ValueForm.prenom}
                    onChange={MiseAJour}
                  />
                </label>
              </div>
              <div className="Container_nom w-full">
                <label className="flex flex-col font-Orbitron lg:text-xl md:text-xl sm:text-xl phone:text-sm text-left">
                  Nom
                  <input
                    type="text"
                    className="nom border_form text-lg font-Montserrat w-full p-2 mt-1"
                    name="nom"
                    value={ValueForm.nom}
                    onChange={MiseAJour}
                  />
                </label>
              </div>
              <div className="Container_mail w-full">
                <label className="flex flex-col font-Orbitron lg:text-xl md:text-xl sm:text-xl phone:text-sm text-left">
                  Email
                  <input
                    type="text"
                    className="Mail border_form lg:text-xl md:text-xl sm:text-xl phone:text-sm font-Montserrat w-full p-2 mt-1"
                    name="email"
                    value={ValueForm.email}
                    onChange={MiseAJour}
                  />
                </label>
              </div>
              <div className="Container_conf_email w-full">
                <label className="flex flex-col font-Orbitron lg:text-xl md:text-xl sm:text-xl phone:text-sm text-left">
                  Confirmation email
                  <input
                    type="text"
                    className="conf_Mail border_form text-lg font-Montserrat w-full p-2 mt-1"
                    name="conf_Mail"
                    value={ValueForm.conf_Mail}
                    onChange={MiseAJour}
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
