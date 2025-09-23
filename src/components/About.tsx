export default function About() {
  return (
    <section id="about" className="section-container fade-in-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12">Sobre mí</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Pasión por la Tecnología
              </h3>
              <p className="text-lg leading-relaxed">
                Soy una persona <span className="font-semibold text-primary-600">responsable</span>,
                <span className="font-semibold text-primary-600"> proactiva</span> y con muchas ganas de aprender.
                Me apasiona encontrar soluciones eficientes y optimizarlas, siempre
                buscando el equilibrio perfecto entre recursos disponibles y alcance
                del proyecto.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="card bg-gradient-to-br from-primary-50 to-primary-100/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <h4 className="font-semibold text-primary-700">Enfoque</h4>
                </div>
                <p className="text-sm text-primary-600">Soluciones escalables y eficientes</p>
              </div>

              <div className="card bg-gradient-to-br from-secondary-50 to-secondary-100/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <h4 className="font-semibold text-secondary-700">Experiencia</h4>
                </div>
                <p className="text-sm text-secondary-600">Backend, Frontend y Cloud</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-600/10 to-transparent"></div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 floating-element"></div>
              <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/15 rounded-lg backdrop-blur-sm border border-white/25 floating-element" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-12 left-12 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 floating-element" style={{animationDelay: '2s'}}></div>

              {/* Code snippet overlay */}
              <div className="absolute bottom-6 right-6 bg-secondary-900/90 backdrop-blur-md rounded-lg p-4 text-xs text-primary-400 font-mono border border-primary-500/30">
                <div className="text-primary-300">// Siempre aprendiendo</div>
                <div className="text-white">const developer = {`{`}</div>
                <div className="text-white ml-2">passion: <span className="text-primary-400">'high'</span>,</div>
                <div className="text-white ml-2">learning: <span className="text-primary-400">'continuous'</span></div>
                <div className="text-white">{`}`};</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
