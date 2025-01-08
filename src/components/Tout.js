import Accueil from "./Accueil";
import Infos from "./Infos";
import Artistes from "./Artistes";
import Oeuvres from "./Oeuvres";
import Contacts from "./Contacts";

function Tout() {
  return (
    <>
      <Accueil />
      <div className="mt-28 border-t-3 border-black"><Infos /></div>
      <div className="mt-28 border-t-3 border-black"><Artistes /></div>
      <div className="mt-28 border-t-3 border-black"><Oeuvres /></div>
      <div className="mt-28 border-t-3 border-black"><Contacts /></div>
    </>
  );
}

export default Tout;
