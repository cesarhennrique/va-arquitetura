const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-20 py-6 bg-va-cream border-t border-va-gold/20">
      <div className="flex flex-col">
        <span className="font-serif text-lg font-light tracking-[5px] text-va-dark uppercase">VA</span>
        <span className="font-sans text-[9px] font-light tracking-[2px] text-va-taupe uppercase">Arquitetura</span>
      </div>
      <span className="font-sans text-[10px] font-light tracking-[1px] text-va-taupe">
        © 2025 VA Arquitetura — Recife, PE
      </span>
      <div className="flex gap-8">
        {['Instagram', 'Behance', 'WhatsApp'].map((link) => (
          <a key={link} href="#" className="font-sans text-[10px] font-light tracking-[2px] text-va-taupe uppercase hover:text-va-green transition-colors duration-300">
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer