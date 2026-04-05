'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { motion } from 'framer-motion';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-2xl sm:text-3xl">🔥</span>
              <span className="text-xl sm:text-2xl font-bold text-orange-500">Quetta Grill</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 max-w-md text-sm sm:text-base">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
                  >
                    {t.nav[item as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400 text-xs sm:text-sm md:text-base">
              <li className="break-words">📍 {t.contact.address}</li>
              <li>📞 {t.contact.phone}</li>
              <li>✉️ {t.contact.email}</li>
            </ul>
          </div>
        </div>

        <motion.div
          className="border-t border-gray-700/50 mt-8 sm:mt-10 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Quetta Grill. {t.footer.rights}</p>
        </motion.div>
      </div>
    </footer>
  );
}
