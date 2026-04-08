import { motion } from 'framer-motion'
import useScrollAnimation from '../hooks/useScrollAnimation'

const projects = [
  {
    id: "01",
    name: "Sala Integrada",
    category: "Residencial · Interiores",
    img: "/src/assets/images/ambientesala1.jpeg",
  },
  {
    id: "02",
    name: "Área Gourmet",
    category: "Residencial · Design",
    img: "/src/assets/images/ambientesala2.jpeg",
  },
  {
    id: "03",
    name: "Home Theater",
    category: "Residencial · Interiores",
    img: "/src/assets/images/ambientesala3.jpeg",
  },
  {
    id: "04",
    name: "Suíte Master",
    category: "Residencial · Interiores",
    img: "/src/assets/images/ambientequarto1.jpeg",
  },
  {
    id: "05",
    name: "Quarto Casal",
    category: "Residencial · Interiores",
    img: "/src/assets/images/ambientequarto2.jpeg",
  },
  {
    id: "06",
    name: "Lavabo",
    category: "Residencial · Banheiro",
    img: "/src/assets/images/ambientebanheiro.jpeg",
  },
];

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="portfolio" className="bg-va-cream">

      <div className="flex items-center gap-6 px-20 py-8 border-t border-b border-va-gold/20">
        <span className="font-sans text-[10px] font-light tracking-[3px] text-va-taupe uppercase">
          Projetos selecionados
        </span>
        <div className="flex-1 h-px bg-va-gold/20" />
        <span className="font-sans text-[10px] tracking-[1px] text-va-gold">
          06 projetos
        </span>
      </div>

      <div ref={ref} className="grid grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden cursor-pointer border-r border-b border-va-gold/15"
          >
            <div className="overflow-hidden h-72">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end pb-24 pl-6"
              style={{background: 'linear-gradient(to top, rgba(44,40,32,0.6) 0%, transparent 60%)'}}
            >
              <span className="font-sans text-[10px] tracking-[2px] text-va-cream uppercase">
                ver projeto →
              </span>
            </div>
            <div className="px-6 py-5 border-t border-va-gold/15 bg-va-cream">
              <p className="font-sans text-[10px] tracking-[2px] text-va-gold mb-2">{project.id}</p>
              <p className="font-serif text-[18px] font-light text-va-dark mb-1">{project.name}</p>
              <p className="font-sans text-[11px] tracking-[1px] text-va-taupe">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Portfolio;
