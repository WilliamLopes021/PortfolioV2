import { BsCodeSlash } from "react-icons/bs";
import Button from "../components/Button";

function AboutMe() {
  return (
    <section>
      <h1 className="text-5xl"> Sobre mim </h1>
      <span>Desenvolvedor motivado a alcançar a excelência. </span>
      <img
        src="https://imgs.search.brave.com/p4WEU4nXYVrevnRzjZgjt19D5ugZNztBCzU6d0n7OaM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2FsbC1raW5k/cy1vZi1jYXJlLWJl/YXJzLXMzaWxoanpo/dDVscmRsbWQud2Vi/cA"
        alt=""
      />
      <h2 className="">Desenvolvedor Full Stack Junior</h2>
      <p>
        Sou um desenvolvedor júnior com forte paixão por criar soluções web
        inovadoras. Tenho experiência em React, TypeScript, Node.js e
        desenvolvimento moderno de interfaces. Estou sempre em busca de novos
        desafios e oportunidades para crescer profissionalmente. Acredito que a
        melhor forma de aprender é praticando e colaborando com outros
        desenvolvedores.
      </p>
      <div>
        <div>
          <BsCodeSlash />
        </div>
        <h3>Clean Code</h3>
        <p>Escrevo código limpo, organizado e fácil de manter.</p>
      </div>
      <div>
        <div>
          <BsCodeSlash />
        </div>
        <h3>Clean Code</h3>
        <p>Escrevo código limpo, organizado e fácil de manter.</p>
      </div>{" "}
      <div>
        <div>
          <BsCodeSlash />
        </div>
        <h3>Clean Code</h3>
        <p>Escrevo código limpo, organizado e fácil de manter.</p>
      </div>
      <Button text="Download CV" />
    </section>
  );
}
export default AboutMe;
