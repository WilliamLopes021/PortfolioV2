import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import ContactCard from "../components/ContactCard";
import MapCanvas from "../components/MapCanvas";
import ContactForm from "../components/ContactForm";

function Contact() {
  const contactInfo = [
    {
      contactType: "E-mail",
      contact: "gabrielwilliam234@gmail.com",
      icon: <TfiEmail color="#0286df" size={25} />,
    },
    {
      contactType: "Celular",
      contact: "+55 (11) 95480-9111",
      icon: <BsTelephone color="#0286df" size={25} />,
    },
    {
      contactType: "Localização",
      contact: "Guarulhos, SP",
      icon: <IoLocationOutline color="#0286df" size={25} />,
    },
  ];
  return (
    <section className="mt-20 p-10">
      <h1 className="text-5xl text-center"> Entre em Contato</h1>
      <p className="text-xl text-center my-3">
        Vamos trabalhar juntos? Entre em contato comigo!
      </p>

      <h2 className="text-xl mt-10 mb-3 font-bold">Informações de Contato</h2>
      <p className="text-lg">
        Estou sempre aberto a discutir novos projetos, ideias criativas ou
        oportunidades para fazer parte de suas visões. Também estou disponível
        para início imediato!
      </p>

      <div className="flex flex-col">
        {contactInfo.map((value) => {
          return (
            <ContactCard
              key={value.contact}
              contact={value.contact}
              icon={value.icon}
              type={value.contactType}
            />
          );
        })}
      </div>

      <MapCanvas />
      <ContactForm />
    </section>
  );
}

export default Contact;
