import { useLanguage } from '../hooks/useLanguage';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-white to-primary-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.08),transparent_50%)]"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 rounded-full blur-xl floating-element"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-100/40 rounded-full blur-2xl floating-element" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-300/20 rounded-full blur-lg floating-element" style={{animationDelay: '4s'}}></div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-secondary-900 via-primary-700 to-secondary-800 bg-clip-text text-transparent mb-6">
            {t('hero.greeting')} <span className="block lg:inline">{t('hero.name')}</span>
          </h1>
        </div>

        <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
          <p className="text-xl lg:text-2xl text-secondary-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('hero.title')}
            <br className="hidden lg:block" />
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{animationDelay: '0.6s'}}>
          <a
            href="https://www.linkedin.com/in/juan-ignacio-sartor-/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/JuanSartor"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </span>
          </a>


     <a
          href="https://wa.me/5493482557191"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
        
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 2.11.55 4.07 1.61 5.83L.5 23.5l5.79-1.59A11.46 11.46 0 0012 23.5c6.35 0 11.5-5.15 11.5-11.5S18.35.5 12 .5zm0 21c-1.84 0-3.63-.49-5.2-1.41l-.37-.22-3.44.95.94-3.35-.24-.39A9.46 9.46 0 012.5 12c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5zm4.91-7.3c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.19.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.33-1.57-1.49-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.45-.62-.46h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.34.98 2.63 1.11 2.81.14.18 1.94 2.96 4.7 4.16.66.29 1.18.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          </svg>
          WhatsApp
        </span>

    </a>
    
        </div>

  
      </div>
    </section>
  );
}
