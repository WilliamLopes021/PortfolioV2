import { BsCodeSlash } from "react-icons/bs";
import { FaPeopleGroup, FaRegLightbulb } from "react-icons/fa6";
import Button from "../components/Sections/Button";
import AboutCanvas from "../components/Canvas/AboutCanvas";

function AboutMe() {
  const softSkills = [
    {
      icon: <BsCodeSlash color="#0286df" size={45} />,
      title: "Clean Code",
      desc: "Escrevo código limpo, organizado e fácil de manter.",
    },
    {
      icon: <FaPeopleGroup color="#0286df" size={45} />,
      title: "Trabalho em Equipe",
      desc: "Sou comunicativo, assertivo e acostumado a trabalhar em equipe.",
    },
    {
      icon: <FaRegLightbulb color="#0286df" size={45} />,
      title: "Orientado a Inovação",
      desc: "Instigado a procurar sempre a melhor solução e otimizar tarefas.",
    },
  ];

  return (
    <section className="relative p-5 text-center md:text-justify">
      <header className="md:mb-10">
        <h1 className="text-5xl text-center"> Sobre mim </h1>
        <p className="text-xl text-center">
          Desenvolvedor motivado a alcançar a excelência.{" "}
        </p>
      </header>

      <main className="mt-5 px-3 flex flex-col md:flex-row md:items-center items-center">
        <div className="relative z-10 w-700 h-150 bg-slate-700">
          <AboutCanvas />
        </div>
        <article className="p-15 pr-90">
          <h2 className="text-2xl my-3">Desenvolvedor Full Stack Junior</h2>
          <p className="text-lg">
            Sou um desenvolvedor júnior com forte paixão por criar soluções web
            inovadoras. Tenho experiência em React, TypeScript, Node.js e
            desenvolvimento moderno de interfaces. Estou sempre em busca de
            novos desafios e oportunidades para crescer profissionalmente.
            Acredito que a melhor forma de aprender é praticando e colaborando
            com outros desenvolvedores.
          </p>
          <section className="flex flex-col justify-center items-center md:flex-row gap-4 md:gap-6 my-5">
            {softSkills.map((value) => {
              return (
                <div
                  key={value.title}
                  className="flex flex-col justify-center items-center my-5 gap-2"
                >
                  <div className="bg-sky-100 w-min p-3 rounded-xl">
                    <div>{value.icon}</div>
                  </div>
                  <h3 className="font-bold">{value.title}</h3>
                  <p className="max-w-3xs text-center">{value.desc}</p>
                </div>
              );
            })}
          </section>
          <Button text="Download CV" rounded={true} />
        </article>
      </main>
    </section>
  );
}
export default AboutMe;
