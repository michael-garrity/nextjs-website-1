'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavItem from './NavItem';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '#about' },
  { text: 'Blog', href: '#articles' },
  { text: 'Contact', href: '#contact' },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <header>
        <nav className="nav">
          <Link href="/">
            <img
              src="/logo.svg"
              alt="menu"
              className="w-[150px] h-auto"
            />
          </Link>
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain nav__menu-bar"
            onClick={() => setNavActive(!navActive)}
          />
          <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
        </nav>
      </header>
    </motion.nav>
  );
};

export default Navbar;
