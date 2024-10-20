'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import AnimatedLink from '../common/AnimatedLink';

import { navLinks } from '@/constant/navLinks';

export default function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonControls = useAnimation();

  const toggleMenu = async () => {
    if (isMenuOpen) {
      // Close the menu: animate button out first
      await buttonControls.start({ y: 10, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } });
      setIsMenuOpen(false);
    } else {
      // Open the menu immediately, then handle button
      setIsMenuOpen(true);
    }
  };

  const startButtonAnimation = async () => {
    await buttonControls.start({ y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } });
  };

  const closeMenu = useCallback(async () => {
    if (isMenuOpen) {
      await buttonControls.start({ y: 10, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } });
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, buttonControls]);

  /**
   * Make possible to close the menu by clicking anywhere else on the page or by pressing escape key
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as HTMLElement).closest('header')) {
        closeMenu();
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (isMenuOpen && event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <div className="relative leading-none">
      <button
        className="cursor-pointer font-medium list-none text-right uppercase opacity-80 hover:opacity-100 transition-opacity sm:pl-4 pb-4"
        onClick={toggleMenu}
      >
        <motion.span
          className="inline-block"
          key={isMenuOpen ? 'close' : 'menu'}
          initial={{ y: 0, opacity: 1 }}
          animate={buttonControls}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </motion.span>
      </button>
      <AnimatePresence mode="wait" onExitComplete={startButtonAnimation}>
        {isMenuOpen && (
          <nav className="absolute top-100 right-0 text-right uppercase">
            <motion.ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: 'easeIn',
                  }}
                  onAnimationComplete={() => {
                    if (index === 2 && isMenuOpen) {
                      startButtonAnimation();
                    }
                  }}
                >
                  <AnimatedLink title={link.title} url={link.url} />
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        )}
      </AnimatePresence>
    </div>
  );
}
