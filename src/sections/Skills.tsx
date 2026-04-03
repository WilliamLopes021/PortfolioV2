import SkillCard from "../components/Sections/SkillCard";
import { frontendSkills, backendSkills, outros } from "../constants/skillsInfo";

const Skills = () => {
  return (
    <section className="relative p-10 text-center text-white md:text-justify bg-black">
      <header className="md:mb-10">
        <h1 className="text-5xl text-center"> Minhas Skills </h1>
        <p className="text-xl text-center">
          Tecnologias, ferramentas e minhas competências profissionais.
        </p>
      </header>

        <div className="flex gap-8 justify-center py-10">
          <SkillCard skills={frontendSkills} title="Frontend" />
          <SkillCard skills={backendSkills} title="Backend" />
          <SkillCard skills={outros} title={"Ferramentas"} />
        </div>
    </section>
  );
};

export default Skills;
