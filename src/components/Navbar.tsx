const links = [
  { label: 'Início', href: 'inicio' },
  { label: 'Portfólio', href: 'portfolio' },
  { label: 'Sobre', href: 'sobre' },
  { label: 'Serviços', href: 'servicos' },
  { label: 'Contato', href: 'contato' },
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 bg-va-cream/90 backdrop-blur-sm border-b border-va-gold/10">

      <div className="flex flex-col leading-none">
        <span className="font-serif text-xl font-light tracking-[6px] text-va-dark uppercase">VA</span>
        <span className="text-[9px] font-sans font-light tracking-[3px] text-va-taupe uppercase">Arquitetura</span>
      </div>

      <ul className="flex gap-10 list-none">
        {links.map((item) => (
          <li key={item.href}>
            <a href={`#${item.href}`} className="font-sans text-[11px] font-light tracking-[2px] text-va-taupe uppercase hover:text-va-green transition-colors duration-300">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button className="font-sans text-[10px] font-light tracking-[2px] uppercase px-6 py-3 border border-va-green text-va-green hover:bg-va-green hover:text-va-cream transition-all duration-300">
        Solicitar orçamento
      </button>

    </nav>
  )
}

export default Navbar