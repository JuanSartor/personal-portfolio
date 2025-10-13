import { useLanguage } from '../hooks/useLanguage';

const skillCategories = [
  {
    titleKey: "backend",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: ["PHP", "Laravel", "MySQL", "SQL Server"],
    color: "from-blue-500 to-blue-400"
  },
  {
    titleKey: "frontend",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["JavaScript", "React", "jQuery", "HTML & CSS", "Bootstrap"],
    color: "from-green-500 to-green-400"
  },
  {
    titleKey: "cloud",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
    skills: ["AWS (S3, EC2, SES, RDS)", "Git, GitHub, Bitbucket"],
    color: "from-purple-500 to-purple-400"
  },
  {
    titleKey: "apis",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["Stripe", "Twilio", "SendGrid"],
    color: "from-orange-500 to-orange-400"
  }
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-container fade-in-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">{t('skills.title')}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card group hover:scale-105">
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-800">
                  {t(`skills.categories.${category.titleKey}`)}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-badge text-center transform transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${(index * 0.1 + skillIndex * 0.05)}s`
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200/50">
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">
              {t('skills.continuousLearning.title')}
            </h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              {t('skills.continuousLearning.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
