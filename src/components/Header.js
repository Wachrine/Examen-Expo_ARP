import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header() {
  return (
    <>
      <header className="flex w-full  border-opacity-80 border-b-3 border-black h-[15vh] fixed z-400 bg-Background bg-opacity-65 backdrop-blur-lg">
        <div className="ContainerTitle w-[80%] h-full flex items-center">
          <li className="Header_Title font-Orbitron lg:text-4xl md:text-2xl sm:text-xl phone:text-xl pl-10 font-medium list-none">
            <Link to="/">Exposition</Link>
          </li>
        </div>
        <Menu />
      </header>
    </>
  );
}

export default Header;
