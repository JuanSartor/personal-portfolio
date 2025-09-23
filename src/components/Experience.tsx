type Job = {
  company: string;
  position: string;
  period: string;
  details: string[];
  type: 'remote' | 'onsite' | 'freelance';
  technologies: string[];
};

const jobs: Job[] = [
  {
    company: "Profesional Independiente",
    position: "Desarrollador Full Stack",
    period: "2024 – Actualidad",
    type: "freelance",
    technologies: ["PHP", "WordPress", "MySQL", "Bootstrap"],
    details: [
      "Desarrollo de CMS inmobiliario personalizado con PHP, Bootstrap y MySQL",
      "Creación de tienda online para Bolsar Bolsas de Papel con WordPress",
      "Implementación de funcionalidades avanzadas y optimización de rendimiento",
    ],
  },
  {
    company: "WorknCare",
    position: "Desarrollador Full Stack",
    period: "2021 – 2023",
    type: "remote",
    technologies: ["PHP", "JavaScript", "AWS", "MySQL", "Bootstrap"],
    details: [
      "Migración completa de plataforma de salud a sistema de gestión empresarial",
      "Desarrollo frontend con Bootstrap, HTML5, CSS3, JavaScript y jQuery",
      "Backend con PHP utilizando framework privado de la empresa",
      "Implementación y gestión de servicios AWS: S3, EC2, SES, RDS",
    ],
  },
  {
    company: "El Litoral",
    position: "Desarrollador Web",
    period: "2019 – 2021",
    type: "onsite",
    technologies: ["PHP", "MySQL", "SQL Server", "jQuery", "Bootstrap"],
    details: [
      "Desarrollo de sistemas internos de gestión para procesos empresariales",
      "Frontend responsivo con Bootstrap, JavaScript y jQuery",
      "Backend robusto con PHP, MySQL y SQL Server",
      "Mantenimiento y optimización de aplicaciones existentes",
    ],
  },
];

export default function Experience() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'remote':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
        );
      case 'freelance':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'remote': return 'Remoto';
      case 'freelance': return 'Freelance';
      default: return 'Presencial';
    }
  };

  return (
    <section id="experience" className="section-container fade-in-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12">Experiencia Profesional</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300"></div>

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="card group hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-secondary-900 mb-1">
                          {job.company}
                        </h3>
                        <p className="text-primary-600 font-semibold mb-2">
                          {job.position}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-secondary-600">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {job.period}
                          </span>
                          <span className="flex items-center gap-1 bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                            {getTypeIcon(job.type)}
                            {getTypeLabel(job.type)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {job.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-secondary-600">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-secondary-100 to-secondary-50 border border-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
