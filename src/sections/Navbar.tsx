import { LuSunMedium, LuSunMoon } from "react-icons/lu";
import { PiListDashes } from "react-icons/pi";
import Button from "../components/Button";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../data/navLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isLight, setIsLight] = useState<boolean>(true);


  return (
    <header
      className={`p-6 bg-slate-300 flex flex-col gap-3 md:flex-row md:justify-between md:items-center`}
    >
      <nav className="md:flex w-full">
        <a href="#" className="self-start">
          <img src={logo} alt="logotipo" className="w-2xs" />
        </a>

        <ul
          className={`${menuOpen ? `flex` : `hidden`} md:flex md:flex-row md:items-center md:gap-6 ml-auto mr-30 flex-col w-min`}
        >
          {navLinks.map((value) => {
            return (
              <li key={value.href} className="">
                <a href={value.href}> {value.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={`${menuOpen ? `flex` : `hidden`} md:flex md:flex-row md:gap-6 justify-end`}
      >
        <button onClick={() => setIsLight(!isLight)} className="cursor-pointer">
          {isLight ? <LuSunMedium size={30} /> : <LuSunMoon size={30} />}
        </button>
        <Button text="Contate-me" />
      </div>
      <button
        className="md:hidden top-13 right-20 absolute cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <PiListDashes size={30} />
      </button>
    </header>
  );
}

export default Navbar;
