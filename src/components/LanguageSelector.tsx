import { useLanguage } from '../hooks/useLanguage';
import { type Language } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'es' as Language, label: 'ES', flag: '🇪🇸' },
    { code: 'en' as Language, label: 'EN', flag: '🇺🇸' },
    { code: 'it' as Language, label: 'IT', flag: '🇮🇹' }
  ];

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium transition-all duration-200
            ${language === lang.code
              ? 'bg-primary-600 text-white shadow-sm'
              : 'text-secondary-700 hover:bg-white/20 hover:text-secondary-900'
            }
          `}
        >
          <span className="text-xs">{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );
}