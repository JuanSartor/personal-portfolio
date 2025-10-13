import { useLanguage } from '../hooks/useLanguage';

const educationData = [
  {
    type: "degree",
    title: "Ingeniería en Sistemas de Información",
    institution: "UTN Santa Fe",
    year: "2013",
    status: "Cursado finalizado",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    )
  },
  {
    type: "scholarship",
    title: "Beca Estudiantil Internacional",
    institution: "Nazionale Paolo Diacono di Cividale del Friuli, Italia",
    year: "2011",
    status: "Completada",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
      </svg>
    )
  },
  {
    type: "technical",
    title: "Técnico Electromecánico",
    institution: "Escuela E.E.T.P N°451",
    year: "Completado",
    status: "Título obtenido",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const certifications = [
  {
    title: "Desarrollo Full-Stack simplificado: Laravel, Vue y React",
    provider: "Udemy",
    year: "2025",
    category: "Full-Stack",
    recent: true
  },
  {
    title: "Domina PHP",
    provider: "LinkedIn Learning",
    year: "2024",
    category: "Backend",
    recent: true
  },
  {
    title: "Front End Python",
    provider: "Gobierno CABA",
    year: "2024",
    category: "Frontend",
    recent: true
  },
  {
    title: "Master en PHP, SQL, POO, MVC, Laravel, Symfony, WordPress",
    provider: "Udemy",
    year: "2024",
    category: "Backend",
    recent: true
  },
  {
    title: "Python para no matemáticos",
    provider: "Udemy",
    year: "2023",
    category: "Programming",
    recent: false
  }
];

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-container fade-in-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12">{t('education.title')}</h2>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-secondary-800 mb-8 text-center">
            {t('education.academicTitle')}
          </h3>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div key={index} className="card group hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-secondary-900 mb-2">
                      {edu.title}
                    </h4>
                    <p className="text-primary-600 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full font-medium">
                        {edu.year}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary-800 mb-8 text-center">
            {t('education.certificationsTitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card group hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-secondary-900 mb-2 line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-primary-600 font-semibold mb-2">
                      {cert.provider}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full font-medium">
                        {cert.year}
                      </span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                        {cert.category}
                      </span>
                      {cert.recent && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          {t('education.recent')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200/50 text-center">
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">
              {t('education.continuousLearningTitle')}
            </h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              {t('education.continuousLearningDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
