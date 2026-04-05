import { RiTailwindCssLine } from "react-icons/ri";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import Button from "../components/Sections/Button";
import MinIcon from "../components/Sections/MinIcon";
import { socialLinks } from "../constants/socialLinks";
import HeroCanvas from "../components/Canvas/HeroCanvas";

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
    <section className="w-full relative pointer-events-none mb-40" id="inicio">
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>
      <main className="relative z-10 flex flex-col text-text-banner items-center justify-center py-25 px-10 gap-5 xl:px-90">
        <span className="font-medium text-xl text-center">
          Desenvolvedor Full Stack | Analista de Sistemas{" "}
        </span>
        <span className="text-xl font-normal">Olá, meu nome é </span>
        <h1 className="text-7xl text-center">Gabriel William</h1>
        <h2 className="text-center text-xl bg-primary/15 rounded-2xl">
          Um estudante de tecnologia autodidata que busca a excelência no
          desenvolvimento de softwares, tendo como objetivo implementar soluções
          digitais de forma inovadora e escalável!
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tecnologies.map((value) => {
            return (
              <span
                key={value.tecnology}
                className="flex pointer-events-auto text-text font-semibold items-center gap-2 rounded-xl bg-bg hover:bg-accent transition p-1.5"
              >
                {value.icon} {value.tecnology}
              </span>
            );
          })}
        </div>

        <Button
          color="primary"
          text="Ver Projetos"
          href="https://github.com/WilliamLopes021?tab=repositories"
        />
        <Button color="primary" text="Entre em Contato" href="https://wa.me/5511954809111"/>

        <div className="flex gap-3 pointer-events-auto">
          <MinIcon icon={<FiGithub size={25} />} url={socialLinks.github} />
          <MinIcon
            icon={<FaInstagram size={25} />}
            url={socialLinks.instagram}
          />
          <MinIcon icon={<CiMail size={25} />} url={"#contato"} />
          <MinIcon icon={<FiLinkedin size={25} />} url={socialLinks.linkedin} />
        </div>
      </main>
    </section>
  );
}
export default HeroSection;
