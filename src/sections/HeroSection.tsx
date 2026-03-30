import { RiTailwindCssLine } from "react-icons/ri";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import Button from "../components/Button";
import MinIcon from "../components/MinIcon";
import { socialLinks } from "../data/socialLinks";
import HeroCanvas from "../components/ThreeJs/HeroCanvas";

function HeroSection() {
  const tecnologies = [
    { tecnology: "Tailwindcss", icon: <RiTailwindCssLine /> },
    { tecnology: "Nodejs", icon: <FaNodeJs /> },
    { tecnology: "React/React-Native", icon: <IoLogoReact /> },
    { tecnology: "TypeScript", icon: <BiLogoTypescript /> },
    { tecnology: "Python", icon: <AiOutlinePython /> },
    { tecnology: "Express", icon: <SiExpress /> },
    { tecnology: "Nextjs", icon: <TbBrandNextjs /> },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-15 px-10 gap-5 xl:px-90">
      <span className="font-medium text-xl">
        Desenvolvedor Full Stack | Analista de Sistemas{" "}
      </span>
      <span className="text-xl font-normal">Olá, meu nome é </span>
      <h1 className="text-7xl">Gabriel William</h1>
      <h2 className="text-center text-lg">
        Um estudante de tecnologia autodidata que busca a excelência no
        desenvolvimento de softwares, tendo como objetivo implementar soluções
        digitais de forma inovadora e escalável!
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {tecnologies.map((value) => {
          return (
              <span key={value.tecnology} className="flex items-center gap-2 rounded-xl bg-sky-100 p-1.5">
                {value.icon} {value.tecnology}
              </span>
          );
        })}
      </div>

      <Button text="Ver Projetos" />
      <Button text="Entre em Contato" />

      <div className="flex gap-3">
        <MinIcon icon={<FiGithub size={25} />} url={socialLinks.github} />
        <MinIcon icon={<FaInstagram size={25} />} url={socialLinks.instagram} />
        <MinIcon icon={<CiMail size={25} />} url={"#contato"} />
        <MinIcon icon={<FiLinkedin size={25} />} url={socialLinks.linkedin} />
      </div>

      <div className="size-full absolute inset-0">
        <HeroCanvas />
      </div>
    </section>
  );
}
export default HeroSection;
