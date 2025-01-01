// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Infos from "./components/Infos";

function App() {
  return (
    <Router>
      <div className="App relative h-screen overflow-y-hidden">
        <Header />
        <Menu />
        <div className="Sections flex flex-row absolute top-36 w-auto h-[80vh] box-border">
          <Accueil />
          <Infos />
        </div>
      </div>
    </Router>
  );
}

export default App;
