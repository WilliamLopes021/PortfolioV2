import { TfiEmail } from "react-icons/tfi";
import ContactCard from "../components/ContactCard";
import MapCanvas from "../components/MapCanvas";

function Contact() {
  return (
    <section>
      <h1> Entre em Contato</h1>
      <span>Vamos trabalhar juntos? Entre em contato comigo!</span>

      <h2>Informações de Contato</h2>
      <p>
        Estou sempre aberto a discutir novos projetos, ideias criativas ou
        oportunidades para fazer parte de suas visões. Também estou disponível
        para início imediato!
      </p>

      <ContactCard
        contact="gabrielwilliam234@gmail.com"
        icon={<TfiEmail />}
        type="E-mail"
      />
      <ContactCard
        contact="gabrielwilliam234@gmail.com"
        icon={<TfiEmail />}
        type="E-mail"
      />
      <ContactCard
        contact="gabrielwilliam234@gmail.com"
        icon={<TfiEmail />}
        type="E-mail"
      />

      <MapCanvas />
    </section>
  );
}

export default Contact;
