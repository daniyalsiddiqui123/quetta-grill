'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { motion } from 'framer-motion';

export default function ReservationCTA() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="reservation" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-red-700/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl sm:text-6xl mb-4 sm:mb-6 block">🎉</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            {t.reservation.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            {t.reservation.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl transition-all shadow-xl"
            >
              {t.reservation.button}
            </motion.button>
            <div className="text-white">
              <p className="text-xs sm:text-sm opacity-80">{t.reservation.call}</p>
              <a
                href="tel:+966123456789"
                className="text-xl sm:text-2xl font-bold hover:text-orange-200 transition-colors"
              >
                {t.contact.phone}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Reservation Form */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6">Quick Reservation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
            />
            <input
              type="date"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
            />
            <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base">
              <option value="" className="text-gray-900">Number of Guests</option>
              <option value="2" className="text-gray-900">2 Guests</option>
              <option value="4" className="text-gray-900">4 Guests</option>
              <option value="6" className="text-gray-900">6 Guests</option>
              <option value="8" className="text-gray-900">8+ Guests</option>
            </select>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 sm:mt-6 w-full bg-white text-orange-600 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-xl transition-all shadow-lg"
          >
            Confirm Reservation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
