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
  return (
    <section id="portfolio" className="bg-va-cream">
      {/* Header da seção */}
      <div
        className="flex items-center gap-6 px-20 py-8 border-t border-b"
        style={{ borderColor: "rgba(201,169,110,0.2)" }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#9a9088",
            textTransform: "uppercase",
          }}
        >
          Projetos selecionados
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "rgba(201,169,110,0.2)",
          }}
        />
        <span
          style={{ fontSize: "10px", letterSpacing: "1px", color: "#c9a96e" }}
        >
          06 projetos
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden cursor-pointer border-r border-b"
            style={{ borderColor: "rgba(201,169,110,0.15)" }}
          >
            {/* Imagem */}
            <div className="overflow-hidden h-72">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay no hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end pb-24 pl-6"
              style={{
                background:
                  "linear-gradient(to top, rgba(44,40,32,0.6) 0%, transparent 60%)",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#f5f1eb",
                  textTransform: "uppercase",
                }}
              >
                ver projeto →
              </span>
            </div>

            {/* Info */}
            <div className="px-6 py-5" style={{ background: "#f5f1eb" }}>
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#c9a96e",
                  marginBottom: "6px",
                }}
              >
                {project.id}
              </p>
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#2c2820",
                  marginBottom: "3px",
                }}
              >
                {project.name}
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "#9a9088",
                  letterSpacing: "1px",
                }}
              >
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
