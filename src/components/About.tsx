const About = () => {
  return (
    <section id="sobre" className="grid grid-cols-2 border-t border-va-gold/20">

      {/* Foto da equipe */}
      <div className="overflow-hidden h-[600px]">
        <img
          src="/src/assets/images/ceos2.jpeg"
          alt="Equipe VA Arquitetura"
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-center gap-8 px-20 py-24 bg-va-warm">
        <span className="font-sans text-[10px] font-light tracking-[3px] text-va-green uppercase">
          Sobre o escritório
        </span>
        <h2 className="font-serif text-[42px] font-light leading-[1.2] text-va-dark">
          Arquitetura pensada<br />para as pessoas
        </h2>
        <div className="w-10 h-px bg-va-gold" />
        <p className="font-sans text-[13px] font-light leading-[1.9] text-va-taupe">
          A VA Arquitetura nasceu da paixão por criar ambientes que vão além do estético — espaços que acolhem, que contam histórias e que refletem a identidade de quem os habita.
        </p>
        <p className="font-sans text-[13px] font-light leading-[1.9] text-va-taupe">
          Com foco em interiores residenciais de alto padrão, unimos rigor técnico à sensibilidade no uso de materiais, luz e proporção. Cada projeto é único, desenvolvido com atenção ao menor detalhe.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-4 pt-8 border-t border-va-gold/20">
          {[
            { n: '80+', label: 'Projetos entregues' },
            { n: '10', label: 'Anos de experiência' },
            { n: '100%', label: 'Clientes satisfeitos' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="font-serif text-[36px] font-light text-va-green">{stat.n}</span>
              <span className="font-sans text-[10px] font-light tracking-[1.5px] text-va-taupe uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default About