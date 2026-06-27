import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    closeMenu();
    if (id === 'intro') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const linkStyles = 
    "cursor-pointer text-[11px] font-mona tracking-[0.15em] uppercase transition-all duration-300 text-softGray hover:text-darkRed hover:font-bold";

  const mobileLinkStyles = 
    "cursor-pointer text-[20px] font-syne tracking-[0.25em] uppercase transition-all duration-300 block py-4 text-center text-softGray hover:text-darkRed hover:font-bold";

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.15
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: -20 },
    opened: { opacity: 1, y: 0 }
  };

  return (
    <header className="bg-mainBlack text-fontGray px-6 py-5 md:px-[3rem] md:py-[1.7rem] sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-[12px] text-softGray tracking-widest uppercase font-dm z-50">
          JC - Portfolio
        </div>
        
        <ul className="hidden md:flex justify-around gap-[36px] items-center">
          <li>
            <button onClick={() => scrollToSection('intro')} className={linkStyles}>
              HOME
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className={linkStyles}>
              PROJECTS
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className={linkStyles}>
              ABOUT
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className={linkStyles}>
              CONTACT
            </button>
          </li>
        </ul>

        <button 
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center md:hidden z-50 w-8 h-8 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span 
            className={`bg-white block transition-all duration-300 h-0.5 w-6 rounded-sm ${
              isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
            }`}
          />
          <span 
            className={`bg-white block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span 
            className={`bg-white block transition-all duration-300 h-0.5 w-6 rounded-sm ${
              isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center z-40 h-screen w-screen"
          >
            <ul className="flex flex-col gap-4 w-full px-8">
              <motion.li variants={linkVariants}>
                <button onClick={() => scrollToSection('intro')} className={mobileLinkStyles}>
                  HOME
                </button>
              </motion.li>
              <motion.li variants={linkVariants}>
                <button onClick={() => scrollToSection('projects')} className={mobileLinkStyles}>
                  PROJECTS
                </button>
              </motion.li>
              <motion.li variants={linkVariants}>
                <button onClick={() => scrollToSection('about')} className={mobileLinkStyles}>
                  ABOUT
                </button>
              </motion.li>
              <motion.li variants={linkVariants}>
                <button onClick={() => scrollToSection('contact')} className={mobileLinkStyles}>
                  CONTACT
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;