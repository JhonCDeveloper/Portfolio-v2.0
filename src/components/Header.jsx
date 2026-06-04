import { NavLink } from 'react-router-dom';

function Header() {
  // Función para centralizar los estilos dinámicos de los enlaces
  const linkStyles = ({ isActive }) =>
    `text-[11px] font-mona tracking-[0.15em] uppercase transition-all duration-300 ${
      isActive 
        ? 'text-lightText font-bold' 
        : 'text-softGray hover:text-darkRed hover:font-bold'
    }`;

  return (
    <header className="bg-mainBlack text-fontGray px-[3rem] py-[1.7rem]">
      <nav className="flex justify-between items-center">
        {/* LOGO */}
        <div className="text-[12px] text-softGray tracking-widest uppercase font-dm">
          JC - Portfolio
        </div>
        
        {/* MENÚ DE NAVEGACIÓN */}
        <ul className="flex justify-around gap-[36px] items-center">
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
      </nav>
    </header>
  );
}

export default Header;