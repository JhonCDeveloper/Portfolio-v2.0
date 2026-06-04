export default function ScrollIndicator() {
    return (
        <div className="absolute bottom-[40px] left-[48px] z-10 flex flex-col items-center gap-[10px]">

            {/* LÍNEA DE ACENTO VERTICAL (Sutil detalle superior o inferior) */}
            <div className="w-[1px] h-8 bg-white/10" />

            {/* TEXTO ROTADO VERTICALMENTE */}
            <span className="font-dm text-[10px] text-white/20 tracking-[0.15em] uppercase [writing-mode:vertical-lr] select-none">
                Scroll
            </span>

        </div>
    );
}