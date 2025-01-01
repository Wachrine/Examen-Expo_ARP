import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header className="flex w-full border-b-3 border-black h-[20vh] fixed z-10 bg-Background">
        <div className="ContainerTitle w-[80%] h-full flex items-center">
          <li className="Header_Title font-Orbitron text-4xl pl-10 font-medium list-none">
            <Link to="/home">Exposition</Link>
          </li>
        </div>
      </header>
    </> 
  );
}

export default Header;
