// import { LuSunMedium, LuSunMoon } from "react-icons/lu";
import { PiListDashes } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import Button from "../components/Sections/Button";
import { useState } from "react";
import logo from "../assets/logoPreta.png";
import { navLinks } from "../constants/navLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  // const [isLight, setIsLight] = useState<boolean>(true);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // const toggleLight = () => {
  //   setIsLight((prev) => !prev);
  // };

  return (
    <header
      className={`p-6 px-10 w-full bg-bg text-text md:flex flex-col gap-3 md:flex-row md:items-center text-lg`}
    >
      <div className={`md:flex md:gap-10 md:w-full md:justify-between`}>
        <nav className="md:flex mr-auto ">
          <a href="#" className="hover:-translate-0.5 transition-all mx-4">
            <img src={logo} alt="logotipo" className="w-3xs" />
          </a>
          <ul className={`hidden md:flex md:items-center md:gap-6`}>
            {navLinks.map((value) => {
              return (
                <li
                  key={value.text}
                  className="hover:-translate-y-1 text-text hover:text-primary-hover transition-all cursor-pointer"
                >
                  <a
                    href={value.href}
                  >
                    {" "}
                    {value.text}
                  </a>
                  <span className="block w-full h-0.5 bg-border"></span>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden md:flex items-center justify-center">
          {/* <button onClick={() => toggleLight()} className="cursor-pointer">
            {isLight ? (
              <LuSunMedium size={30} color="#64748b" />
            ) : (
              <LuSunMoon size={30} color="#64748b" />
            )}
          </button> */}
          <Button color="primary" text="Contate-me" />
        </div>
      </div>

      <button
        className="md:hidden top-15 right-12 absolute cursor-pointer"
        aria-label="abrir-menu"
        onClick={() => toggleMenu()}
      >
        {menuOpen ? (
          <IoIosClose size={35} color={"#64748b"} />
        ) : (
          <PiListDashes size={30} color={"#64748b"} />
        )}
      </button>
      <header className="md:hidden text-text flex flex-col gap-8 items-end text-xl">
        <nav
          className={`${menuOpen ? `flex flex-col animate-flip-down animate-normal` : `hidden`} md:hidden`}
        >
          <ul className={``}>
            {navLinks.map((value) => {
              return (
                <li key={value.text} className="w-40 mb-2">
                  <a href={value.href} className="text-text">
                    {" "}
                    {value.text}
                  </a>
                  <span className="block w-full bg-border h-0.5"></span>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={`${menuOpen ? `flex ` : `hidden`} md:hidden items-center`}
        >
          {/* <button onClick={() => toggleLight()} className="cursor-pointer">
            {isLight ? (
              <LuSunMedium size={30} color={"#64748b"} />
            ) : (
              <LuSunMoon size={30} color={"#64748b"} />
            )}
          </button> */}
          <Button color="primary" text="Contate-me" />
        </div>
      </header>
    </header>
  );
}

export default Navbar;
