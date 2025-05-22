'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative py-16 xs:py-20 md:py-24 px-4 max-w-[1400px] mx-auto"
    >
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
        <motion.div
          className="flex-1 max-w-full md:max-w-[50%] text-center md:text-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl xs:text-4xl md:text-6xl font-heading font-extrabold text-primary mb-4 [text-shadow:0_0_8px_rgba(0,255,255,0.5)]"
            animate={{
              textShadow: [
                '0 0 8px rgba(0,255,255,0.5)',
                '0 0 12px rgba(0,255,255,0.7)',
                '0 0 8px rgba(0,255,255,0.5)',
              ],
              x: [0, 3, -3, 0],
            }}
            transition={{ duration: 2.5, repeat: 1, ease: 'easeInOut' }}
          >
            Hi, I&#39;m Dedi Yanto
          </motion.h2>
          <motion.h3
            className="text-2xl xs:text-xl md:text-3xl text-tertiary font-semibold mb-6"
            animate={{
              opacity: [1, 0.8, 1],
              x: [0, 1, -1, 0],
            }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5 }}
          >
            A passionate developer focused on building impactful digital experiences.
          </motion.h3>
          <p className="text-xl xs:text-base text-secondaryText mb-6">
            A software developer skilled in <span className="text-primary">Kotlin</span>,{' '}
            <span className="text-primary">React</span>, and{' '}
            <span className="text-primary">HTML/CSS</span>.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <Link
              href="#projects"
              scroll={true}
              className="inline-block px-8 py-4 bg-primary text-background rounded-md text-lg xs:text-base hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:scale-105 transition-all duration-300"
            >
              View My Projects
            </Link>
            <Link
              href="#contact"
              scroll={true}
              className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-md text-lg xs:text-base hover:bg-primary hover:text-background hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center md:justify-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/avatar.png"
            alt="Holographic Avatar of Dedi Yanto"
            width={360}
            height={360}
            className="max-w-full h-auto w-[180px] sm:w-[280px] md:w-[360px] rounded-full opacity-90 border-[1px] border-[rgba(0,255,255,0.5)] [filter:drop-shadow(0_0_8px_rgba(0,255,255,0.3))] relative z-10"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;