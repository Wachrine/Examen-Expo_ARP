import React from "react";
import illu1 from "../assets/Images/Illu1_Contact.png";
import illu2 from "../assets/Images/forme demi_cercle2.png";
function Contacts() {
  return (
    <>
      <section className="Contacts flex flex-col w-screen h-full box-border bg-Background relative">
        <div className="Illustration_Contacts absolute h-full w-full pointer-events-none">
        <img
                src={illu1}
                alt="illu1"
                className="object-cover w-[12%] absolute bottom-40 left-[34%]"
              />
               <img
                src={illu2}
                alt="illu2"
                className="object-cover w-[4%] absolute bottom-5 right-10 -rotate-12"
              />
        </div>
        <div className="HAUT_Contacts w-full h-[20%] border-b-3 border-r-3 border-black flex">
          <div className="title border-r-3 border-black w-[40%] flex justify-center items-center h-full">
            <h1 className="font-Montserrat font-black text-6xl">Concours</h1>
          </div>
          <div className="Infos_Contacts flex justify-between items-center w-[60%] pr-32 pl-32 relative">
            <div className="Adresse">
              <p className="font-Montserrat text-2xl font-bold">Adresse</p>
              <p className="font-Orbitron text-base font-normal w-56">
                Rue Ravensteinstraat 23,1000 Brussels
              </p>
            </div>
            <div className="Email">
              <p className="font-Montserrat text-2xl font-bold">Contacts</p>
              <p className="font-Orbitron text-base font-normal underline">
                tickets@bozar.be
              </p>
            </div>
          </div>
        </div>
        <div className="BAS_Contacts w-full h-[80%] flex">
          <div className="Colonne1_Contact border-r-3 border-black w-[40%] flex flex-col justify-center items-center h-full">
            <div className="h-[50%]">
              <p className="font-Orbitron text-lg text-center pl-20 pr-20 pt-12 pb-12">
                Décrochez vos chances de vivre une expérience immersive !
                Participez à notre concours exclusif et tentez de remporter des
                billets pour l'exposition exceptionnelle qui vous attend.
              </p>
            </div>
            <div className="h-[50%] border-t-3 border-black w-full">
              <div className="flex justify-center items-center h-full">
                <button className="bg-blue border-2 border-black pl-5 pr-5 pt-2 pb-2 font-Orbitron text-xl font-normal scale-100 transition-transform duration-300 ease-in-out hover:scale-110">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
          <div className="Colonne2_Contact w-[60%] flex h-full justify-center items-center">
            <form className="flex flex-col gap-5 w-[80%] max-w-[400px]">
              <div className="Container_prenom w-full">
                <label className="flex flex-col font-Orbitron text-xl text-left">
                  Prénom
                  <input
                    type="text"
                    className="prenom border_form text-lg font-Montserrat w-full p-2 mt-1"
                  />
                </label>
              </div>
              <div className="Container_nom w-full">
                <label className="flex flex-col font-Orbitron text-xl text-left">
                  Nom
                  <input
                    type="text"
                    className="nom border_form text-lg font-Montserrat w-full p-2 mt-1"
                  />
                </label>
              </div>
              <div className="Container_mail w-full">
                <label className="flex flex-col font-Orbitron text-xl text-left">
                  Email
                  <input
                    type="text"
                    className="Mail border_form text-lg font-Montserrat w-full p-2 mt-1"
                  />
                </label>
              </div>
              <div className="Container_conf_email w-full">
                <label className="flex flex-col font-Orbitron text-xl text-left">
                  Confirmation email
                  <input
                    type="text"
                    className="conf_Mail border_form text-lg font-Montserrat w-full p-2 mt-1"
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
