import { motion } from 'framer-motion'

const Hero = () => {
  return (
   <section id="inicio" className="relative h-screen grid grid-cols-1 md:grid-cols-2 pt-20">

      <div className="flex flex-col justify-center px-8 md:px-20 gap-6 bg-va-cream">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-[10px] font-light tracking-[4px] text-va-green uppercase"
        >
          Arquitetura & Interiores
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-[68px] font-light leading-[1.1] text-va-dark"
        >
          Ambientes que<br />
          <em className="italic text-va-green">traduzem</em><br />
          quem você é
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-sans text-[13px] font-light leading-relaxed text-va-taupe max-w-sm"
        >
          Do conceito à entrega, cada projeto nasce da escuta cuidadosa — transformado em espaços únicos, funcionais e duradouros.
        </motion.p>

    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="flex gap-4 mt-2"
>
  <button
    className="font-sans text-[10px] tracking-[2px] uppercase px-8 py-4 bg-va-dark text-va-cream border border-va-dark hover:bg-va-green hover:border-va-green transition-all duration-300"
  >
    Ver projetos
  </button>
  <button
    className="font-sans text-[10px] tracking-[2px] uppercase px-8 py-4 bg-transparent text-va-dark border border-va-dark hover:border-va-green hover:text-va-green transition-all duration-300"
  >
    Fale conosco
  </button>
</motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="overflow-hidden"
      >
       <div className="hidden md:block overflow-hidden">
    <img
      src="/src/images/ambientesala5.jpeg"
      alt="Projeto VA Arquitetura"
      className="w-full h-full object-cover"
    />
  </div>
      </motion.div>

    </section>
  )
}

export default Hero