// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div className="App bg-Background w-full h-screen">
        <Header />
        <Menu />
        <Routes>
        <Route path="/accueil" element={<Accueil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
