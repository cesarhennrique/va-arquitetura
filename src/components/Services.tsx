const services = [
  {
    num: '01',
    name: 'Projeto de Interiores',
    desc: 'Do conceito ao detalhamento completo — layouts, materiais, mobiliário e iluminação integrados em uma proposta coesa e personalizada.',
  },
  {
    num: '02',
    name: 'Arquitetura Residencial',
    desc: 'Projetos arquitetônicos de alto padrão, pensados para equilibrar funcionalidade, conforto e identidade estética dos moradores.',
  },
  {
    num: '03',
    name: 'Gestão e Execução',
    desc: 'Acompanhamento completo da obra, garantindo fidelidade ao projeto, qualidade de execução e entrega dentro do prazo.',
  },
]

const Services = () => {
  return (
    <section id="servicos" className="bg-va-warm border-t border-va-gold/20">

      {/* Header */}
      <div className="flex items-end justify-between px-20 py-16 border-b border-va-gold/20">
        <h2 className="font-serif text-[42px] font-light text-va-dark">
          Nossos serviços
        </h2>
        <p className="font-sans text-[13px] font-light text-va-taupe max-w-xs text-right leading-relaxed">
          Cada etapa do projeto com dedicação e precisão — do primeiro esboço à entrega final.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3">
        {services.map((service) => (
          <div
            key={service.num}
            className="group flex flex-col gap-6 px-12 py-12 border-r border-va-gold/20 hover:bg-va-cream transition-colors duration-500 cursor-default"
          >
            <div className="w-8 h-px bg-va-gold" />
            <span className="font-sans text-[10px] font-light tracking-[2px] text-va-gold uppercase">
              {service.num}
            </span>
            <h3 className="font-serif text-[24px] font-light text-va-dark">
              {service.name}
            </h3>
            <p className="font-sans text-[13px] font-light leading-[1.8] text-va-taupe">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Services