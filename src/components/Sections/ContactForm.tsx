function ContactForm() {
  return (
    <form action="" className="flex flex-col gap-2 p-5 bg-gray-100 rounded-lg">
      <label className="font-semibold mt-5" htmlFor="personName">
        {" "}
        Nome{" "}
      </label>
      <input
        type="text"
        className="bg-white rounded-sm p-2 text-slate-400 border border-slate-400 outline-0"
        id="personName"
        name="nome"
        placeholder="Seu nome"
      />
      <label htmlFor="email" className="font-semibold mt-5">
        {" "}
        E-mail{" "}
      </label>
      <input
        type="email"
        className="bg-white rounded-sm p-2 text-slate-400 border border-slate-400 outline-0"
        id="email"
        name="email"
        placeholder="Seu e-mail"
      />{" "}
      <label htmlFor="assunto" className="font-semibold mt-5">
        {" "}
        Assunto{" "}
      </label>
      <input
        type="text"
        className="bg-white rounded-sm p-2 text-slate-400 border border-slate-400 outline-0"
        id="assuntp"
        name="assunto"
        placeholder="Como posso ajudar?"
      />{" "}
      <label htmlFor="mensage" className="font-semibold mt-5">
        {" "}
        Mensagem{" "}
      </label>
      <textarea
        className="bg-white rounded-sm p-2 text-slate-400 border border-slate-400 outline-0 resize-none h-32"
        id="mensage"
        name="mensage"
        maxLength={500}
        placeholder="Escreva a sua mensagem ou proposta..."
      />
      <button type="submit" className="bg-slate-600 rounded p-3">
        Enviar Mensagem
      </button>
    </form>
  );
}

export default ContactForm;
