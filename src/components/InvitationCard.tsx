import React from 'react';
import { Calendar, Clock, MapPin, Heart, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import "./index.css";

const eventData = {
  brideAndGroom: "ch. Bhargava Nandan & ch. Thaman Sandesh",
  date: "May 4, 2025",
  time: "10:00 AM",
  lunchTime: "11:00 AM",
  venue: "Mini Kammakalyana Mandapam Tanuku",
  address: "Bypass Road, Tanuku",
  parents: {
    bride: {
      father: "Sri. Karuturi BhimaRaju",
      mother: "Smt. Manga (late)"
    },
    groom: {
      father: "Sri. Yannamani Ravindra Prasad",
      mother: "Smt. Nagadhanalakshmi (satya)"
    }
  }
};

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay }
  }),
};

const InvitationCard: React.FC = () => {
  return (
    <section
      id="invitation"
      className="py-24 px-4 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:40px_40px] opacity-5" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="bg-white/90 backdrop-blur-xl border border-rose-100 rounded-3xl shadow-2xl overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {/* Header Section */}
          <motion.div
            className="relative p-10 md:p-14 text-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/5560911/pexels-photo-5560911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
            }}
            variants={fadeUp}
            custom={0.1}
          >
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
            <motion.div className="relative z-10">
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              >
                <div className="bg-rose-600 text-white p-6 rounded-full shadow-xl">
                  <Heart size={36} />
                </div>
              </motion.div>

              <motion.p className="text-rose-600 text-lg font-medium font-serif mb-2"
                variants={fadeUp} custom={0.3}>
                Together with their families
              </motion.p>
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight font-serif mb-3"
                variants={fadeUp}
                custom={0.4}
              >
                {eventData.brideAndGroom}
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 font-medium"
                variants={fadeUp}
                custom={0.5}
              >
                Request the honor of your presence
              </motion.p>
              <motion.p
                className="text-lg text-gray-600"
                variants={fadeUp}
                custom={0.6}
              >
                at their Dhoti Ceremony
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Parents */}
      

          {/* Date/Time/Venue */}
          <motion.div className="bg-rose-50 px-6 py-10 md:px-12" variants={fadeUp} custom={0.8}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[Calendar, Clock, MapPin].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  variants={fadeUp}
                  custom={0.9 + index * 0.1}
                >
                  <Icon className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                  <p className="text-gray-900 font-semibold text-lg">
                    {[eventData.date, eventData.time, eventData.venue][index]}
                  </p>
                  
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div className="text-center" variants={fadeUp} custom={1.3}>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-500 text-white text-lg font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <Music className="w-5 h-5 animate-pulse" />
                Join the Celebration
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationCard;
