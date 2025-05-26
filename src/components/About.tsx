'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Accomplishment } from '../types';
import AccomplishmentCard from './AccomplishmentCard';

const accomplishments: Accomplishment[] = [
  { title: '#1 Informatics Graduate', description: 'Graduated as the top-ranked student in the Informatics Program with the highest GPA of 3.92' },
  { title: 'Certified Android Developer (DCA)', description: 'Earned the Developer Certification for Android (DCA) from Dicoding, validating Android development skills.' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl font-heading mb-8 text-start font-bold text-primary [text-shadow:0_0_8px_rgba(0,255,255,0.5)]">
          About Me
        </h1>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl font-heading mb-6 text-tertiary font-semibold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Who Am I
          </motion.h2>
          <motion.p
            className="text-secondaryText text-lg mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            I&#39;m Dedi Yanto, a software developer with a passion for creating intuitive and impactful applications. Holding a B.Sc. in Computer Science, I have 2.5 years of experience in mobile development. I thrive on tackling complex challenges and staying ahead of tech trends. In my free time, I enjoy reading books and exploring the stock market through active trading.
          </motion.p>
        </motion.div>
        <div className="about-accomplishments">
          <motion.div
            className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 justify-content-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.2, delayChildren: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {accomplishments.map((item, index) => (
              <AccomplishmentCard key={index} accomplishment={item} />
            ))}
          </motion.div>
          <motion.div
            className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 my-8 justify-content-center"
            initial={{ opacity: 0, filter: 'grayscale(100%)' }}
            whileInView={{ opacity: 1, filter: 'grayscale(0%)' }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.1 }}
            style={{ willChange: 'opacity, filter' }}
          >
            <div className="col-span-full">
              <Image
                src="/DSC00186.jpg"
                alt="Photo of Dedi Yanto"
                width={1200}
                height={800}
                priority={true}
                className="w-full h-auto mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;