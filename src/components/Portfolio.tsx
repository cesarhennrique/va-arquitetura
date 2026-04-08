import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollAnimation from '../hooks/useScrollAnimation'

interface Project {
  id: string
  name: string
  category: string
  img: string
  images: string[]
  description: string
  area?: string
  ano?: string
}

const projects: Project[] = [
  {
    id: '01',
    name: 'Sala Integrada',
    category: 'Residencial · Interiores',
    img: '/src/images/ambientesala1.jpeg',
    images: [
      '/src/images/ambientesala1.jpeg',
      '/src/images/ambientesala2.jpeg',
      '/src/images/ambientesala3.jpeg',
    ],
    description: 'Projeto residencial de alto padrão com integração total entre sala de estar, jantar e varanda gourmet. Paleta neutra com detalhes em dourado e ripados em madeira natural criam um ambiente sofisticado e acolhedor.',
    area: '120m²',
    ano: '2024',
  },
  {
    id: '02',
    name: 'Área Gourmet',
    category: 'Residencial · Design',
    img: '/srcimages/ambientesala2.jpeg',
    images: [
      '/srcimages/ambientesala2.jpeg',
      '/srcimages/ambientesala4.jpeg',
      '/srcimages/ambientesala5.jpeg',
    ],
    description: 'Área gourmet projetada para receber com elegância. Mesa redonda em mármore, cadeiras estofadas com estrutura dourada e parede de jardim vertical como pano de fundo criam um ambiente único.',
    area: '45m²',
    ano: '2024',
  },
  {
    id: '03',
    name: 'Home Theater',
    category: 'Residencial · Interiores',
    img: '/src/images/ambientesala3.jpeg',
    images: [
      '/src/images/ambientesala3.jpeg',
      '/src/images/ambientesala1.jpeg',
    ],
    description: 'Home theater com painel ripado em madeira e iluminação embutida linear. O sofá curvo em terracota se torna o elemento de cor que ancora o ambiente predominantemente neutro.',
    area: '35m²',
    ano: '2024',
  },
  {
    id: '04',
    name: 'Suíte Master',
    category: 'Residencial · Interiores',
    img: '/srcimages/ambientequarto1.jpeg',
    images: [
      '/srcimages/ambientequarto1.jpeg',
      '/srcimages/ambientequarto2.jpeg',
    ],
    description: 'Suíte master projetada para o descanso absoluto. Cortinas em linho, poltrona curva branca e iluminação aquecida criam uma atmosfera serena e refinada.',
    area: '28m²',
    ano: '2023',
  },
  {
    id: '05',
    name: 'Quarto Casal',
    category: 'Residencial · Interiores',
    img: '/src/images/ambientequarto2.jpeg',
    images: [
      '/src/images/ambientequarto2.jpeg',
      '/src/images/ambientequarto1.jpeg',
    ],
    description: 'Quarto casal com cabeceira ripada do piso ao teto e nichos iluminados integrados. A paleta bege e taupe transmite sofisticação e aconchego simultaneamente.',
    area: '25m²',
    ano: '2023',
  },
  {
    id: '06',
    name: 'Lavabo',
    category: 'Residencial · Banheiro',
    img: '/src/images/ambientebanheiro.jpeg',
    images: [
      '/src/images/ambientebanheiro.jpeg',
    ],
    description: 'Lavabo sofisticado com bancada em mármore calacatta, painel ripado com iluminação embutida e espelho de borda infinita. Um espaço pequeno com impacto grandioso.',
    area: '6m²',
    ano: '2023',
  },
]

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation()
  const [selected, setSelected] = useState<Project | null>(null)
  const [activeImg, setActiveImg] = useState(0)

  const openModal = (project: Project) => {
    setSelected(project)
    setActiveImg(0)
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelected(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <section id="portfolio" className="bg-va-cream">

        <div className="flex items-center gap-6 px-6 md:px-20 py-8 border-t border-b border-va-gold/20">
          <span className="font-sans text-[10px] font-light tracking-[3px] text-va-taupe uppercase">
            Projetos selecionados
          </span>
          <div className="flex-1 h-px bg-va-gold/20" />
          <span className="font-sans text-[10px] tracking-[1px] text-va-gold">
            06 projetos
          </span>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openModal(project)}
              className="group relative overflow-hidden cursor-pointer border-b border-va-gold/15 md:border-r"
            >
              <div className="overflow-hidden h-64 md:h-72">
                <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end pb-24 pl-6"
                style={{background: 'linear-gradient(to top, rgba(44,40,32,0.6) 0%, transparent 60%)'}}
              >
                <span className="font-sans text-[10px] tracking-[2px] text-va-cream uppercase">ver projeto →</span>
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

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-va-dark/80 flex items-center justify-center p-4 md:p-10"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-va-cream w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header do modal */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-va-gold/20">
                <div>
                  <p className="font-sans text-[10px] tracking-[2px] text-va-gold mb-1">{selected.id}</p>
                  <h3 className="font-serif text-[28px] font-light text-va-dark">{selected.name}</h3>
                  <p className="font-sans text-[11px] tracking-[1px] text-va-taupe mt-1">{selected.category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="font-sans text-[20px] text-va-taupe hover:text-va-dark transition-colors bg-transparent border-none cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Imagem principal */}
              <div className="overflow-hidden h-72 md:h-[420px]">
                <motion.img
                  key={activeImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  src={selected.images[activeImg]}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              {selected.images.length > 1 && (
                <div className="flex gap-3 px-8 py-4 border-b border-va-gold/20 overflow-x-auto">
                  {selected.images.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`flex-shrink-0 w-20 h-16 overflow-hidden cursor-pointer transition-opacity duration-300 ${activeImg === i ? 'opacity-100 ring-1 ring-va-gold' : 'opacity-50 hover:opacity-80'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {/* Descrição + detalhes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-8">
                <div className="md:col-span-2">
                  <p className="font-sans text-[10px] tracking-[2px] text-va-green uppercase mb-4">Sobre o projeto</p>
                  <p className="font-sans text-[14px] font-light leading-[1.9] text-va-taupe">{selected.description}</p>
                </div>
                <div className="flex flex-col gap-6">
                  {selected.area && (
                    <div>
                      <p className="font-sans text-[10px] tracking-[2px] text-va-taupe uppercase mb-1">Área</p>
                      <p className="font-serif text-[24px] font-light text-va-dark">{selected.area}</p>
                    </div>
                  )}
                  {selected.ano && (
                    <div>
                      <p className="font-sans text-[10px] tracking-[2px] text-va-taupe uppercase mb-1">Ano</p>
                      <p className="font-serif text-[24px] font-light text-va-dark">{selected.ano}</p>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      closeModal()
                      setTimeout(() => {
                        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                      }, 300)
                    }}
                    className="font-sans text-[10px] tracking-[2px] uppercase py-4 px-6 bg-va-dark text-va-cream hover:bg-va-green transition-colors duration-300 border-none cursor-pointer"
                  >
                    Solicitar orçamento
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Portfolio