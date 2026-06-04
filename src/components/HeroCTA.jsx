import { Link } from 'react-router-dom';

export default function HeroCTA() {
  return (
    <div className="absolute bottom-[40px] right-[48px] z-10 flex items-center gap-6">
      
      {/* BOTÓN SECUNDARIO: VER PROYECTOS */}
      <Link 
        to="/projects" 
        className="flex items-center gap-2 font-dm text-[11px] text-white/50 tracking-[0.15em] uppercase transition-colors duration-200 hover:text-white"
      >
        View projects
        {/* SVG de la flecha exacta extraída de tu inspección */}
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>

      {/* BOTÓN PRINCIPAL: CONTACTAR */}
      <Link to="/contact">
        <button className="bg-[#8B1A1A] text-white/85 px-5 py-[10px] font-dm text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 hover:bg-[#a62424] active:scale-95">
          Contact
        </button>
      </Link>

    </div>
  );
}