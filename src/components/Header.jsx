import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Función para centralizar los estilos dinámicos de los enlaces de escritorio
  const linkStyles = ({ isActive }) =>
    `text-[11px] font-mona tracking-[0.15em] uppercase transition-all duration-300 ${
      isActive 
        ? 'text-lightText font-bold' 
        : 'text-softGray hover:text-darkRed hover:font-bold'
    }`;

  // Estilos para los enlaces del menú móvil
  const mobileLinkStyles = ({ isActive }) =>
    `text-[20px] font-syne tracking-[0.25em] uppercase transition-all duration-300 block py-4 text-center ${
      isActive 
        ? 'text-white font-bold' 
        : 'text-softGray hover:text-darkRed hover:font-bold'
    }`;

  // Animaciones para el overlay del menú móvil (framer-motion)
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
    <header className="bg-mainBlack text-fontGray px-6 py-5 md:px-[3rem] md:py-[1.7rem] relative z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto w-full">
        {/* LOGO */}
        <div className="text-[12px] text-softGray tracking-widest uppercase font-dm z-50">
          JC - Portfolio
        </div>
        
        {/* MENÚ DE NAVEGACIÓN - ESCRITORIO */}
        <ul className="hidden md:flex justify-around gap-[36px] items-center">
          <li>
            <NavLink to="/" className={linkStyles}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={linkStyles}>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkStyles}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkStyles}>
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* BOTÓN DE MENÚ MÓVIL (HAMBURGUESA) */}
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

      {/* MENÚ MÓVIL (OVERLAY DESPLEGABLE) */}
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
                <NavLink to="/" className={mobileLinkStyles} onClick={closeMenu}>
                  HOME
                </NavLink>
              </motion.li>
              <motion.li variants={linkVariants}>
                <NavLink to="/projects" className={mobileLinkStyles} onClick={closeMenu}>
                  PROJECTS
                </NavLink>
              </motion.li>
              <motion.li variants={linkVariants}>
                <NavLink to="/about" className={mobileLinkStyles} onClick={closeMenu}>
                  ABOUT
                </NavLink>
              </motion.li>
              <motion.li variants={linkVariants}>
                <NavLink to="/contact" className={mobileLinkStyles} onClick={closeMenu}>
                  CONTACT
                </NavLink>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;