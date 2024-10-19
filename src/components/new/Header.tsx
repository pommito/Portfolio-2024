'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex justify-between items-start">
      <h2 className="font-medium leading-none uppercase">Victor Lebecq</h2>
      <AnimatePresence>
        <motion.div className="relative leading-none  ">
          <button
            className="cursor-pointer font-medium list-none text-right uppercase opacity-80 hover:opacity-100 transition-opacity pl-4 pb-4"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
          {isMenuOpen && (
            <nav className="absolute top-100 right-0 text-right uppercase">
              <ul className="flex flex-col gap-4">
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )}
        </motion.div>
      </AnimatePresence>
    </header>
  );
}
