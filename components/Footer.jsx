'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Consectetur Adipiscing Elit
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] gap-[12px]">
          <span className="font-normal text-[16px] text-white">
            Learn more
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex">
            <img
              src="/mountain-icon.svg"
              alt="mountain icon"
              className="w-[40px] h-[40px] object-contain mr-2"
            />
            <img
              src="/logo.svg"
              alt="logo"
            />
          </div>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 LoremIpsum. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
