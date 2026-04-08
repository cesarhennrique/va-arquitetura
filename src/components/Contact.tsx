import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    projeto: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.nome || !form.whatsapp) {
      alert("Por favor, preencha pelo menos seu nome e WhatsApp.");
      return;
    }

    const numero = "5581994314649"; 
    const mensagem = `Olá, VA Arquitetura! 👋

*Nome:* ${form.nome}
*E-mail:* ${form.email || "Não informado"}
*WhatsApp:* ${form.whatsapp}

*Sobre o projeto:*
${form.projeto || "Não informado"}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contato"
      className="grid grid-cols-1 md:grid-cols-2 border-t border-va-gold/20"
    >
      <div className="flex flex-col justify-center gap-8 px-8 md:px-20 py-16 md:py-24 bg-va-dark">
        <span className="font-sans text-[10px] font-light tracking-[3px] text-va-green uppercase">
          Vamos conversar?
        </span>
        <h2 className="font-serif text-[32px] md:text-[42px] font-light leading-[1.2] text-va-cream">
          Traga sua ideia.
          <br />
          Nós damos <em className="italic text-va-gold">forma.</em>
        </h2>
        <p className="font-sans text-[13px] font-light leading-[1.9] text-va-taupe">
          Conte-nos sobre seu projeto e receba uma proposta personalizada.
          Atendemos em Recife e região.
        </p>
        <div className="flex flex-col gap-3 mt-4">
          <span className="font-sans text-[12px] font-light tracking-[1px] text-va-gold/80">
            contato@vaarquitetura.com.br
          </span>
          <span className="font-sans text-[12px] font-light tracking-[1px] text-va-gold/80">
            @va.arquitetura
          </span>
          <span className="font-sans text-[12px] font-light tracking-[1px] text-va-gold/80">
            Recife, Pernambuco
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-6 px-8 md:px-20 py-16 md:py-24 bg-va-warm">
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase">
            Nome completo
          </label>
          <input
            name="nome"
            type="text"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            className="bg-transparent border-b border-va-taupe/40 py-3 font-sans text-[13px] font-light text-va-dark placeholder-va-taupe/50 outline-none focus:border-va-green transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase">
            E-mail
          </label>
          <input
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={handleChange}
            className="bg-transparent border-b border-va-taupe/40 py-3 font-sans text-[13px] font-light text-va-dark placeholder-va-taupe/50 outline-none focus:border-va-green transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase">
            WhatsApp
          </label>
          <input
            name="whatsapp"
            type="tel"
            placeholder="(81) 9 9999-9999"
            value={form.whatsapp}
            onChange={handleChange}
            className="bg-transparent border-b border-va-taupe/40 py-3 font-sans text-[13px] font-light text-va-dark placeholder-va-taupe/50 outline-none focus:border-va-green transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase">
            Sobre o projeto
          </label>
          <textarea
            name="projeto"
            placeholder="Conte um pouco sobre o que você imagina..."
            rows={4}
            value={form.projeto}
            onChange={handleChange}
            className="bg-transparent border-b border-va-taupe/40 py-3 font-sans text-[13px] font-light text-va-dark placeholder-va-taupe/50 outline-none focus:border-va-green transition-colors duration-300 resize-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 font-sans text-[10px] font-light tracking-[3px] uppercase py-4 bg-va-dark text-va-cream hover:bg-va-green transition-colors duration-300"
        >
          Enviar pelo WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Contact;
