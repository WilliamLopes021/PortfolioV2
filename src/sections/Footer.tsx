import logo from "../assets/llogodois.png";
import MinIcon from "../components/MinIcon";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { socialLinks } from "../data/socialLinks";
import { navLinks } from "../data/navLinks";

function Footer() {
  return (
    <footer
      className={`md:static static flex flex-col md:flex-row gap-6 md:gap-8 md:justify-evenly md:bottom-0 bottom-0 right-0 left-0 bg-gray-900 text-white p-8`}
    >
      <section className="flex-col justify-center items-center">
        <img src={logo} alt="logotipo" className="md:w-2/3 max-w-2xs" />
        <div className="flex gap-3 px-2">
          <MinIcon icon={<FiGithub size={25} />} url={socialLinks.github} />
          <MinIcon icon={<FiLinkedin size={25} />} url={socialLinks.linkedin} />
          <MinIcon icon={<CiMail size={25} />} url={'#contato'} />
          <MinIcon
            icon={<FaInstagram size={25} />}
            url={socialLinks.instagram}
          />
        </div>
      </section>
      <nav>
        <ul className="flex flex-col gap-1">
          <li className="font-semibold">Links Rápidos</li>
          {navLinks.map((value) => {
            return (
              <li key={value.text}>
                <a href={value.href}>{value.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <section>
        <p className="font-semibold">Contato</p>
        <ul className="flex flex-col gap-1">
          <li>gabrielwilliam234@gmail.com</li>
          <li>+55 (11) 95480-9111</li>
          <li>Guarulhos, SP- Brasil</li>
        </ul>
      </section>
      <span className="h-0.5 rounded-2xl md:hidden w-full bg-slate-700"></span>
      <div className="md:self-end">
        <p>© 2026 G. W. Lopes Rodrigues. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
