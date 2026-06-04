export default function Descriptors() {
  return (
    <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
      
      {/* ÍTEM 1: ENFOQUE */}
      <div className="md:pr-6 md:border-r border-white/5">
        <div className="font-dm text-[10px] text-white/20 tracking-[0.2em] uppercase mb-2">
          Focus
        </div>
        <div className="text-[13px] font-medium text-white/60 tracking-[0.01em]">
          Frontend · AI Automation
        </div>
      </div>

      {/* ÍTEM 2: STACK */}
      <div className="md:px-6 md:border-r border-white/5">
        <div className="font-dm text-[10px] text-white/20 tracking-[0.2em] uppercase mb-2">
          Stack
        </div>
        <div className="text-[13px] font-medium text-white/60 tracking-[0.01em]">
          React · TypeScript · FastAPI
        </div>
      </div>

      {/* ÍTEM 3: FORMACIÓN */}
      <div className="md:pl-6">
        <div className="font-dm text-[10px] text-white/20 tracking-[0.2em] uppercase mb-2">
          Education
        </div>
        <div className="text-[13px] font-medium text-white/60 tracking-[0.01em]">
          SENA · RIWI
        </div>
      </div>

    </div>
  );
}