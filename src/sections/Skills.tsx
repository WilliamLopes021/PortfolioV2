import SkillCard from "../components/Sections/SkillCard";
import { frontendSkills, backendSkills, outros } from "../constants/skillsInfo";

const Skills = () => {
  return (
    <section className="p-10 text-center md:text-justify bg-bg mb-40">
      <header className="md:mb-10 text-text text-center">
        <h1 className="text-5xl"> Minhas Skills </h1>
        <p className="text-xl">
          Tecnologias, ferramentas e minhas competências profissionais.
        </p>
      </header>

        <div className="flex flex-col md:flex-row gap-8 justify-center py-10">
          <SkillCard skills={frontendSkills} title="Frontend" />
          <SkillCard skills={backendSkills} title="Backend" />
          <SkillCard skills={outros} title="Ferramentas" />
        </div>
    </section>
  );
};

export default Skills;
