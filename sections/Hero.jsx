'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section id="hero-section" className={`${styles.yPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col md:mt-400`}
    >
      <div className="flex items-center flex-col relative z-10 lg:-top-[75px] md:-top-[85px]">
        <motion.div variants={textVariant(1.1)} className={styles.heroHeading}>
          <span className="font-extrabold">Lorem</span><span className="font-thin">Ipsum</span>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px] flex items-center justify-center"
      >
        <img
          src="/hero-img.png"
          alt="hero"
          className="h-2/3 w-2/3 m-auto z-10 relative lg:-top-[140px] md:-top-[120px] sm:-top-[40px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
