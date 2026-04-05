'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { menuData } from '@/data/menuData';
import { motion, AnimatePresence } from 'framer-motion';

export default function MenuSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { key: 'appetizers', icon: '🥗', label: t.menu.categories.appetizers },
    { key: 'mains', icon: '🍖', label: t.menu.categories.mains },
    { key: 'drinks', icon: '🥤', label: t.menu.categories.drinks },
    { key: 'desserts', icon: '🍮', label: t.menu.categories.desserts },
  ];

  const currentItems = menuData[activeCategory] || [];

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-4xl sm:text-5xl mb-3 sm:mb-4 block">📋</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {t.menu.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            {t.menu.subtitle}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 px-2">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.key)}
              className={`flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              <span className="text-lg sm:text-xl">{category.icon}</span>
              <span className="whitespace-nowrap">{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                {/* Item Image Placeholder */}
                <div className="h-36 sm:h-40 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center relative">
                  <span className="text-5xl sm:text-6xl">{item.image}</span>
                  {item.isPopular && (
                    <span className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                      ⭐ Popular
                    </span>
                  )}
                </div>

                {/* Item Info */}
                <div className="p-4 sm:p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      {item.name[language]}
                    </h3>
                    <span className="text-orange-600 font-bold whitespace-nowrap ml-2 text-sm sm:text-base">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {item.description[language]}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 sm:py-2.5 rounded-lg font-medium hover:shadow-lg transition-shadow text-sm sm:text-base"
                  >
                    {t.menu.orderNow}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
