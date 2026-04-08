const Contact = () => {
  return (
    <section id="contato" className="grid grid-cols-2 border-t border-va-gold/20">

      {/* Lado esquerdo — escuro */}
      <div className="flex flex-col justify-center gap-8 px-20 py-24 bg-va-dark">
        <span className="font-sans text-[10px] font-light tracking-[3px] text-va-green uppercase">
          Vamos conversar?
        </span>
        <h2 className="font-serif text-[42px] font-light leading-[1.2] text-va-cream">
          Traga sua ideia.<br />
          Nós damos <em className="italic text-va-gold">forma.</em>
        </h2>
        <p className="font-sans text-[13px] font-light leading-[1.9] text-va-taupe">
          Conte-nos sobre seu projeto e receba uma proposta personalizada. Atendemos em Recife e região.
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

      {/* Lado direito — formulário */}
      <div className="flex flex-col justify-center gap-6 px-20 py-24 bg-va-warm">
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase">
            Nome completo
          </label>
          <input
            type="text"
            placeholder="Seu nome"
            className="bg-transparent border-b border-va-taupe/40 py-3 font-sans text-[13px] font-light text-va-dark placeholder-va-taupe/50 outline-none focus:border-va-green transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase">
            E-mail
          </label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="bg-transparent border-b border-va-taupe/40 py-3 font-sans text-[13px] font-light text-va-dark placeholder-va-taupe/50 outline-none focus:border-va-green transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase">
            WhatsApp
          </label>
          <input
            type="tel"
            placeholder="(81) 9 9999-9999"
            className="bg-transparent border-b border-va-taupe/40 py-3 font-sans text-[13px] font-light text-va-dark placeholder-va-taupe/50 outline-none focus:border-va-green transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase">
            Sobre o projeto
          </label>
          <textarea
            placeholder="Conte um pouco sobre o que você imagina..."
            rows={4}
            className="bg-transparent border-b border-va-taupe/40 py-3 font-sans text-[13px] font-light text-va-dark placeholder-va-taupe/50 outline-none focus:border-va-green transition-colors duration-300 resize-none"
          />
        </div>
        <button className="mt-4 font-sans text-[10px] font-light tracking-[3px] uppercase py-4 bg-va-dark text-va-cream hover:bg-va-green transition-colors duration-300">
          Enviar mensagem
        </button>
      </div>

    </section>
  )
}

export default Contact