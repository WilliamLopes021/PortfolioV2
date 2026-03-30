import { BsCodeSlash } from "react-icons/bs";
import { FaPeopleGroup, FaRegLightbulb } from "react-icons/fa6";
import Button from "../components/Button";

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
    <section className="p-5 xl:px-90 max-w-7l md: text-center">
      <h1 className="text-5xl text-center"> Sobre mim </h1>
      <p className="text-xl text-center">
        Desenvolvedor motivado a alcançar a excelência.{" "}
      </p>
      <div className="mt-5 px-3 flex flex-col items-center">
        <img
          className=""
          src="https://imgs.search.brave.com/p4WEU4nXYVrevnRzjZgjt19D5ugZNztBCzU6d0n7OaM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2FsbC1raW5k/cy1vZi1jYXJlLWJl/YXJzLXMzaWxoanpo/dDVscmRsbWQud2Vi/cA"
          alt=""
        />
        <h2 className="text-2xl my-3">Desenvolvedor Full Stack Junior</h2>
        <p className="text-lg">
          Sou um desenvolvedor júnior com forte paixão por criar soluções web
          inovadoras. Tenho experiência em React, TypeScript, Node.js e
          desenvolvimento moderno de interfaces. Estou sempre em busca de novos
          desafios e oportunidades para crescer profissionalmente. Acredito que
          a melhor forma de aprender é praticando e colaborando com outros
          desenvolvedores.
        </p>
      </div>
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
    </section>
  );
}
export default AboutMe;
