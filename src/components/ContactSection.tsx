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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl mb-4 block">📞</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
              >
                <span className="text-3xl">{info.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {info.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {t.contact.followUs}
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:shadow-xl transition-shadow"
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
            className="relative rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {t.contact.address}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
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
