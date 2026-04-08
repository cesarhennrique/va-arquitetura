import { useState } from 'react'

const links = [
  { label: 'Início', href: 'inicio' },
  { label: 'Portfólio', href: 'portfolio' },
  { label: 'Sobre', href: 'sobre' },
  { label: 'Serviços', href: 'servicos' },
  { label: 'Contato', href: 'contato' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-va-cream/90 backdrop-blur-sm border-b border-va-gold/10">

        {/* Logo */}
        <a href="#inicio">
          <img src="/images/logosemfundo.png" alt="VA Arquitetura" className="h-12 w-auto" />
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className="font-sans text-[11px] font-light tracking-[2px] text-va-taupe uppercase hover:text-va-green transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <button
          onClick={() => scrollTo('contato')}
          className="hidden md:block font-sans text-[10px] font-light tracking-[2px] uppercase px-6 py-3 border border-va-green text-va-green hover:bg-va-green hover:text-va-cream transition-all duration-300"
        >
          Solicitar orçamento
        </button>

        {/* Botão hamburguer mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
        >
          <span className={`block w-6 h-px bg-va-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-6 h-px bg-va-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-va-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>

      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-va-cream flex flex-col items-center justify-center gap-10 md:hidden">
          {links.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="font-serif text-[32px] font-light text-va-dark hover:text-va-green transition-colors duration-300 bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contato')}
            className="mt-4 font-sans text-[10px] tracking-[2px] uppercase px-8 py-4 border border-va-green text-va-green"
          >
            Solicitar orçamento
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar