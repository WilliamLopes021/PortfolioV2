function ContactForm() {
  return (
    <div>
      <form action="">
        <label htmlFor="personName"> Nome </label>
        <input type="text" id="personName" name="nome" />
        <label htmlFor="email"> E-mail </label>
        <input type="email" id="email" name="email" />{" "}
        <label htmlFor="assunto"> Assunto </label>
        <input type="text" id="assuntp" name="assunto" />{" "}
        <label htmlFor="personName"> Mensagem </label>
        <input type="text" id="personName" name="nome" />
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default ContactForm;
