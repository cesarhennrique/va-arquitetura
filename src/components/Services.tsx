const services = [
  {
    num: "01",
    name: "Projeto de Interiores",
    desc: "Do conceito ao detalhamento completo — layouts, materiais, mobiliário e iluminação integrados em uma proposta coesa e personalizada.",
  },
  {
    num: "02",
    name: "Arquitetura Residencial",
    desc: "Projetos arquitetônicos de alto padrão, pensados para equilibrar funcionalidade, conforto e identidade estética dos moradores.",
  },
  {
    num: "03",
    name: "Gestão e Execução",
    desc: "Acompanhamento completo da obra, garantindo fidelidade ao projeto, qualidade de execução e entrega dentro do prazo.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="bg-va-warm border-t border-va-gold/20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between px-8 md:px-20 py-12 md:py-16 border-b border-va-gold/20 gap-4">
        <h2 className="font-serif text-[32px] md:text-[42px] font-light text-va-dark">
          Nossos serviços
        </h2>
        <p className="font-sans text-[13px] font-light text-va-taupe md:max-w-xs md:text-right leading-relaxed">
          Cada etapa do projeto com dedicação e precisão — do primeiro esboço à
          entrega final.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.num}
            className="group flex flex-col gap-6 px-8 md:px-12 py-10 md:py-12 border-b border-va-gold/20 md:border-b-0 md:border-r hover:bg-va-cream transition-colors duration-500"
          >
            <div className="w-8 h-px bg-va-gold" />
            <span className="font-sans text-[10px] font-light tracking-[2px] text-va-gold uppercase">
              {service.num}
            </span>
            <h3 className="font-serif text-[22px] font-light text-va-dark">
              {service.name}
            </h3>
            <p className="font-sans text-[13px] font-light leading-[1.8] text-va-taupe">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
