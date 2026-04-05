'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const contactInfo = [
    { icon: '📍', label: 'Address', value: t.contact.address },
    { icon: '📞', label: 'Phone', value: t.contact.phone },
    { icon: '✉️', label: 'Email', value: t.contact.email },
    { icon: '🕐', label: 'Hours', value: t.contact.hours },
  ];

  const socialLinks = [
    { icon: '📘', name: 'Facebook', url: '#' },
    { icon: '📸', name: 'Instagram', url: '#' },
    { icon: '🐦', name: 'Twitter', url: '#' },
    { icon: '📱', name: 'WhatsApp', url: '#' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-4xl sm:text-5xl mb-3 sm:mb-4 block">📞</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-2">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all flex items-start gap-3 sm:gap-4"
              >
                <span className="text-2xl sm:text-3xl flex-shrink-0">{info.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
                    {info.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base break-words">{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-4 sm:pt-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
                {t.contact.followUs}
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 p-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center rounded-lg sm:rounded-xl">
              <div className="text-center px-4">
                <span className="text-5xl sm:text-6xl mb-3 sm:mb-4 block">🗺️</span>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">
                  {t.contact.address}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Interactive map integration available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
