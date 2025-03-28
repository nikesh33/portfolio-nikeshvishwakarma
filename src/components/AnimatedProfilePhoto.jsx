import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePhoto from "../assets/images/profile-photo.jpg";

const sparkles = [
  { top: "10%", left: "20%", delay: 0 },
  { top: "15%", right: "20%", delay: 0.2 },
  { bottom: "20%", left: "30%", delay: 0.4 },
  { bottom: "15%", right: "25%", delay: 0.6 },
  { top: "5%", left: "50%", delay: 0.8 },
  { bottom: "5%", left: "10%", delay: 1 },
  { top: "50%", right: "5%", delay: 1.2 },
  { bottom: "35%", right: "15%", delay: 1.4 },
];

const AnimatedProfilePhoto = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center mb-8 relative overflow-visible">
        <div className="absolute inset-0 rounded-full pointer-events-none">
          {sparkles.map((sparkle, index) => (
            <motion.div
              key={index}
              className="absolute bg-white rounded-full"
              style={{ width: 6, height: 6, ...sparkle }}
              animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                delay: sparkle.delay,
              }}
            />
          ))}
        </div>
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.6), transparent 40%)",
            filter: "blur(12px)",
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.img
          src={profilePhoto}
          alt="Nikesh Vishwakarma"
          className="relative w-44 h-44 rounded-full object-cover cursor-pointer"
          style={{ objectPosition: "top center", zIndex: 2, background: "transparent" }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative max-w-md w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={profilePhoto}
                alt="Nikesh Vishwakarma"
                className="w-full h-full object-contain rounded-lg"
              />
              <motion.button
                className="absolute top-2 right-2 text-cyan-800 text-4xl"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedProfilePhoto;
