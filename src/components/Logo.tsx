import { Link } from "react-router";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Ir al inicio">
      <div className="relative h-11 w-12 shrink-0">
        <span className={`absolute left-0 top-0 font-serif text-[35px] leading-none italic ${light ? "text-white" : "text-[#0B6B1E]"}`}>A</span>
        <span className={`absolute bottom-0 right-0 font-serif text-[35px] leading-none ${light ? "text-white/70" : "text-[#111111]"}`}>B</span>
      </div>
      <div>
        <p className={`font-serif text-[20px] leading-tight ${light ? "text-white" : "text-[#111111]"}`}>Angie Buitrago</p>
        <p className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-white/60" : "text-[#0B6B1E]"}`}>Contadora Pública</p>
      </div>
    </Link>
  );
}