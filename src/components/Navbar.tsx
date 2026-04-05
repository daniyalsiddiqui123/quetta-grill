'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-opacity-0 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl sm:text-3xl">🔥</span>
            <span
              className={`text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-orange-600' : 'text-white'
              }`}
            >
              Quetta Grill
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {['home', 'menu', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm xl:text-base font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
              >
                {t.nav[item as keyof typeof t.nav]}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all backdrop-blur-xl bg-opacity-0 border border-white/20 hover:bg-white/10 ${
                isScrolled
                  ? '!border-gray-200/50 dark:!border-gray-700/50 !text-gray-700 dark:!text-gray-300'
                  : '!text-white'
              }`}
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('reservation')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 xl:px-6 py-2 xl:py-2.5 rounded-full text-sm xl:text-base font-medium hover:shadow-lg transition-all shadow-lg"
            >
              {t.nav.reserve}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleLanguage}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all backdrop-blur-xl bg-opacity-0 border border-white/20 hover:bg-white/10 ${
                isScrolled
                  ? '!border-gray-200/50 dark:!border-gray-700/50 !text-gray-700 dark:!text-gray-300'
                  : '!text-white'
              }`}
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all backdrop-blur-xl bg-opacity-0 border border-white/20 hover:bg-white/10 ${
                isScrolled
                  ? '!border-gray-200/50 dark:!border-gray-700/50 !text-gray-700 dark:!text-gray-300'
                  : '!text-white'
              }`}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all backdrop-blur-xl bg-opacity-0 border border-white/20 hover:bg-white/10 ${
                isScrolled
                  ? '!border-gray-200/50 dark:!border-gray-700/50 !text-gray-700 dark:!text-gray-300'
                  : '!text-white'
              }`}
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all backdrop-blur-xl bg-opacity-0 border border-white/20 hover:bg-white/10 ${
                isScrolled
                  ? '!border-gray-200/50 dark:!border-gray-700/50 !text-gray-700 dark:!text-gray-300'
                  : '!text-white'
              }`}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden"
          >
            <div className="mx-3 mt-2 p-4 rounded-2xl backdrop-blur-xl bg-opacity-0 border border-white/20 shadow-2xl">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-white/10 rounded-xl transition-all font-medium"
                >
                  {t.nav[item as keyof typeof t.nav]}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('reservation')}
                className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg"
              >
                {t.nav.reserve}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
