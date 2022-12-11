'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { articles } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ArticleCard, TitleText, TypingText } from '../components';

const Articles = () => (
  <section className={`${styles.paddings} relative z-10`} id="articles">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="Articles" textStyles="text-center" />
      <TitleText title={<>Sed do eiusmod tempor</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {articles.map((item, index) => (
          <ArticleCard key={`article-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Articles;
