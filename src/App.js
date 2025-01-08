import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Imports Composants
import Tout from "./components/Tout";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Infos from "./components/Infos";
import Artistes from "./components/Artistes";
import Oeuvres from "./components/Oeuvres";
import Contacts from "./components/Contacts";
import Counter from "./components/Counter";
import Cookie from "./components/Cookies";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router basename="/Arp">
      <div className="App overflow-x-hidden max-w-screen h-screen bg-Background">
        <Counter />
        <Header />
        <Menu />
        <div className="AllSections flex flex-col  top-[6.8rem] h-auto w-full max-w-screen overflow-x-hidden bg-Background relative">
          <div className="absolute lg:left-[52.25%] md:left-[49.7%] sm:left-[49.7%] phone:left-[49.6%] top-0 bottom-0 w-[3px] bg-black z-0"></div>
          <div className="relative z-10 w-full">
            <Cookie />
            <Routes>
              <Route path="/" element={<Tout />} />
              <Route path="/accueil" element={<Tout />} />
              <Route
                path="/about"
                element={
                  <div className="w-full max-w-screen overflow-x-hidden">
                    <Artistes />
                  </div>
                }
              />
              <Route
                path="/infos"
                element={
                  <div className="lg:w-full lg:max-w-screen md:w-full md:max-w-screen sm:w-full sm:max-w-screen phone:w-full phone:max-w-screenoverflow-x-hidden">
                    <Infos />
                  </div>
                }
              />
              <Route
                path="/Oeuvres"
                element={
                  <div className="w-full max-w-screen overflow-x-hidden">
                    <Oeuvres />
                  </div>
                }
              />
              <Route
                path="/contacts"
                element={
                  <div className="w-full max-w-screen overflow-x-hidden">
                    <Contacts />
                  </div>
                }
              />
              <Route
                path="*"
                element={
                  <div className="w-full max-w-screen overflow-x-hidden">
                    <NotFound />
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
