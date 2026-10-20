   import SmartLink from "./SmartLink";

export default function Button({
  children,
    href = "/#contacto",
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "white";
  className?: string;
}) {
  const styles = {
    solid: "bg-[#0B6B1E] text-white border-[#0B6B1E] hover:bg-[#074f16] hover:border-[#074f16]",
    outline: "bg-white/80 text-[#0B6B1E] border-[#0B6B1E] hover:bg-[#edf7ef]",
    white: "bg-white text-[#0B6B1E] border-white hover:bg-[#eef7ef]",
  };
return (
  <SmartLink
    to={href}
    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-6 text-sm font-bold transition duration-200 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
  >
    {children}
  </SmartLink>
);
}