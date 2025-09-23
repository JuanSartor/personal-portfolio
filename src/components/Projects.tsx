const projects = [
  {
    title: "CMS Inmobiliario Personalizado",
    description: "Sistema de gestión completo para inmobiliarias con panel administrativo, gestión de propiedades, galería de imágenes y sistema de consultas.",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Panel administrativo completo",
      "Gestión de propiedades y galería",
      "Sistema de consultas integrado",
      "Responsive design",
      "Optimización SEO"
    ],
    type: "Backend + Frontend",
    status: "Completado",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
      </svg>
    )
  },
  {
    title: "Tienda Online Bolsar",
    description: "E-commerce completo para Bolsar Bolsas de Papel con catálogo de productos, carrito de compras, sistema de pagos y gestión de pedidos.",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "CSS3", "JavaScript"],
    features: [
      "Catálogo de productos completo",
      "Carrito y sistema de pagos",
      "Gestión de inventario",
      "Panel de administración",
      "Integración con redes sociales"
    ],
    type: "E-commerce",
    status: "En línea",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container fade-in-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">Proyectos Destacados</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:scale-[1.02] h-full">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                      {project.type}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-secondary-800 mb-3">Características principales:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-secondary-600">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-auto">
                <h4 className="font-semibold text-secondary-800 mb-3">Tecnologías utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200/50">
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevos desafíos y oportunidades de colaboración.
              ¡Hablemos sobre cómo puedo ayudarte a hacer realidad tu proyecto!
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Iniciar conversación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
