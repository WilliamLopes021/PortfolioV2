import { LuSunMedium, LuSunMoon } from "react-icons/lu";
import { PiListDashes } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import Button from "../components/Button";
import { useState } from "react";
import logo from "../assets/llogodois.png";
import { navLinks } from "../data/navLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const [isLight, setIsLight] = useState<boolean>(true);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleLight = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <header
      className={`p-6 w-full bg-slate-300 md:flex flex-col gap-3 md:flex-row md:items-center text-lg`}
    >
      <div className={`md:flex md:gap-10 md:w-full md:justify-between`}>
        <nav className="md:flex mr-auto ">
          <a href="#" className="">
            <img src={logo} alt="logotipo" className="w-2xs" />
          </a>
          <ul className={`hidden md:flex md:items-center md:gap-6`}>
            {navLinks.map((value) => {
              return (
                <li key={value.text} className="">
                  <a href={value.href}> {value.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden md:flex">
          <button onClick={() => toggleLight()} className="cursor-pointer">
            {isLight ? <LuSunMedium size={30} /> : <LuSunMoon size={30} />}
          </button>
          <Button text="Contate-me" />
        </div>
      </div>

      <button
        className="md:hidden top-19 right-20 absolute cursor-pointer"
        aria-label="abrir-menu"
        onClick={() => toggleMenu()}
      >
        {menuOpen ? <IoIosClose size={35} /> : <PiListDashes size={30} />}
      </button>
      <header className="md:hidden flex flex-col gap-8 text-xl">
        <nav className={`${menuOpen ? `flex flex-col` : `hidden`} md:hidden`}>
          <ul className={``}>
            {navLinks.map((value) => {
              return (
                <li key={value.text}>
                  <a href={value.href}> {value.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={`${menuOpen ? `flex ` : `hidden`} md:hidden items-center`}
        >
          <button onClick={() => toggleLight()} className="cursor-pointer">
            {isLight ? <LuSunMedium size={30} /> : <LuSunMoon size={30} />}
          </button>
          <Button text="Contate-me" />
        </div>
      </header>
    </header>
  );
}

export default Navbar;
