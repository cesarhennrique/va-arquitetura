const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen grid grid-cols-2">
      {/* Lado esquerdo — texto */}
      <div className="flex flex-col justify-center pt-24 pb-20 px-12 gap-6 bg-va-cream">
        <span className="font-sans text-[10px] font-light tracking-[4px] text-va-green uppercase">
          Arquitetura & Interiores
        </span>
        <h1 className="font-serif text-[72px] font-light leading-[1.1] text-va-dark">
          Ambientes que
          <br />
          <em className="italic text-va-green">traduzem</em>
          <br />
          quem você é
        </h1>
        <p className="font-sans text-[13px] font-light leading-relaxed text-va-taupe max-w-sm">
          Do conceito à entrega, cada projeto nasce da escuta cuidadosa —
          transformado em espaços únicos, funcionais e duradouros.
        </p>
        <div className="flex gap-4 mt-2">
          <button
            style={{
              fontSize: "10px",
              letterSpacing: "2px",
              padding: "14px 32px",
              background: "#2c2820",
              color: "#f5f1eb",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "background 0.3s",
            }}
          >
            Ver projetos
          </button>
          <button
            style={{
              fontSize: "10px",
              letterSpacing: "2px",
              padding: "14px 32px",
              background: "transparent",
              color: "#2c2820",
              border: "1px solid #2c2820",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "all 0.3s",
            }}
          >
            Fale conosco
          </button>
        </div>
      </div>

      {/* Lado direito — imagem */}
      <div className="relative overflow-hidden">
        <img
          src="/src/assets/images/ambientesala1.jpeg"
          alt="Projeto VA Arquitetura"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
