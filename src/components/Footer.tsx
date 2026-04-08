const Footer = () => {
  return (
    <footer className="bg-va-cream border-t border-va-gold/20 px-8 md:px-20 py-8">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">

        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-lg font-light tracking-[5px] text-va-dark uppercase">VA</span>
          <span className="font-sans text-[9px] font-light tracking-[2px] text-va-taupe uppercase">Arquitetura</span>
        </div>

        <span className="font-sans text-[10px] font-light tracking-[1px] text-va-taupe text-center">
          © 2025 VA Arquitetura — Recife, PE
        </span>

        <div className="flex gap-6 md:gap-8">
          <a href="#" className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase hover:text-va-green transition-colors duration-300">Instagram</a>
          <a href="#" className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase hover:text-va-green transition-colors duration-300">Behance</a>
          <a href="#" className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase hover:text-va-green transition-colors duration-300">WhatsApp</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer