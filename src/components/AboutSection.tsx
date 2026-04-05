'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === 'ar';

  const stats = [
    { value: '14+', label: t.about.years, icon: '🏆' },
    { value: '500+', label: t.about.dishes, icon: '🍽️' },
    { value: '50K+', label: t.about.customers, icon: '❤️' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="aspect-square bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl text-center min-w-[100px]"
                >
                  <span className="text-2xl block mb-1">{stat.icon}</span>
                  <span className="text-2xl font-bold text-orange-600 block">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl mb-4 block">👨‍🍳</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.about.title}
            </h2>
            <p className="text-xl text-orange-600 font-semibold mb-6">
              {t.about.subtitle}
            </p>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">{t.about.description1}</p>
              <p className="leading-relaxed">{t.about.description2}</p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-lg">
                <span className="text-orange-600">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Halal Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-lg">
                <span className="text-orange-600">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-lg">
                <span className="text-orange-600">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Family Recipes</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
